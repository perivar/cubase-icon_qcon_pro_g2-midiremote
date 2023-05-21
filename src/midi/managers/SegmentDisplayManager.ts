import { MR_ActiveDevice } from "midiremote_api_v1";

import { Devices, MainDevice } from "../../Devices";
import { ContextStateVariable, createElements } from "../../util";

export class SegmentDisplayManager {
  private segmentValues = createElements(12, () => new ContextStateVariable(0x00));

  private updateSegment(
    context: MR_ActiveDevice,
    segmentId: number,
    digit: number | null,
    hasDot = false
  ) {
    let value = 0x30 + (digit ?? -0x10);
    if (hasDot) {
      value += 0x40;
    }

    if (value !== this.segmentValues[segmentId].get(context)) {
      this.segmentValues[segmentId].set(context, value);
      this.devices.forEach((device) => {
        if (device instanceof MainDevice) {
          device.ports.output.sendMidi(context, [0xb0, 0x40 + segmentId, value]);
        }
      });
    }
  }

  private updateSegmentsByString(context: MR_ActiveDevice, lastSegmentId: number, string: string) {
    let currentSegmentId = lastSegmentId;
    let hasCurrentSegmentDot = false;

    // PIN: converted for-of loop to ES5
    // Array.from(string).reverse()
    for (let i = string.length - 1; i >= 0; i--) {
      const char = string.charAt(i);

      if (char === "." || char === ":") {
        hasCurrentSegmentDot = true;
      } else {
        this.updateSegment(
          context,
          currentSegmentId,
          char === " " ? null : parseInt(char, 10),
          hasCurrentSegmentDot
        );
        currentSegmentId++;
        hasCurrentSegmentDot = false;
      }
    }
  }

  constructor(private devices: Devices) {}

  private lastTimeFormat = new ContextStateVariable("");

  /**
   * Update the 7-segment displays to show the provided `time` string – a string consisting of
   * numbers, spaces, dots, and colons.
   */
  updateTime(context: MR_ActiveDevice, time: string, timeFormat: string) {
    if (timeFormat !== this.lastTimeFormat.get(context)) {
      this.lastTimeFormat.set(context, timeFormat);

      this.devices.forEach((device) => {
        if (device instanceof MainDevice) {
          const smpteLed = device.controlSectionElements.displayLeds.smpte,
            beatsLed = device.controlSectionElements.displayLeds.beats;

          smpteLed.mSurfaceValue.setProcessValue(context, +/^(?:[\d]+\:){3}[\d]+$/.test(time));
          beatsLed.mSurfaceValue.setProcessValue(
            context,
            +/^(?:[ \d]+\.){2} \d\.[\d ]+$/.test(time)
          );
        }
      });
    }

    // If `time` is separated three times by `.` or `:`, fill it with spaces to match the way digits
    // are grouped on the device
    const match = /^([\d ]+[\.\:])([\d ]+)([\.\:])([\d ]+)([\.\:])([\d ]+)$/.exec(time);
    if (match) {
      time =
        match[1] +
        match[2].padStart(2, " ") +
        match[3] +
        match[4].padStart(2, " ") +
        match[5] +
        match[6].padStart(3, " ");
    }

    this.updateSegmentsByString(
      context,
      0,
      time.padStart(10 + time.replace(/[^\.\:]/g, "").length, " ")
    );
  }

  setAssignment(context: MR_ActiveDevice, assignment: string) {
    this.updateSegmentsByString(context, 10, assignment);
  }

  clearAssignment(context: MR_ActiveDevice) {
    for (let i = this.segmentValues.length - 2; i < this.segmentValues.length; i++) {
      this.updateSegment(context, i, null);
    }
  }

  clearTime(context: MR_ActiveDevice) {
    for (let i = 0; i < this.segmentValues.length - 2; i++) {
      this.updateSegment(context, i, null);
    }
  }
}
