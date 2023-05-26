// core-js polyfills
// import 'core-js/es/array/iterator'
// import 'core-js/es/array/from';
// import 'core-js/es/array/reverse';
// import 'core-js/es/array/flat-map';
// import 'core-js/es/string/pad-start';
// import 'core-js/es/string/replace-all'
// import 'core-js/es/object/entries'
// import 'core-js/es/reflect/construct'
// Workaround because the core-js polyfill doesn't play nice with SWC:
// Reflect.get = undefined

// To test in es5 mode - first undefine the polyfilled methods
// Object.defineProperty(Array.prototype, "flatMap", {
//   configurable: true,
//   enumerable: true,
//   value: undefined,
// });
// Object.defineProperty(String.prototype, "padStart", {
//   configurable: true,
//   enumerable: true,
//   value: undefined,
// });
// Object.defineProperty(Math, "log10", {
//   configurable: true,
//   enumerable: true,
//   value: undefined,
// });
// Object.defineProperty(Object, "assign", {
//   configurable: true,
//   enumerable: true,
//   value: undefined,
// });

// own polyfills
import "./polyfill/arrayFlatMap";
import "./polyfill/stringPadStart";
// import "./polyfill/mathLog10";
// import './polyfill/objectAssign';

// to easily be able to cleanup webpack output afterwards, use ES5 require method and not from
import midiremote_api = require("midiremote_api_v1");

import { logger, MR_ActiveDevice, MR_ActiveMapping } from "midiremote_api_v1";

import { decoratePage } from "./decorators/page";
import { decorateSurface } from "./decorators/surface";
import { Devices, MainDevice } from "./Devices";
import { makeHostMapping } from "./mapping";
import { bindDeviceToMidi, makeGlobalBooleanVariables } from "./midi";
import { setupDeviceConnection } from "./midi/connection";
import { ChannelSurfaceElements } from "./surface";
import { makeTimerUtils } from "./util";
import { debugCallMethod } from "./utils-debug";
import { getArrayEntries } from "./utils-es5";

// PIN: set device to Icon QCon Pro G2
const driver = midiremote_api.makeDeviceDriver("Icon", "QCon Pro G2", "Nerseth");

const surface = decorateSurface(driver.mSurface);

// Create devices, i.e., midi ports and surface elements for each physical device
const devices = new Devices(driver, surface);

const deviceConnection = setupDeviceConnection(driver, devices);
// PIN: avoid destructuring
const activationCallbacks = deviceConnection.activationCallbacks;
const segmentDisplayManager = deviceConnection.segmentDisplayManager;

activationCallbacks.addCallback(() => {
  if (process.env["NODE_ENV"] !== "development") {
    // @ts-expect-error The script version is filled in by postinstall
    console.log("Activating cubase-icon_qcon_pro_g2-midiremote v" + SCRIPT_VERSION);
    console.log(
      "A newer version may be available at https://github.com/perivar/cubase-icon_qcon_pro_g2-midiremote"
    );
  }
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

  if (process.env["NODE_ENV"] === "development") {
    if (device instanceof MainDevice) {
      const controlSectionElements = device.controlSectionElements;
      const channelElements = device.channelElements;

      // PIN: REMOVE ME
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
    }
  }
});

// Map elements to host functions
makeHostMapping(page, devices, segmentDisplayManager, globalBooleanVariables, activationCallbacks);

if (process.env["NODE_ENV"] === "development") {
  // call MR_DeviceDriver mOnActivate
  const activeDevice = new MR_ActiveDevice();
  logger.info(
    `Calling MR_DeviceDriver mOnActivate(${JSON.stringify({
      activeDevice: activeDevice,
    })})`
  );
  driver.mOnActivate(activeDevice);

  // call channels mOnDisplayValueChange
  const channelElements: ChannelSurfaceElements = devices.flatMap(
    (device) => device.channelElements
  );

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
    debugCallMethod(
      "buttons.solo.onSurfaceValueChange",
      channel.buttons.solo.onSurfaceValueChange,
      [activeDevice, 0.56, 0.45]
    );
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
}
