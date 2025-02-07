import { MR_ActiveDevice, MR_DeviceSurface } from "midiremote_api_v1";

import { TouchSensitiveFader } from "../decorators/surface";
import { Device, MainDevice } from "../Devices";
import { ContextStateVariable, createElements, GlobalBooleanVariable, TimerUtils } from "../util";
import { getArrayEntries, Log10 } from "../utils-es5";
import { ActivationCallbacks } from "./connection";
import { LcdManager } from "./managers/LcdManager";
import { PortPair } from "./PortPair";

export enum EncoderDisplayMode {
  SingleDot = 0,
  BoostOrCut = 1,
  Wrap = 2,
  Spread = 3,
}

/** Declares some global context-dependent variables that (may) affect multiple devices */
export const makeGlobalBooleanVariables = (surface: MR_DeviceSurface) => ({
  areMotorsActive: new GlobalBooleanVariable(surface),
  isValueDisplayModeActive: new GlobalBooleanVariable(surface),
  isEncoderAssignmentActive: createElements(6, () => new GlobalBooleanVariable(surface)),
  isFlipModeActive: new GlobalBooleanVariable(surface),
});

export type GlobalBooleanVariables = ReturnType<typeof makeGlobalBooleanVariables>;

export const bindDeviceToMidi = (
  device: Device,
  globalBooleanVariables: GlobalBooleanVariables,
  activationCallbacks: ActivationCallbacks,
  timerUtils: TimerUtils
) => {
  const ports = device.ports;
  // PIN: avoid destructuring
  const setTimeout = timerUtils.setTimeout;

  function bindFader(ports: PortPair, fader: TouchSensitiveFader, faderIndex: number) {
    fader.mSurfaceValue.mMidiBinding.setInputPort(ports.input).bindToPitchBend(faderIndex);
    fader.mTouchedValue.mMidiBinding.setInputPort(ports.input).bindToNote(0, 104 + faderIndex);
    fader.mTouchedValueInternal.mMidiBinding
      .setInputPort(ports.input)
      .bindToNote(0, 104 + faderIndex);

    const sendValue = (context: MR_ActiveDevice, value: number) => {
      value *= 0x3fff;
      ports.output.sendMidi(context, [0xe0 + faderIndex, value & 0x7f, value >> 7]);
    };

    const isFaderTouched = new ContextStateVariable(false);
    fader.mTouchedValueInternal.mOnProcessValueChange = (context, value) => {
      const isFaderTouchedValue = Boolean(value);
      isFaderTouched.set(context, isFaderTouchedValue);
      if (!isFaderTouchedValue) {
        sendValue(context, lastFaderValue.get(context));
      }
    };

    const forceUpdate = new ContextStateVariable(true);
    const lastFaderValue = new ContextStateVariable(0);
    fader.mSurfaceValue.mOnProcessValueChange = (context, newValue, difference) => {
      // Prevent identical messages to reduce fader noise
      if (
        globalBooleanVariables.areMotorsActive.get(context) &&
        !isFaderTouched.get(context) &&
        (difference !== 0 || lastFaderValue.get(context) === 0 || forceUpdate.get(context))
      ) {
        forceUpdate.set(context, false);
        sendValue(context, newValue);
      }

      lastFaderValue.set(context, newValue);
    };

    // Set fader to `0` when unassigned
    fader.mSurfaceValue.mOnTitleChange = (context, title) => {
      if (title === "") {
        forceUpdate.set(context, true);
        fader.mSurfaceValue.setProcessValue(context, 0);
        // `mOnProcessValueChange` somehow isn't run here on `setProcessValue()`, hence:
        lastFaderValue.set(context, 0);
        if (globalBooleanVariables.areMotorsActive.get(context)) {
          forceUpdate.set(context, false);
          sendValue(context, 0);
        }
      }
    };

    globalBooleanVariables.areMotorsActive.addOnChangeCallback((context, areMotorsActive) => {
      if (areMotorsActive) {
        sendValue(context, lastFaderValue.get(context));
      }
    });
  }

  // PIN: converted for-of Array.entries() loop to ES5
  // for (const [channelIndex, channel] of device.channelElements.entries()) {
  for (let i = 0, arr = getArrayEntries(device.channelElements); i < arr.length; i++) {
    const channelObj = arr[i];
    const channelIndex = channelObj[0];
    const channel = channelObj[1];

    // Push Encoder
    channel.encoder.mEncoderValue.mMidiBinding
      .setInputPort(ports.input)
      .bindToControlChange(0, 16 + channelIndex)
      .setTypeRelativeSignedBit();
    channel.encoder.mPushValue.mMidiBinding
      .setInputPort(ports.input)
      .bindToNote(0, 32 + channelIndex);
    channel.encoder.mEncoderValue.mOnProcessValueChange = (context, newValue) => {
      const displayMode = channel.encoder.mDisplayModeValue.getProcessValue(context);

      const isCenterLedOn = newValue === (displayMode === EncoderDisplayMode.Spread ? 0 : 0.5);
      const position =
        1 + Math.round(newValue * (displayMode === EncoderDisplayMode.Spread ? 5 : 10));

      ports.output.sendMidi(context, [
        0xb0,
        0x30 + channelIndex,
        (+isCenterLedOn << 6) + (displayMode << 4) + position,
      ]);
    };

    // Scribble Strip
    const currentParameterName = new ContextStateVariable("");
    const currentDisplayValue = new ContextStateVariable("");
    const isLocalValueModeActive = new ContextStateVariable(false);

    const updateDisplay = (context: MR_ActiveDevice) => {
      device.lcdManager.setChannelText(
        context,
        0,
        channelIndex,
        isLocalValueModeActive.get(context) ||
          globalBooleanVariables.isValueDisplayModeActive.get(context)
          ? currentDisplayValue.get(context)
          : currentParameterName.get(context)
      );
    };
    channel.encoder.mEncoderValue.mOnDisplayValueChange = (context, value) => {
      value =
        {
          // French
          Éteint: "Eteint",

          // Japanese
          オン: "On",
          オフ: "Off",

          // Russian
          "Вкл.": "On",
          "Выкл.": "Off",

          // Chinese
          开: "On",
          关: "Off",
        }[value] ?? value;

      currentDisplayValue.set(
        context,
        LcdManager.centerString(
          LcdManager.abbreviateString(LcdManager.stripNonAsciiCharacters(value))
        )
      );
      isLocalValueModeActive.set(context, true);
      updateDisplay(context);
      setTimeout(
        context,
        `updateDisplay${channelIndex}`,
        (context) => {
          isLocalValueModeActive.set(context, false);
          updateDisplay(context);
        },
        1
      );
    };
    channel.encoder.mEncoderValue.mOnTitleChange = (context, title1, title2) => {
      // Reset encoder LED ring when channel becomes unassigned
      if (title1 === "") {
        ports.output.sendMidi(context, [0xb0, 0x30 + channelIndex, 0]);
      }

      // Luckily, `mOnTitleChange` runs after `mOnDisplayValueChange`, so setting
      // `isLocalValueModeActive` to `false` here overwrites the `true` that `mOnDisplayValueChange`
      // sets
      isLocalValueModeActive.set(context, false);

      title2 =
        {
          // English
          "Pan Left-Right": "Pan",

          // German
          "Pan links/rechts": "Pan",

          // Spanish
          "Pan izquierda-derecha": "Pan",

          // French
          "Pan gauche-droit": "Pan",
          "Pré/Post": "PrePost",

          // Italian
          "Pan sinistra-destra": "Pan",
          Monitoraggio: "Monitor",

          // Japanese
          左右パン: "Pan",
          モニタリング: "Monitor",
          レベル: "Level",

          // Portuguese
          "Pan Esquerda-Direita": "Pan",
          Nível: "Nivel",
          "Pré/Pós": "PrePost",

          // Russian
          "Панорама Лево-Право": "Pan",
          Монитор: "Monitor",
          Уровень: "Level",
          "Пре/Пост": "PrePost",

          // Chinese
          "声像 左-右": "Pan",
          监听: "Monitor",
          电平: "Level",
          "前置/后置": "PrePost",
        }[title2] ?? title2;

      currentParameterName.set(
        context,
        LcdManager.centerString(
          LcdManager.abbreviateString(LcdManager.stripNonAsciiCharacters(title2))
        )
      );
      updateDisplay(context);
    };
    globalBooleanVariables.isValueDisplayModeActive.addOnChangeCallback(updateDisplay);

    channel.scribbleStrip.trackTitle.mOnTitleChange = (context, title) => {
      device.lcdManager.setChannelText(
        context,
        1,
        channelIndex,
        LcdManager.abbreviateString(LcdManager.stripNonAsciiCharacters(title))
      );
    };

    // VU Meter
    let lastMeterUpdateTime = 0;
    channel.vuMeter.mOnProcessValueChange = (context, newValue) => {
      const now: number = performance.now(); // ms

      if (now - lastMeterUpdateTime > 125) {
        // Apply a log scale twice to make the meters look more like Cubase's MixConsole meters
        newValue = 1 + Log10(0.1 + 0.9 * (1 + Log10(0.1 + 0.9 * newValue)));

        lastMeterUpdateTime = now;
        ports.output.sendMidi(context, [
          0xd0,
          (channelIndex << 4) + Math.ceil(newValue * 14 - 0.25),
        ]);
      }
    };

    // Channel Buttons
    const buttons = channel.buttons;

    // PIN: converted for-of Array.entries() loop to ES5
    buttons.record.bindToNote(ports, 0 + channelIndex, true);
    buttons.solo.bindToNote(ports, 8 + channelIndex, true);
    buttons.mute.bindToNote(ports, 16 + channelIndex, true);
    buttons.select.bindToNote(ports, 24 + channelIndex, true);

    // Fader
    bindFader(ports, channel.fader, channelIndex);
  }

  // Control Section (X-Touch only)
  if (device instanceof MainDevice) {
    const elements = device.controlSectionElements;
    const buttons = elements.buttons;

    const motorButton = buttons.automation[5];
    motorButton.onSurfaceValueChange.addCallback((context, value) => {
      if (value === 1) {
        globalBooleanVariables.areMotorsActive.toggle(context);
      }
    });
    globalBooleanVariables.areMotorsActive.addOnChangeCallback((context, value) => {
      motorButton.mLedValue.setProcessValue(context, +value);
    });

    activationCallbacks.addCallback((context) => {
      // Workaround for https://forums.steinberg.net/t/831123:
      ports.output.sendNoteOn(context, 79, 1); // turn on motors

      // Workaround for encoder assign buttons not being enabled on activation
      // (https://forums.steinberg.net/t/831123):
      ports.output.sendNoteOn(context, 42, 1); // turn on pan

      // PIN: converted for-of-multi loop to ES5
      // turn off page up/down, inserts, eq, fx send
      for (let i = 0, arr = [40, 41, 43, 44, 45]; i < arr.length; i++) {
        const note = arr[i];

        ports.output.sendNoteOn(context, note, 0);
      }
    });

    bindFader(ports, elements.mainFader, 8);

    buttons.display.onSurfaceValueChange.addCallback((context, value) => {
      if (value === 1) {
        globalBooleanVariables.isValueDisplayModeActive.toggle(context);
      }
    });

    globalBooleanVariables.isFlipModeActive.addOnChangeCallback((context, value) => {
      buttons.flip.mLedValue.setProcessValue(context, +value);
    });

    // PIN: converted for-of Array.entries() loop to ES5
    // for (const [
    //     buttonIndex,
    //     isActive,
    // ] of globalBooleanVariables.isEncoderAssignmentActive.entries()) {
    for (
      let i = 0, arr = getArrayEntries(globalBooleanVariables.isEncoderAssignmentActive);
      i < arr.length;
      i++
    ) {
      const activeObj = arr[i];
      const buttonIndex = activeObj[0];
      const isActive = activeObj[1];

      isActive.addOnChangeCallback((context, value) => {
        buttons.encoderAssign[buttonIndex].mLedValue.setProcessValue(context, +value);
      });
    }

    // PIN: converted a large for-of Array.entries() loop to ES5

    // const encoderAssignMapping = [0, 3, 1, 4, 2, 5];
    // encoderAssignMapping.map(function (value, index) {
    //     buttons.encoderAssign[value].bindToNote(ports, 40 + index);
    // });

    // assignment: 6 = (40 - 45) - page up/down, pan, inserts, eq, fx send
    // on x-touch the 6 buttons are labelled: track, pan/surround, eq, send, plug-in, inst
    // Mackie mapping from 40 - 45 is: track, send, pan/surround, plug-in, eq, instrument
    buttons.encoderAssign[0].bindToNote(ports, 40); // page up - monitor, pre-gain, phase
    buttons.encoderAssign[3].bindToNote(ports, 41); // page down - sends
    buttons.encoderAssign[1].bindToNote(ports, 42); // pan
    buttons.encoderAssign[4].bindToNote(ports, 43); // inserts - inserts
    buttons.encoderAssign[2].bindToNote(ports, 44); // eq
    buttons.encoderAssign[5].bindToNote(ports, 45); // fx send - strip and quick controls

    // buttons: 8 = (46 - 53)
    buttons.navigation.bank.left.bindToNote(ports, 46);
    buttons.navigation.bank.right.bindToNote(ports, 47);
    buttons.navigation.channel.left.bindToNote(ports, 48);
    buttons.navigation.channel.right.bindToNote(ports, 49);
    buttons.flip.bindToNote(ports, 50);
    buttons.edit.bindToNote(ports, 51);
    buttons.display.bindToNote(ports, 52);
    buttons.timeMode.bindToNote(ports, 53);

    // function: 8 = (54 - 61) - F1 - F8
    for (let i = 0; i < buttons.function.length; i++) {
      buttons.function[i].bindToNote(ports, 54 + i);
    }

    // number: 8 = (62 - 69) - Layer2F1 - Layer2F8
    for (let i = 0; i < buttons.number.length; i++) {
      buttons.number[i].bindToNote(ports, 62 + i);
    }

    // modify: 4 = (70 - 73) [0, 1, 7, 8] - Undo, Redo, Save, Revert
    for (let i = 0; i < buttons.modify.length; i++) {
      buttons.modify[i].bindToNote(ports, 70 + i);
    }

    // automation: 6 = (74 - 79) [2, 3, 4, 9, 10, 11] - Read, Write, Sends, Project, Mixer, Motors
    for (let i = 0; i < buttons.automation.length; i++) {
      buttons.automation[i].bindToNote(ports, 74 + i);
    }

    // utility: 4 = (80 - 83) [5, 6, 12, 13] - VST, Master, Solo Defeat, Shift
    for (let i = 0; i < buttons.utility.length; i++) {
      buttons.utility[i].bindToNote(ports, 80 + i);
    }

    // transport: 7 + 5 = (84 - 90 and 91 - 95) - Left, Right, Cycle, Punch, Previous, Add, Next, Rewind, FastFwd, Stop, Play, Record
    for (let i = 0; i < buttons.transport.length; i++) {
      buttons.transport[i].bindToNote(ports, 84 + i);
    }

    // buttons: 6 = (96 - 101) - CursorUp, CursorDown, CursorLeft, CursorRight, Zoom, Scrub,
    buttons.navigation.directions.up.bindToNote(ports, 96);
    buttons.navigation.directions.down.bindToNote(ports, 97);
    buttons.navigation.directions.left.bindToNote(ports, 98);
    buttons.navigation.directions.right.bindToNote(ports, 99);
    buttons.navigation.directions.center.bindToNote(ports, 100);
    buttons.scrub.bindToNote(ports, 101);

    // Segment Display - handled by the SegmentDisplayManager, except for:
    const smpte = elements.displayLeds.smpte,
      beats = elements.displayLeds.beats,
      solo = elements.displayLeds.solo;
    const lamps = [smpte, beats, solo];
    lamps.forEach((lamp, index) => {
      lamp.bindToNote(ports.output, 113 + index);
    });

    // Jog wheel
    elements.jogWheel.bindToControlChange(ports.input, 60);

    // Foot control
    // PIN: converted for-of Array.entries() loop to ES5
    // for (const [index, footSwitch] of elements.footSwitches.entries()) {
    for (let i = 0, arr = getArrayEntries(elements.footSwitches); i < arr.length; i++) {
      const footSwitchObj = arr[i];
      const index = footSwitchObj[0];
      const footSwitch = footSwitchObj[1];

      footSwitch.mSurfaceValue.mMidiBinding.setInputPort(ports.input).bindToNote(0, 102 + index);
    }

    elements.expressionPedal.mSurfaceValue.mMidiBinding
      .setInputPort(ports.input)
      .bindToControlChange(0, 46)
      .setTypeAbsolute();
  }
};
