// https://dev.to/studio_m_song/testing-with-jest-and-typescript-the-tricky-parts-1gnc
// https://stackoverflow.com/questions/71698279/how-to-mock-an-api-call-with-jest-amplify-api
// https://formidable.com/blog/2022/debug-jest/
// https://chrisboakes.com/mocking-javascript-class-inner-functions-with-jest/
//
// jest.mock('midiremote_api_v1') // this happens automatically with automocking
// const mockAPI = jest.mocked(midiremote_api)
// mockAPI.makeDeviceDriver.mockImplementation()

// to easily be able to cleanup webpack output afterwards, use ES5 require method and not from
import midiremote_api = require("midiremote_api_v1");

import { logger, MR_ActiveDevice, MR_ActiveMapping } from "midiremote_api_v1";

import { decoratePage } from "../decorators/page";
import { decorateSurface } from "../decorators/surface";
import { Devices, MainDevice } from "../Devices";
import { makeHostMapping } from "../mapping";
import { bindDeviceToMidi, makeGlobalBooleanVariables } from "../midi";
import { setupDeviceConnection } from "../midi/connection";
import { ChannelSurfaceElements } from "../surface";
import { makeTimerUtils } from "../util";
import { debugCallMethod } from "../utils-debug";
import { getArrayEntries } from "../utils-es5";

// ORIGINAL CODE
const driver = midiremote_api.makeDeviceDriver("Icon", "QCon Pro G2", "Nerseth");

const surface = decorateSurface(driver.mSurface);

// Create devices, i.e., midi ports and surface elements for each physical device
const devices = new Devices(driver, surface);

// 1. TEST SURFACE
devices.forEach((device) => {
  if (device instanceof MainDevice) {
    const controlSectionElements = device.controlSectionElements;
    const channelElements = device.channelElements;

    logger.warn(
      `decorateSurface(${JSON.stringify(
        {
          channelElements: channelElements,
          controlSectionElements: controlSectionElements,
        },
        null,
        2
      )})`
    );

    test("SURFACE", () => {
      expect(channelElements[7].encoder.y).toStrictEqual(3);
      expect(controlSectionElements.buttons.edit.h).toStrictEqual(1.5);
      expect(controlSectionElements.buttons.edit.mLedValue.name).toStrictEqual("LedButtonLed");
    });
  }
});

const deviceConnection = setupDeviceConnection(driver, devices);
// PIN: avoid destructuring
const activationCallbacks = deviceConnection.activationCallbacks;
const segmentDisplayManager = deviceConnection.segmentDisplayManager;

activationCallbacks.addCallback(() => {
  console.log("Activating cubase-icon_qcon_pro_g2-midiremote");
});

const globalBooleanVariables = makeGlobalBooleanVariables(surface);

activationCallbacks.addCallback((context) => {
  // Setting `runCallbacksInstantly` to `true` below is a workaround for
  // https://forums.steinberg.net/t/831123.
  globalBooleanVariables.areMotorsActive.set(context, true, true);
});

const page = decoratePage(driver.mMapping.makePage("Mixer"), surface);
const timerUtils = makeTimerUtils(page, surface);

// Bind elements to MIDI
devices.forEach((device) => {
  bindDeviceToMidi(device, globalBooleanVariables, activationCallbacks, timerUtils);
});

// 2. TEST MIDI BINDING
devices.forEach((device) => {
  if (device instanceof MainDevice) {
    const controlSectionElements = device.controlSectionElements;
    const channelElements = device.channelElements;

    logger.warn(
      `bindDeviceToMidi(${JSON.stringify(
        {
          channelElements: channelElements,
          controlSectionElements: controlSectionElements,
        },
        null,
        2
      )})`
    );

    test("MIDI BINDING", () => {
      expect(channelElements[7].encoder.mEncoderValue.mMidiBinding.boundTo).toEqual({
        channelNumber: 0,
        class: "MR_MidiBindingToControlChange",
        controlChangeNumber: 23,
      });
      expect(controlSectionElements.buttons.edit.mSurfaceValue.mMidiBinding.boundTo).toEqual({
        channelNumber: 0,
        class: "MR_MidiBindingToNote",
        pitch: 51,
      });
    });
  }
});

// Map elements to host functions
makeHostMapping(page, devices, segmentDisplayManager, globalBooleanVariables, activationCallbacks);

// 3. TEST HOST MAPPIGNS

logger.warn(
  `makeHostMapping(${JSON.stringify(
    {
      page: page,
    },
    null,
    2
  )})`
);

test("HOST MAPPINGS", () => {
  expect(page.valueBindings[300].toString()).toStrictEqual(
    '{"class":"MR_HostBinding","hostValue":{"class":"MR_EQBandGainValue","band":4},\
"subPage":{"class":"MR_SubPage","mAction":{"class":"MR_SubPageActions","mActivate":{"class":"MR_SubPageActionActivate"}},\
"name":"EQ 2 Flip"},\
"surfaceValue":{"class":"MR_SurfaceElementValue","mMidiBinding":{"class":"MR_SurfaceValueMidiBinding","inputPort":{"class":"MR_DeviceMidiInput","name":"Input 1 - Main"},\
"boundTo":{"class":"MR_MidiBindingToPitchBend","channelNumber":5,"mValueRange":{"class":"MR_MidiBindingValueRange14Bit"}}}}}'
  );
});

// MORE TESTS
// call MR_DeviceDriver mOnActivate
const activeDevice = new MR_ActiveDevice();
logger.info(
  `Calling MR_DeviceDriver mOnActivate(${JSON.stringify({
    activeDevice: activeDevice,
  })})`
);
driver.mOnActivate(activeDevice);

// call channels mOnDisplayValueChange
const channelElements: ChannelSurfaceElements = devices.flatMap((device) => device.channelElements);

for (let i = 0, arr = getArrayEntries(channelElements); i < arr.length; i++) {
  const channelObj = arr[i];
  const channelIndex = channelObj[0];
  const channel = channelObj[1];

  const activeDevice = new MR_ActiveDevice();

  // encoder
  debugCallMethod(
    "mEncoderValue.mOnDisplayValueChange",
    channel.encoder.mEncoderValue.mOnDisplayValueChange,
    [activeDevice, "Audio 00" + channelIndex, "gram"]
  );
  debugCallMethod(
    "mEncoderValue.mOnProcessValueChange",
    channel.encoder.mEncoderValue.mOnProcessValueChange,
    [activeDevice, 0.5, 0]
  );
  debugCallMethod("mEncoderValue.mOnTitleChange", channel.encoder.mEncoderValue.mOnTitleChange, [
    activeDevice,
    "",
    "Pan izquierda-derecha",
  ]);

  // faders
  debugCallMethod(
    "fader.mTouchedValueInternal.mOnProcessValueChange",
    channel.fader.mTouchedValueInternal.mOnProcessValueChange,
    [activeDevice, 0.75, 0]
  );
  debugCallMethod(
    "fader.mSurfaceValue.mOnProcessValueChange",
    channel.fader.mSurfaceValue.mOnProcessValueChange,
    [activeDevice, 0.66, 1]
  );
  debugCallMethod(
    "fader.mSurfaceValue.mOnTitleChange",
    channel.fader.mSurfaceValue.mOnTitleChange,
    [activeDevice, ""]
  );

  // buttons
  debugCallMethod("buttons.solo.onSurfaceValueChange", channel.buttons.solo.onSurfaceValueChange, [
    activeDevice,
    0.56,
    0.45,
  ]);
  debugCallMethod(
    "buttons.solo.mLedValue.mOnProcessValueChange",
    channel.buttons.solo.mLedValue.mOnProcessValueChange,
    [activeDevice, 0.23, 0.11]
  );
  debugCallMethod(
    "buttons.solo.mSurfaceValue.mOnTitleChange",
    channel.buttons.solo.mSurfaceValue.mOnTitleChange,
    [activeDevice, ""]
  );

  // other
  debugCallMethod(
    "scribbleStrip.trackTitle.mOnTitleChange",
    channel.scribbleStrip.trackTitle.mOnTitleChange,
    [activeDevice, ""]
  );
  debugCallMethod("vuMeter.mOnProcessValueChange", channel.vuMeter.mOnProcessValueChange, [
    activeDevice,
    0.78,
    0.5,
  ]);
}

// call timer
const timerPageArea = page.subPageAreas["Timer"];
if (timerPageArea) {
  const timerPage = timerPageArea.subPages["Timer Page"];
  if (timerPage) {
    timerPage.mOnActivate(activeDevice, new MR_ActiveMapping());
  }
}
