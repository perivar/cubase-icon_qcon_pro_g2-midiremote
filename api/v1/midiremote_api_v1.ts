/* eslint-disable @typescript-eslint/no-unused-vars */
import { createLogger, format, transports } from 'winston';

const formatMeta = (meta: any) => {
    // You can format the splat yourself
    // const splat = meta[Symbol.for('splat')]
    const splat = meta['splat'];
    if (splat && splat.length) {
        return splat.length === 1 ? JSON.stringify(splat[0]) : JSON.stringify(splat);
    }
    return '';
};

const customFormat = format.printf(
    ({ timestamp: timestamp, level: level, message: message, label: label = '', ...meta }) =>
        `[${timestamp}] ${level}\t ${label} ${message} ${formatMeta(meta)}`
);

export const logger = createLogger({
    transports: [
        new transports.File({
            level: 'warn',
            filename: 'warn.log',
            options: { flags: 'w' }, // restart file on each run
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                // format.splat(), // do not use splat format with custom formatter
                // format.json()
                customFormat
            ),
        }),
        new transports.File({
            level: 'error',
            filename: 'error.log',
            options: { flags: 'w' }, // restart file on each run
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.splat(),
                format.json()
            ),
        }),
        new transports.File({
            level: 'debug',
            filename: 'debug.log',
            options: { flags: 'w' }, // restart file on each run
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                // format.splat(), // do not use splat format with custom formatter
                // format.json()
                customFormat
            ),
        }),
        new transports.File({
            level: 'info',
            filename: 'info.log',
            options: { flags: 'w' }, // restart file on each run
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                // format.splat(), // do not use splat format with custom formatter
                // format.json()
                customFormat
            ),
        }),
        new transports.Console({
            level: 'info',
            // cannot use format.colorize() when running in es5 mode
            // format: format.combine(format.colorize(), format.splat(), format.simple()),
            format: format.combine(format.splat(), format.simple()),
        }),
    ],
});

/**
 * @typedef Integer
 * @type {number}
 */
type Integer = number;

/**
 * @typedef Text
 * @type {string}
 */
type Text = string;

/**
 * @typedef Scalar
 * @type {number}
 */
type Scalar = number;

/**
 * @typedef Bool
 * @type {boolean}
 */
type Bool = boolean;

/**
 * @typedef Byte
 * @type {number}
 */
type Byte = number;

/**
 * @typedef Uuid
 * @type {string}
 */
type Uuid = string;

/**
 * @typedef Size
 * @type {number}
 */
type Size = number;

/**
 * @typedef Index
 * @type {number}
 */
type Index = number;

/**
 * @typedef Name
 * @type {string}
 */
type Name = string;

/**
 * @typedef MidiMessage
 * @type {number[]}
 */
type MidiMessage = number[];

/**
 * @typedef HostObjectClassID
 * @type {string}
 */
type HostObjectClassID = string;

/**
 * @typedef HostObjectPath
 * @type {string}
 */
type HostObjectPath = string;

/**
 * @typedef HostValueTag
 * @type {number}
 */
type HostValueTag = number;

/**
 * @class MR_MidiRemoteAPI
 * Entry point to the **MIDI Remote API**.
 * @example
 * var midiremote_api = require('midiremote_api_v1')
 */
export class MR_MidiRemoteAPI {
    mDefaults: MR_HostDefaults;

    constructor() {
        logger.info('MidiRemoteAPI initializing ...');
        logger.debug('MR_MidiRemoteAPI: constructor()');

        /**
         * @property
         */
        this.mDefaults = new MR_HostDefaults();
    }

    /**
     * Represents specific hardware device.
     * @example
     * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
     * @param {string} vendorName
     * @param {string} deviceName
     * @param {string} createdBy
     * @returns {MR_DeviceDriver}
     */
    makeDeviceDriver(vendorName: string, deviceName: string, createdBy: string): MR_DeviceDriver {
        logger.info(
            `MR_MidiRemoteAPI: makeDeviceDriver(${JSON.stringify({
                vendorName: vendorName,
                deviceName: deviceName,
                createdBy: createdBy,
            })})`
        );

        return new MR_DeviceDriver(vendorName, deviceName, createdBy);
    }
}

/**
 * @class MR_HostDefaults
 */
export class MR_HostDefaults {
    value = 'MR_HostDefaults';

    constructor() {
        logger.debug('MR_HostDefaults: constructor()');
    }

    /**
     * @returns {string}
     */
    getAppName(): string {
        return 'Mocked Midi Remote API';
    }

    /**
     * @returns {number}
     */
    getNumberOfInsertEffectSlots(): number {
        return 8;
    }

    /**
     * @returns {number}
     */
    getNumberOfStripEffectSlots(): number {
        return 8;
    }

    /**
     * @returns {number}
     */
    getNumberOfSendSlots(): number {
        return 8;
    }

    /**
     * @returns {number}
     */
    getNumberOfQuickControls(): number {
        return 8;
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomTalkbackChannels(): number {
        return 2;
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomExternalInputChannels(): number {
        return 4;
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomCueChannels(): number {
        return 4;
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomPhonesChannels(): number {
        return 2;
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomMonitorChannels(): number {
        return 4;
    }
}

/**
 * @class MR_ActiveDevice
 * Represents a detected and activated device of a specific [DeviceDriver](#devicedriver).
 */
export class MR_ActiveDevice {
    constructor() {
        logger.debug('MR_ActiveDevice: constructor()');
    }

    /**
     * @param {string} key
     * @param {string} val
     */
    setState(key: string, val: string): void {
        logger.info(`MR_ActiveDevice: setState(${key} = ${val})`);
    }

    /**
     * @param {string} key
     * @returns {string}
     */
    getState(key: string): string {
        logger.info(`MR_ActiveDevice: getState(${key}`);
        return 'Not Implemented';
    }
}

/**
 * @class MR_ActiveMapping
 */
export class MR_ActiveMapping {
    constructor() {
        logger.debug('MR_ActiveMapping: constructor()');
    }
}

/**
 * @class MR_HostAction
 */
export class MR_HostAction {
    value = 'MR_HostAction';

    constructor() {
        logger.debug('MR_HostAction: constructor()');
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_ActiveMapping: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_HostPluginParameterBankZoneAction
 * @augments MR_HostAction
 */
export class MR_HostPluginParameterBankZoneAction extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_HostPluginParameterBankZoneAction: constructor()');

        // define value
        this.value = 'MR_HostPluginParameterBankZoneAction';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_HostPluginParameterBankZoneAction: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_HostInsertEffectViewerAction
 * @augments MR_HostAction
 */
export class MR_HostInsertEffectViewerAction extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_HostInsertEffectViewerAction: constructor()');

        // define value
        this.value = 'MR_HostInsertEffectViewerAction';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_HostInsertEffectViewerAction: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_MixerBankZoneAction
 * @augments MR_HostAction
 */
export class MR_MixerBankZoneAction extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_MixerBankZoneAction: constructor()');

        // define value
        this.value = 'MR_MixerBankZoneAction';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_MixerBankZoneAction: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_TrackSelectionAction
 * @augments MR_HostAction
 */
export class MR_TrackSelectionAction extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_TrackSelectionAction: constructor()');

        // define value
        this.value = 'MR_TrackSelectionAction';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_TrackSelectionAction: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_SubPageActionActivate
 * @augments MR_HostAction
 */
export class MR_SubPageActionActivate extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_SubPageActionActivate: constructor()');

        // define value
        this.value = 'MR_SubPageActionActivate';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_SubPageActionActivate: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_SubPageAreaAction
 * @augments MR_HostAction
 */
export class MR_SubPageAreaAction extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_SubPageAreaAction: constructor()');

        // define value
        this.value = 'MR_SubPageAreaAction';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_SubPageAreaAction: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_MappingPageActionActivate
 * @augments MR_HostAction
 */
export class MR_MappingPageActionActivate extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_MappingPageActionActivate: constructor()');

        // define value
        this.value = 'MR_MappingPageActionActivate';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_MappingPageActionActivate: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_DeviceDriverAction
 * @augments MR_HostAction
 */
export class MR_DeviceDriverAction extends MR_HostAction {
    constructor() {
        super();

        logger.debug('MR_DeviceDriverAction: constructor()');

        // define value
        this.value = 'MR_DeviceDriverAction';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override trigger(activeMapping: MR_ActiveMapping): void {
        logger.debug(`MR_DeviceDriverAction: trigger(${activeMapping})`);
    }
}

/**
 * @class MR_DeviceDriver
 * Represents specific hardware device.
 * @example
 * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
 */
export class MR_DeviceDriver {
    vendorName: string | undefined;
    deviceName: string | undefined;
    createdBy: string | undefined;

    mPorts: MR_Ports;
    mSurface: MR_DeviceSurface;
    mMapping: MR_FactoryMapping;
    mAction: MR_DeviceDriverActions;
    mOnActivate: (activeDevice: MR_ActiveDevice) => void;
    mOnDeactivate: (activeDevice: MR_ActiveDevice) => void;

    constructor(vendorName?: string, deviceName?: string, createdBy?: string) {
        logger.debug(
            `MR_DeviceDriver: constructor(${JSON.stringify({
                vendorName: vendorName,
                deviceName: deviceName,
                createdBy: createdBy,
            })})`
        );

        // set parameters
        this.vendorName = vendorName;
        this.deviceName = deviceName;
        this.createdBy = createdBy;

        /**
         * @property
         */
        this.mPorts = new MR_Ports();

        /**
         * @property
         */
        this.mSurface = new MR_DeviceSurface();

        /**
         * @property
         */
        this.mMapping = new MR_FactoryMapping();

        /**
         * @property
         */
        this.mAction = new MR_DeviceDriverActions();

        /**
         * @property
         */
        this.mOnActivate = (activeDevice: MR_ActiveDevice) => {};

        /**
         * @property
         */
        this.mOnDeactivate = (activeDevice: MR_ActiveDevice) => {};
    }

    /**
     * Define device auto detection.
     * @example
     * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
     *     .expectInputNameEquals('SimpleDevice IN')
     *     .expectOutputNameEquals('SimpleDevice OUT')
     *
     * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
     *     .expectInputNameEquals('SimpleDevice (MIDI IN)')
     *     .expectOutputNameEquals('SimpleDevice (MIDI OUT)')
     *
     * @returns {MR_DeviceDetectionUnit}
     */
    makeDetectionUnit(): MR_DeviceDetectionUnit {
        logger.info(`MR_DeviceDriver: makeDetectionUnit()`);

        return new MR_DeviceDetectionUnit();
    }

    /**
     * @param {string} fileName
     * @param {number} delayInMilliseconds
     * @returns {MR_InitialSysexFile}
     */
    setInitialSysexFile(fileName: string, delayInMilliseconds: number): MR_InitialSysexFile {
        logger.info(
            `MR_DeviceDriver: setInitialSysexFile(${JSON.stringify({
                fileName: fileName,
                delayInMilliseconds: delayInMilliseconds,
            })})`
        );

        return new MR_InitialSysexFile();
    }

    /**
     * @param {string} fileName
     * @returns {MR_UserGuide}
     */
    setUserGuide(fileName: string): MR_UserGuide {
        logger.info(
            `MR_DeviceDriver: setUserGuide(${JSON.stringify({
                fileName: fileName,
            })})`
        );

        return new MR_UserGuide();
    }
}

/**
 * @callback OnActivate
 * @param {MR_ActiveDevice} activeDevice
 */

/**
 * @callback OnDeactivate
 * @param {MR_ActiveDevice} activeDevice
 */

/**
 * @callback OnActivateMappingPage
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 */

/**
 * @callback OnDeactivateMappingPage
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 */

/**
 * @class MR_Ports
 * Device driver sub section for creating midi port objects.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
export class MR_Ports {
    constructor() {
        logger.debug('MR_Ports: constructor()');
    }

    /**
     * Device driver MIDI input port.
     * @example
     * var midiInput = deviceDriver.mPorts.makeMidiInput()
     * @param {string} name
     * @returns {MR_DeviceMidiInput}
     */
    makeMidiInput(name = ''): MR_DeviceMidiInput {
        logger.info(
            `MR_Ports: makeMidiInput(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_DeviceMidiInput(name);
    }

    /**
     * Device driver MIDI output port.
     * @example
     * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
     * @param {string} name
     * @returns {MR_DeviceMidiOutput}
     */
    makeMidiOutput(name = ''): MR_DeviceMidiOutput {
        logger.info(
            `MR_Ports: makeMidiOutput(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_DeviceMidiOutput(name);
    }
}

/**
 * @class MR_DeviceMidiInput
 * Device driver MIDI input port.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 */
export class MR_DeviceMidiInput {
    name: string | undefined;
    value = 'MR_DeviceMidiInput';

    /**
     * @callback OnSysex
     * @param {MR_ActiveDevice} activeDevice
     * @param {MidiMessage} message
     */
    mOnSysex: (activeDevice: MR_ActiveDevice, message: MidiMessage) => void;

    constructor(name?: string) {
        logger.debug(
            `MR_DeviceMidiInput: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set parameters
        this.name = name;

        /**
         * @property
         */
        this.mOnSysex = (activeDevice: MR_ActiveDevice, message: MidiMessage) => {};
    }
}

/**
 * @class MR_DeviceMidiOutput
 * Device driver MIDI output port.
 * @example
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
export class MR_DeviceMidiOutput {
    name: string | undefined;
    value = 'MR_DeviceMidiOutput';

    constructor(name?: string) {
        logger.debug(
            `MR_DeviceMidiOutput: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set parameters
        this.name = name;
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {MidiMessage} message
     */
    sendMidi(activeDevice: MR_ActiveDevice, message: MidiMessage): void {
        logger.info(
            `MR_DeviceMidiOutput: sendMidi(${JSON.stringify({
                activeDevice: activeDevice,
                message: message,
            })})`
        );
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {string} fileName
     * @param {number} delayMilliseconds
     */
    sendSysexFile(
        activeDevice: MR_ActiveDevice,
        fileName: string,
        delayMilliseconds: number
    ): void {
        logger.info(
            `MR_DeviceMidiOutput: sendSysexFile(${JSON.stringify({
                activeDevice: activeDevice,
                fileName: fileName,
                delayMilliseconds: delayMilliseconds,
            })})`
        );
    }
}

/**
 * @class MR_DeviceSurface
 * Emulates hardware surface elements.
 * @example
 * var knob1 = deviceDriver.mSurface.makeKnob(0, 0, 1, 1.5)
 * var knob2 = deviceDriver.mSurface.makeKnob(1, 0, 1, 1.5)
 * var knob3 = deviceDriver.mSurface.makeKnob(2, 0, 1, 1.5)
 * var knob4 = deviceDriver.mSurface.makeKnob(3, 0, 1, 1.5)
 *
 * // bind midi ports to surface elements
 */
export class MR_DeviceSurface {
    constructor() {
        logger.debug('MR_DeviceSurface: constructor()');
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_PushEncoder}
     */
    makePushEncoder(x: number, y: number, w: number, h: number): MR_PushEncoder {
        logger.info(
            `MR_DeviceSurface: makePushEncoder(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_PushEncoder();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Knob}
     */
    makeKnob(x: number, y: number, w: number, h: number): MR_Knob {
        logger.info(`MR_DeviceSurface: makeKnob(${JSON.stringify({ x: x, y: y, w: w, h: h })})`);
        return new MR_Knob();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Fader}
     */
    makeFader(x: number, y: number, w: number, h: number): MR_Fader {
        logger.info(`MR_DeviceSurface: makeFader(${JSON.stringify({ x: x, y: y, w: w, h: h })})`);
        return new MR_Fader();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Button}
     */
    makeButton(x: number, y: number, w: number, h: number): MR_Button {
        logger.info(`MR_DeviceSurface: makeButton(${JSON.stringify({ x: x, y: y, w: w, h: h })})`);
        return new MR_Button();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_ModWheel}
     */
    makeModWheel(x: number, y: number, w: number, h: number): MR_ModWheel {
        logger.info(
            `MR_DeviceSurface: makeModWheel(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_ModWheel();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_PitchBend}
     */
    makePitchBend(x: number, y: number, w: number, h: number): MR_PitchBend {
        logger.info(
            `MR_DeviceSurface: makePitchBend(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_PitchBend();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_TriggerPad}
     */
    makeTriggerPad(x: number, y: number, w: number, h: number): MR_TriggerPad {
        logger.info(
            `MR_DeviceSurface: makeTriggerPad(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_TriggerPad();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_PadXY}
     */
    makePadXY(x: number, y: number, w: number, h: number): MR_PadXY {
        logger.info(`MR_DeviceSurface: makePadXY(${JSON.stringify({ x: x, y: y, w: w, h: h })})`);
        return new MR_PadXY();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_JoyStickXY}
     */
    makeJoyStickXY(x: number, y: number, w: number, h: number): MR_JoyStickXY {
        logger.info(
            `MR_DeviceSurface: makeJoyStickXY(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_JoyStickXY();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Lamp}
     */
    makeLamp(x: number, y: number, w: number, h: number): MR_Lamp {
        logger.info(`MR_DeviceSurface: makeLamp(${JSON.stringify({ x: x, y: y, w: w, h: h })})`);
        return new MR_Lamp();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_BlindPanel}
     */
    makeBlindPanel(x: number, y: number, w: number, h: number): MR_BlindPanel {
        logger.info(
            `MR_DeviceSurface: makeBlindPanel(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_BlindPanel();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {number} firstKeyIndex
     * @param {number} lastKeyIndex
     * @returns {MR_PianoKeys}
     */
    makePianoKeys(
        x: number,
        y: number,
        w: number,
        h: number,
        firstKeyIndex: number,
        lastKeyIndex: number
    ): MR_PianoKeys {
        logger.debug(
            `MR_DeviceSurface: makePianoKeys(${JSON.stringify({
                x: x,
                y: y,
                w: w,
                h: h,
                firstKeyIndex: firstKeyIndex,
                lastKeyIndex: lastKeyIndex,
            })})`
        );
        return new MR_PianoKeys();
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_SurfaceLabelField}
     */
    makeLabelField(x: number, y: number, w: number, h: number): MR_SurfaceLabelField {
        logger.info(
            `MR_DeviceSurface: makeLabelField(${JSON.stringify({ x: x, y: y, w: w, h: h })})`
        );
        return new MR_SurfaceLabelField();
    }

    /**
     * @param {string} name
     * @returns {MR_ControlLayerZone}
     */
    makeControlLayerZone(name: string): MR_ControlLayerZone {
        logger.info(`MR_DeviceSurface: makeControlLayerZone(${JSON.stringify({ name: name })})`);
        return new MR_ControlLayerZone(name);
    }

    /**
     * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
     * @param {string} name
     * @returns {MR_SurfaceCustomValueVariable}
     */
    makeCustomValueVariable(name: string): MR_SurfaceCustomValueVariable {
        logger.info(`MR_DeviceSurface: makeCustomValueVariable(${JSON.stringify({ name: name })})`);
        return new MR_SurfaceCustomValueVariable(name);
    }
}

/**
 * @class MR_SurfaceElement
 */
export class MR_SurfaceElement {
    value = 'MR_SurfaceElement';

    constructor() {
        logger.debug('MR_SurfaceElement: constructor()');
    }
}

/**
 * @class MR_PushEncoder
 * @augments MR_SurfaceElement
 */
export class MR_PushEncoder extends MR_SurfaceElement {
    mEncoderValue: MR_SurfaceElementValue;
    mPushValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_PushEncoder: constructor()');

        /**
         * @property
         */
        this.mEncoderValue = new MR_SurfaceElementValue();

        /**
         * @property
         */
        this.mPushValue = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_PushEncoder}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_PushEncoder {
        logger.info(
            `MR_PushEncoder: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_Knob
 * @augments MR_SurfaceElement
 */
export class MR_Knob extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_Knob: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_Knob}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_Knob {
        logger.info(
            `MR_Knob: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_Fader
 * @augments MR_SurfaceElement
 */
export class MR_Fader extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_Fader: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @returns {MR_Fader}
     */
    setTypeVertical(): MR_Fader {
        logger.info(`MR_Fader: setTypeVertical()`);

        return this;
    }

    /**
     * @returns {MR_Fader}
     */
    setTypeHorizontal(): MR_Fader {
        logger.info(`MR_Fader: setTypeVertical()`);

        return this;
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_Fader}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_Fader {
        logger.info(
            `MR_Fader: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_Button
 * @augments MR_SurfaceElement
 */
export class MR_Button extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_Button: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @returns {MR_Button}
     */
    setTypePush(): MR_Button {
        logger.info(`MR_Button: setTypePush()`);

        return this;
    }

    /**
     * @returns {MR_Button}
     */
    setTypeToggle(): MR_Button {
        logger.info(`MR_Button: setTypeToggle()`);

        return this;
    }

    /**
     * @returns {MR_Button}
     */
    setShapeRectangle(): MR_Button {
        logger.info(`MR_Button: setShapeRectangle()`);

        return this;
    }

    /**
     * @returns {MR_Button}
     */
    setShapeCircle(): MR_Button {
        logger.info(`MR_Button: setShapeCircle()`);

        return this;
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_Button}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_Button {
        logger.info(
            `MR_Button: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_ModWheel
 * @augments MR_SurfaceElement
 */
export class MR_ModWheel extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_ModWheel: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_ModWheel}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_ModWheel {
        logger.info(
            `MR_ModWheel: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_PitchBend
 * @augments MR_SurfaceElement
 */
export class MR_PitchBend extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_PitchBend: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_PitchBend}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_PitchBend {
        logger.info(
            `MR_PitchBend: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_TriggerPad
 * @augments MR_SurfaceElement
 */
export class MR_TriggerPad extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_TriggerPad: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_TriggerPad}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_TriggerPad {
        logger.info(
            `MR_TriggerPad: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_PadXY
 * @augments MR_SurfaceElement
 */
export class MR_PadXY extends MR_SurfaceElement {
    mX: MR_SurfaceElementValue;
    mY: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_PadXY: constructor()');

        /**
         * @property
         */
        this.mX = new MR_SurfaceElementValue();

        /**
         * @property
         */
        this.mY = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_PadXY}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_PadXY {
        logger.info(
            `MR_PadXY: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_JoyStickXY
 * @augments MR_SurfaceElement
 */
export class MR_JoyStickXY extends MR_SurfaceElement {
    mX: MR_SurfaceElementValue;
    mY: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_JoyStickXY: constructor()');

        /**
         * @property
         */
        this.mX = new MR_SurfaceElementValue();

        /**
         * @property
         */
        this.mY = new MR_SurfaceElementValue();
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_JoyStickXY}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_JoyStickXY {
        logger.info(
            `MR_JoyStickXY: setControlLayer(${JSON.stringify({
                controlLayer: controlLayer,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_Lamp
 * @augments MR_SurfaceElement
 */
export class MR_Lamp extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue;

    constructor() {
        super();

        logger.debug('MR_Lamp: constructor()');

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue();
    }

    /**
     * @returns {MR_Lamp}
     */
    setShapeRectangle(): MR_Lamp {
        logger.info(`MR_Lamp: setShapeRectangle()`);

        return this;
    }

    /**
     * @returns {MR_Lamp}
     */
    setShapeCircle(): MR_Lamp {
        logger.info(`MR_Lamp: setShapeCircle()`);

        return this;
    }
}

/**
 * @class MR_BlindPanel
 * @augments MR_SurfaceElement
 */
export class MR_BlindPanel extends MR_SurfaceElement {
    constructor() {
        super();

        logger.debug('MR_BlindPanel: constructor()');
    }

    /**
     * @returns {MR_BlindPanel}
     */
    setShapeRectangle(): MR_BlindPanel {
        logger.info(`MR_BlindPanel: setShapeRectangle()`);

        return this;
    }

    /**
     * @returns {MR_BlindPanel}
     */
    setShapeCircle(): MR_BlindPanel {
        logger.info(`MR_BlindPanel: setShapeCircle()`);

        return this;
    }
}

/**
 * @class MR_PianoKeys
 * @augments MR_SurfaceElement
 */
export class MR_PianoKeys extends MR_SurfaceElement {
    constructor() {
        super();

        logger.debug('MR_PianoKeys: constructor()');
    }
}

/**
 * @class MR_SurfaceLabelField
 */
export class MR_SurfaceLabelField {
    constructor() {
        logger.debug('MR_SurfaceLabelField: constructor()');
    }

    /**
     * @param {MR_SurfaceElement} surfaceElement
     * @returns {MR_SurfaceLabelField}
     */
    relateTo(surfaceElement: MR_SurfaceElement): MR_SurfaceLabelField {
        logger.info(
            `MR_SurfaceLabelField: relateTo(${JSON.stringify({
                surfaceElement: surfaceElement,
            })})`
        );

        return new MR_SurfaceLabelField();
    }
}

/**
 * @class MR_ControlLayerZone
 */
export class MR_ControlLayerZone {
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_ControlLayerZone: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;
    }

    /**
     * @param {string} name
     * @returns {MR_ControlLayer}
     */
    makeControlLayer(name: string): MR_ControlLayer {
        logger.info(
            `MR_ControlLayerZone: makeControlLayer(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_ControlLayer(name);
    }
}

/**
 * @class MR_ControlLayer
 */
export class MR_ControlLayer {
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_ControlLayer: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;
    }
}

/**
 * @class MR_SurfaceValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 */
export class MR_SurfaceValue {
    value = 'MR_SurfaceValue';
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_SurfaceValue: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;

        // define value
        this.value = 'MR_SurfaceValue';
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {number} value
     */
    setProcessValue(activeDevice: MR_ActiveDevice, value: number): void {
        logger.debug(
            `MR_SurfaceValue: setProcessValue(${JSON.stringify({
                activeDevice: activeDevice,
                value: value,
            })})`
        );
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @returns {number}
     */
    getProcessValue(activeDevice: MR_ActiveDevice): number {
        logger.debug(
            `MR_SurfaceValue: getProcessValue(${JSON.stringify({ activeDevice: activeDevice })})`
        );
        return -1;
    }
}

/**
 * @class MR_SurfaceElementValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
export class MR_SurfaceElementValue extends MR_SurfaceValue {
    mMidiBinding: MR_SurfaceValueMidiBinding;
    mOnProcessValueChange: (activeDevice: MR_ActiveDevice, value: number, diff: number) => void;
    mOnDisplayValueChange: (activeDevice: MR_ActiveDevice, value: string, units: string) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SurfaceElementValue: constructor()');

        // define value
        this.value = 'MR_SurfaceElementValue';

        /**
         * @property
         */
        this.mMidiBinding = new MR_SurfaceValueMidiBinding();

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            value: number,
            diff: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            objectTitle: string,
            valueTitle: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {number} value
     */
    override setProcessValue(activeDevice: MR_ActiveDevice, value: number): void {
        logger.debug(
            `MR_SurfaceElementValue: setProcessValue(${JSON.stringify({
                activeDevice: activeDevice,
                value: value,
            })})`
        );
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @returns {number}
     */
    override getProcessValue(activeDevice: MR_ActiveDevice): number {
        logger.debug(
            `MR_SurfaceElementValue: getProcessValue(${JSON.stringify({
                activeDevice: activeDevice,
            })})`
        );
        return -1;
    }
}

/**
 * @class MR_SurfaceCustomValueVariable
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
export class MR_SurfaceCustomValueVariable extends MR_SurfaceValue {
    mMidiBinding: MR_SurfaceValueMidiBinding;
    mOnProcessValueChange: (activeDevice: MR_ActiveDevice, value: number, diff: number) => void;
    mOnDisplayValueChange: (activeDevice: MR_ActiveDevice, value: string, units: string) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor(name?: string) {
        super(name);

        logger.debug(
            `MR_SurfaceCustomValueVariable: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // define value
        this.value = 'MR_SurfaceCustomValueVariable';

        /**
         * @property
         */
        this.mMidiBinding = new MR_SurfaceValueMidiBinding();

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            value: number,
            diff: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            objectTitle: string,
            valueTitle: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {number} value
     */
    override setProcessValue(activeDevice: MR_ActiveDevice, value: number): void {
        logger.debug(
            `MR_SurfaceCustomValueVariable: setProcessValue(${JSON.stringify({
                activeDevice: activeDevice,
                value: value,
            })})`
        );
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @returns {number}
     */
    override getProcessValue(activeDevice: MR_ActiveDevice): number {
        logger.debug(
            `MR_SurfaceCustomValueVariable: getProcessValue(${JSON.stringify({
                activeDevice: activeDevice,
            })})`
        );
        return -1;
    }
}

/**
 * @class MR_SurfaceValueMidiBinding
 */
export class MR_SurfaceValueMidiBinding {
    value = 'MR_SurfaceValueMidiBinding';

    constructor() {
        logger.debug('MR_SurfaceValueMidiBinding: constructor()');
    }

    /**
     * @param {MR_DeviceMidiInput} inputPort
     * @returns {MR_SurfaceValueMidiBinding}
     */
    setInputPort(inputPort: MR_DeviceMidiInput): MR_SurfaceValueMidiBinding {
        logger.info(
            `MR_SurfaceValueMidiBinding: setInputPort(${JSON.stringify({ inputPort: inputPort })})`
        );

        return this;
    }

    /**
     * @param {MR_DeviceMidiOutput} outputPort
     * @returns {MR_SurfaceValueMidiBinding}
     */
    setOutputPort(outputPort: MR_DeviceMidiOutput): MR_SurfaceValueMidiBinding {
        logger.info(
            `MR_SurfaceValueMidiBinding: setOutputPort(${JSON.stringify({
                outputPort: outputPort,
            })})`
        );

        return this;
    }

    /**
     * @param {boolean} isConsuming
     * @returns {MR_SurfaceValueMidiBinding}
     */
    setIsConsuming(isConsuming: boolean): MR_SurfaceValueMidiBinding {
        logger.info(
            `MR_SurfaceValueMidiBinding: setIsConsuming(${JSON.stringify({
                isConsuming: isConsuming,
            })})`
        );

        return this;
    }

    /**
     * @param {number} channelNumber
     * @param {number} pitch
     * @returns {MR_MidiBindingToNote}
     */
    bindToNote(channelNumber: number, pitch: number): MR_MidiBindingToNote {
        logger.info(
            `MR_SurfaceValueMidiBinding: bindToNote(${JSON.stringify({
                channelNumber: channelNumber,
                pitch: pitch,
            })})`
        );

        return new MR_MidiBindingToNote();
    }

    /**
     * @param {number} channelNumber
     * @param {number} controlChangeNumber
     * @returns {MR_MidiBindingToControlChange}
     */
    bindToControlChange(
        channelNumber: number,
        controlChangeNumber: number
    ): MR_MidiBindingToControlChange {
        logger.info(
            `MR_SurfaceValueMidiBinding: bindToControlChange(${JSON.stringify({
                channelNumber: channelNumber,
                controlChangeNumber: controlChangeNumber,
            })})`
        );

        return new MR_MidiBindingToControlChange();
    }

    /**
     * @param {number} channelNumber
     * @param {number} controlChangeNumber
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    bindToControlChange14Bit(
        channelNumber: number,
        controlChangeNumber: number
    ): MR_MidiBindingToControlChange14Bit {
        logger.info(
            `MR_SurfaceValueMidiBinding: bindToControlChange14Bit(${JSON.stringify({
                channelNumber: channelNumber,
                controlChangeNumber: controlChangeNumber,
            })})`
        );

        return new MR_MidiBindingToControlChange14Bit();
    }

    /**
     * @param {number} channelNumber
     * @param {number} controlChangeNumber
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    bindToControlChange14BitNRPN(
        channelNumber: number,
        controlChangeNumber: number
    ): MR_MidiBindingToControlChange14BitNRPN {
        logger.info(
            `MR_SurfaceValueMidiBinding: bindToControlChange14BitNRPN(${JSON.stringify({
                channelNumber: channelNumber,
                controlChangeNumber: controlChangeNumber,
            })})`
        );

        return new MR_MidiBindingToControlChange14BitNRPN();
    }

    /**
     * @param {number} channelNumber
     * @returns {MR_MidiBindingToPitchBend}
     */
    bindToPitchBend(channelNumber: number): MR_MidiBindingToPitchBend {
        logger.info(
            `MR_SurfaceValueMidiBinding: bindToPitchBend(${JSON.stringify({
                channelNumber: channelNumber,
            })})`
        );

        return new MR_MidiBindingToPitchBend();
    }

    /**
     * @param {number} channelNumber
     * @returns {MR_MidiBindingToChannelPressure}
     */
    bindToChannelPressure(channelNumber: number): MR_MidiBindingToChannelPressure {
        logger.info(
            `MR_SurfaceValueMidiBinding: bindToChannelPressure(${JSON.stringify({
                channelNumber: channelNumber,
            })})`
        );

        return new MR_MidiBindingToChannelPressure();
    }
}

/**
 * @class MR_MidiBindingValueRange7Bit
 */
export class MR_MidiBindingValueRange7Bit {
    value = 'MR_MidiBindingValueRange7Bit';

    constructor() {
        logger.debug('MR_MidiBindingValueRange7Bit: constructor()');

        // define value
        this.value = 'MR_MidiBindingValueRange7Bit';
    }
}

/**
 * @class MR_MidiBindingValueRange14Bit
 */
export class MR_MidiBindingValueRange14Bit {
    value = 'MR_MidiBindingValueRange14Bit';

    constructor() {
        logger.debug('MR_MidiBindingValueRange14Bit: constructor()');

        // define value
        this.value = 'MR_MidiBindingValueRange14Bit';
    }
}

/**
 * @class MR_MidiChannelBinding
 */
export class MR_MidiChannelBinding {
    value = 'MR_MidiChannelBinding';

    constructor() {
        logger.debug('MR_MidiChannelBinding: constructor()');
    }
}

/**
 * @class MR_MidiBindingToNote
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToNote extends MR_MidiChannelBinding {
    constructor() {
        super();

        logger.debug('MR_MidiBindingToNote: constructor()');

        // define value
        this.value = 'MR_MidiBindingToNote';
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToNote}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToNote {
        logger.debug(
            `MR_MidiBindingToNote: setValueRange(${JSON.stringify({
                min: min,
                max: max,
            })})`
        );

        return new MR_MidiBindingToNote();
    }
}

/**
 * @class MR_MidiBindingToControlChange
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToControlChange extends MR_MidiChannelBinding {
    constructor() {
        super();

        logger.debug('MR_MidiBindingToControlChange: constructor()');

        // define value
        this.value = 'MR_MidiBindingToControlChange';
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToControlChange}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToControlChange {
        logger.debug(
            `MR_MidiBindingToControlChange: setValueRange(${JSON.stringify({
                min: min,
                max: max,
            })})`
        );

        return new MR_MidiBindingToControlChange();
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeAbsolute(): MR_MidiBindingToControlChange {
        logger.info(`MR_MidiBindingToControlChange: setTypeAbsolute()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeRelativeSignedBit(): MR_MidiBindingToControlChange {
        logger.info(`MR_MidiBindingToControlChange: setTypeRelativeSignedBit()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeRelativeBinaryOffset(): MR_MidiBindingToControlChange {
        logger.info(`MR_MidiBindingToControlChange: setTypeRelativeBinaryOffset()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeRelativeTwosComplement(): MR_MidiBindingToControlChange {
        logger.info(`MR_MidiBindingToControlChange: setTypeRelativeTwosComplement()`);

        return this;
    }
}

/**
 * @class MR_MidiBindingToControlChange14Bit
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToControlChange14Bit extends MR_MidiChannelBinding {
    constructor() {
        super();

        logger.debug('MR_MidiBindingToControlChange14Bit: constructor()');

        // define value
        this.value = 'MR_MidiBindingToControlChange14Bit';
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToControlChange14Bit {
        logger.debug(
            `MR_MidiBindingToControlChange14Bit: setValueRange(${JSON.stringify({
                min: min,
                max: max,
            })})`
        );

        return new MR_MidiBindingToControlChange14Bit();
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeAbsolute(): MR_MidiBindingToControlChange14Bit {
        logger.info(`MR_MidiBindingToControlChange14Bit: setTypeAbsolute()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeRelativeSignedBit(): MR_MidiBindingToControlChange14Bit {
        logger.info(`MR_MidiBindingToControlChange14Bit: setTypeRelativeSignedBit()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeRelativeBinaryOffset(): MR_MidiBindingToControlChange14Bit {
        logger.info(`MR_MidiBindingToControlChange14Bit: setTypeRelativeBinaryOffset()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeRelativeTwosComplement(): MR_MidiBindingToControlChange14Bit {
        logger.info(`MR_MidiBindingToControlChange14Bit: setTypeRelativeTwosComplement()`);

        return this;
    }
}

/**
 * @class MR_MidiBindingToControlChange14BitNRPN
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToControlChange14BitNRPN extends MR_MidiChannelBinding {
    constructor() {
        super();

        logger.debug('MR_MidiBindingToControlChange14BitNRPN: constructor()');

        // define value
        this.value = 'MR_MidiBindingToControlChange14BitNRPN';
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToControlChange14BitNRPN {
        logger.debug(
            `MR_MidiBindingToControlChange14BitNRPN: setValueRange(${JSON.stringify({
                min: min,
                max: max,
            })})`
        );

        return new MR_MidiBindingToControlChange14BitNRPN();
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeAbsolute(): MR_MidiBindingToControlChange14BitNRPN {
        logger.info(`MR_MidiBindingToControlChange14BitNRPN: setTypeAbsolute()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeRelativeSignedBit(): MR_MidiBindingToControlChange14BitNRPN {
        logger.info(`MR_MidiBindingToControlChange14BitNRPN: setTypeRelativeSignedBit()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeRelativeBinaryOffset(): MR_MidiBindingToControlChange14BitNRPN {
        logger.info(`MR_MidiBindingToControlChange14BitNRPN: setTypeRelativeBinaryOffset()`);

        return this;
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeRelativeTwosComplement(): MR_MidiBindingToControlChange14BitNRPN {
        logger.info(`MR_MidiBindingToControlChange14BitNRPN: setTypeRelativeTwosComplement()`);

        return this;
    }
}

/**
 * @class MR_MidiBindingToPitchBend
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToPitchBend extends MR_MidiChannelBinding {
    mValueRange: MR_MidiBindingValueRange14Bit;

    constructor() {
        super();

        logger.debug('MR_MidiBindingToPitchBend: constructor()');

        // define value
        this.value = 'MR_MidiBindingToPitchBend';

        /**
         * @property
         */
        this.mValueRange = new MR_MidiBindingValueRange14Bit();
    }
}

/**
 * @class MR_MidiBindingToChannelPressure
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToChannelPressure extends MR_MidiChannelBinding {
    mValueRange: MR_MidiBindingValueRange7Bit;

    constructor() {
        super();

        logger.debug('MR_MidiBindingToChannelPressure: constructor()');

        // define value
        this.value = 'MR_MidiBindingToChannelPressure';

        /**
         * @property
         */
        this.mValueRange = new MR_MidiBindingValueRange7Bit();
    }
}

/**
 * @callback SurfaceValueOnProcessValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {number} value
 * @param {number} diff
 */

/**
 * @callback SurfaceValueOnDisplayValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {string} value
 * @param {string} units
 */

/**
 * @callback SurfaceValueOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {string} objectTitle
 * @param {string} valueTitle
 */

/**
 * @callback SurfaceValueOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive
 */

/**
 * @class MR_Mapping
 */
export class MR_Mapping {
    value = 'MR_Mapping';

    constructor() {
        logger.debug('MR_Mapping: constructor()');
    }
}

/**
 * @class MR_FactoryMapping
 * @augments MR_Mapping
 */
export class MR_FactoryMapping extends MR_Mapping {
    constructor() {
        super();

        logger.debug('MR_FactoryMapping: constructor()');

        // define value
        this.value = 'MR_FactoryMapping';
    }

    /**
     * @param {string} name
     * @returns {MR_FactoryMappingPage}
     */
    makePage(name: string): MR_FactoryMappingPage {
        logger.info(
            `MR_FactoryMapping: makePage(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_FactoryMappingPage(name);
    }
}

/**
 * @class MR_Page
 */
export class MR_Page {
    value = 'MR_Page';
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_Page: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostValue} hostValue
     * @returns {MR_ValueBinding}
     */
    makeValueBinding(surfaceValue: MR_SurfaceValue, hostValue: MR_HostValue): MR_ValueBinding {
        logger.info(
            `MR_Page: makeValueBinding(${JSON.stringify({
                surfaceValue: surfaceValue,
                hostValue: hostValue,
            })})`
        );

        return new MR_ValueBinding();
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {string} commandCategory
     * @param {string} commandName
     * @returns {MR_CommandBinding}
     */
    makeCommandBinding(
        surfaceValue: MR_SurfaceValue,
        commandCategory: string,
        commandName: string
    ): MR_CommandBinding {
        logger.info(
            `MR_Page: makeCommandBinding(${JSON.stringify({
                surfaceValue: surfaceValue,
                commandCategory: commandCategory,
                commandName: commandName,
            })})`
        );

        return new MR_CommandBinding();
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostAction} hostAction
     * @returns {MR_ActionBinding}
     */
    makeActionBinding(surfaceValue: MR_SurfaceValue, hostAction: MR_HostAction): MR_ActionBinding {
        logger.info(
            `MR_Page: makeActionBinding(${JSON.stringify({
                surfaceValue: surfaceValue,
                hostAction: hostAction,
            })})`
        );

        return new MR_ActionBinding();
    }

    /**
     * @param {string} name
     * @returns {MR_SubPageArea}
     */
    makeSubPageArea(name: string): MR_SubPageArea {
        logger.info(
            `MR_Page: makeSubPageArea(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_SubPageArea(name);
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {string} text
     * @returns {MR_Page}
     */
    setLabelFieldText(surfaceLabelField: MR_SurfaceLabelField, text: string): MR_Page {
        logger.info(
            `MR_Page: setLabelFieldText(${JSON.stringify({
                surfaceLabelField: surfaceLabelField,
                text: text,
            })})`
        );

        return this;
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {MR_HostObject} hostObject
     * @returns {MR_Page}
     */
    setLabelFieldHostObject(
        surfaceLabelField: MR_SurfaceLabelField,
        hostObject: MR_HostObject
    ): MR_Page {
        logger.info(
            `MR_Page: setLabelFieldHostObject(${JSON.stringify({
                surfaceLabelField: surfaceLabelField,
                hostObject: hostObject,
            })})`
        );

        return this;
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {MR_SubPageArea} subPageArea
     * @returns {MR_Page}
     */
    setLabelFieldSubPageArea(
        surfaceLabelField: MR_SurfaceLabelField,
        subPageArea: MR_SubPageArea
    ): MR_Page {
        logger.info(
            `MR_Page: setLabelFieldSubPageArea(${JSON.stringify({
                surfaceLabelField: surfaceLabelField,
                subPageArea: subPageArea,
            })})`
        );

        return this;
    }
}

/**
 * @class MR_FactoryMappingPage
 * @augments MR_Page
 */
export class MR_FactoryMappingPage extends MR_Page {
    mHostAccess: MR_HostAccess;
    mOnActivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void;
    mOnDeactivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void;
    mCustom: MR_HostObjectUndefined;
    mAction: MR_MappingPageActions;

    constructor(name?: string) {
        super(name);

        logger.debug('MR_FactoryMappingPage: constructor()');

        // define value
        this.value = 'MR_FactoryMappingPage';

        /**
         * @property
         */
        this.mHostAccess = new MR_HostAccess();

        /**
         * @property
         */
        this.mOnActivate = (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => {};

        /**
         * @property
         */
        this.mOnDeactivate = (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => {};

        /**
         * @property
         */
        this.mCustom = new MR_HostObjectUndefined();

        /**
         * @property
         */
        this.mAction = new MR_MappingPageActions();
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostValue} hostValue
     * @returns {MR_ValueBinding}
     */
    override makeValueBinding(
        surfaceValue: MR_SurfaceValue,
        hostValue: MR_HostValue
    ): MR_ValueBinding {
        logger.info(
            `MR_FactoryMappingPage: makeValueBinding(${JSON.stringify({
                surfaceValue: surfaceValue,
                hostValue: hostValue,
            })})`
        );

        return new MR_ValueBinding();
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {string} commandCategory
     * @param {string} commandName
     * @returns {MR_CommandBinding}
     */
    override makeCommandBinding(
        surfaceValue: MR_SurfaceValue,
        commandCategory: string,
        commandName: string
    ): MR_CommandBinding {
        logger.info(
            `MR_FactoryMappingPage: makeCommandBinding(${JSON.stringify({
                surfaceValue: surfaceValue,
                commandCategory: commandCategory,
                commandName: commandName,
            })})`
        );

        return new MR_CommandBinding();
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostAction} hostAction
     * @returns {MR_ActionBinding}
     */
    override makeActionBinding(
        surfaceValue: MR_SurfaceValue,
        hostAction: MR_HostAction
    ): MR_ActionBinding {
        logger.info(
            `MR_FactoryMappingPage: makeActionBinding(${JSON.stringify({
                surfaceValue: surfaceValue,
                hostAction: hostAction,
            })})`
        );

        return new MR_ActionBinding();
    }

    /**
     * @param {string} name
     * @returns {MR_SubPageArea}
     */
    override makeSubPageArea(name: string): MR_SubPageArea {
        logger.info(
            `MR_FactoryMappingPage: makeSubPageArea(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_SubPageArea(name);
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {string} text
     * @returns {MR_FactoryMappingPage}
     */
    override setLabelFieldText(
        surfaceLabelField: MR_SurfaceLabelField,
        text: string
    ): MR_FactoryMappingPage {
        logger.info(
            `MR_FactoryMappingPage: setLabelFieldText(${JSON.stringify({
                surfaceLabelField: surfaceLabelField,
                text: text,
            })})`
        );

        return new MR_FactoryMappingPage();
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {MR_HostObject} hostObject
     * @returns {MR_FactoryMappingPage}
     */
    override setLabelFieldHostObject(
        surfaceLabelField: MR_SurfaceLabelField,
        hostObject: MR_HostObject
    ): MR_FactoryMappingPage {
        logger.info(
            `MR_FactoryMappingPage: setLabelFieldHostObject(${JSON.stringify({
                surfaceLabelField: surfaceLabelField,
                hostObject: hostObject,
            })})`
        );

        return new MR_FactoryMappingPage();
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {MR_SubPageArea} subPageArea
     * @returns {MR_FactoryMappingPage}
     */
    override setLabelFieldSubPageArea(
        surfaceLabelField: MR_SurfaceLabelField,
        subPageArea: MR_SubPageArea
    ): MR_FactoryMappingPage {
        logger.info(
            `MR_FactoryMappingPage: setLabelFieldSubPageArea(${JSON.stringify({
                surfaceLabelField: surfaceLabelField,
                subPageArea: subPageArea,
            })})`
        );

        return new MR_FactoryMappingPage();
    }
}

/**
 * @class MR_HostAccess
 * Provides objects and methods to bind the defined Surface to host functions.
 * @example
 * var hostSelectedTrackChannel = page.mHostAccess.mTrackSelection.mMixerChannel
 */
export class MR_HostAccess {
    value = 'MR_HostAccess';

    mTransport: MR_HostTransport;
    mMixConsole: MR_MixConsole;
    mControlRoom: MR_HostControlRoom;
    mTrackSelection: MR_TrackSelection;
    mMouseCursor: MR_HostMouseCursor;
    mFocusedQuickControls: MR_FocusedQuickControls;

    constructor() {
        logger.debug('MR_HostAccess: constructor()');

        /**
         * @property
         */
        this.mTransport = new MR_HostTransport();

        /**
         * @property
         */
        this.mMixConsole = new MR_MixConsole();

        /**
         * @property
         */
        this.mControlRoom = new MR_HostControlRoom();

        /**
         * @property
         */
        this.mTrackSelection = new MR_TrackSelection();

        /**
         * @property
         */
        this.mMouseCursor = new MR_HostMouseCursor();

        /**
         * @property
         */
        this.mFocusedQuickControls = new MR_FocusedQuickControls();
    }
}

/**
 * @class MR_HostObject
 */
export class MR_HostObject {
    value = 'MR_HostObject';
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_HostObject: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;
    }
}

/**
 * @class MR_HostObjectUndefined
 * @augments MR_HostObject
 */
export class MR_HostObjectUndefined extends MR_HostObject {
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostObjectUndefined: constructor()');

        // define value
        this.value = 'MR_HostObjectUndefined';

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {string} name
     * @returns {MR_HostValueUndefined}
     */
    makeHostValueVariable(name: string): MR_HostValueUndefined {
        logger.info(
            `MR_HostObjectUndefined: makeHostValueVariable(${JSON.stringify({
                name: name,
            })})`
        );

        return new MR_HostValueUndefined(name);
    }
}

/**
 * @class MR_HostTransport
 * Access transport functions.
 * @augments MR_HostObject
 */
export class MR_HostTransport extends MR_HostObject {
    mValue: MR_TransportValues;
    mTimeDisplay: MR_TransportTimeDisplay;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostTransport: constructor()');

        // define value
        this.value = 'MR_HostTransport';

        /**
         * @property
         */
        this.mValue = new MR_TransportValues();

        /**
         * @property
         */
        this.mTimeDisplay = new MR_TransportTimeDisplay();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_QuickControls
 * @augments MR_HostObject
 */
export class MR_QuickControls extends MR_HostObject {
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_QuickControls: constructor()');

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_QuickControlValue}
     */
    getByIndex(index: number): MR_QuickControlValue {
        logger.info(
            `MR_QuickControlValue: getByIndex(${JSON.stringify({
                index: index,
            })})`
        );

        return new MR_QuickControlValue();
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        logger.info(`MR_QuickControlValue: getSize()`);

        return 8;
    }
}

/**
 * @class MR_FocusedQuickControls
 * @augments MR_HostObject
 */
export class MR_FocusedQuickControls extends MR_HostObject {
    mFocusLockedValue: MR_FocusedQuickControlsLockedStateValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_FocusedQuickControls: constructor()');

        /**
         * @property
         */
        this.mFocusLockedValue = new MR_FocusedQuickControlsLockedStateValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_QuickControlValue}
     */
    getByIndex(index: number): MR_QuickControlValue {
        logger.info(
            `MR_FocusedQuickControls: getByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_QuickControlValue();
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 8;
    }
}

/**
 * @class MR_HostPluginParameterBankZone
 * @augments MR_HostObject
 */
export class MR_HostPluginParameterBankZone extends MR_HostObject {
    mAction: MR_HostPluginParameterBankZoneActions;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostPluginParameterBankZone: constructor()');

        // define value
        this.value = 'MR_HostPluginParameterBankZone';

        /**
         * @property
         */
        this.mAction = new MR_HostPluginParameterBankZoneActions();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @returns {MR_HostPluginParameterBankValue}
     */
    makeParameterValue(): MR_HostPluginParameterBankValue {
        logger.info(`MR_HostPluginParameterBankZone: makeParameterValue()`);
        return new MR_HostPluginParameterBankValue();
    }
}

/**
 * @class MR_HostStripEffectSlotFolder
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotFolder extends MR_HostObject {
    mGate: MR_HostStripEffectSlotGate;
    mCompressor: MR_HostStripEffectSlotCompressor;
    mLimiter: MR_HostStripEffectSlotLimiter;
    mSaturator: MR_HostStripEffectSlotSaturator;
    mTools: MR_HostStripEffectSlotTools;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostStripEffectSlotFolder: constructor()');

        // define value
        this.value = 'MR_HostStripEffectSlotFolder';

        /**
         * @property
         */
        this.mGate = new MR_HostStripEffectSlotGate();

        /**
         * @property
         */
        this.mCompressor = new MR_HostStripEffectSlotCompressor();

        /**
         * @property
         */
        this.mLimiter = new MR_HostStripEffectSlotLimiter();

        /**
         * @property
         */
        this.mSaturator = new MR_HostStripEffectSlotSaturator();

        /**
         * @property
         */
        this.mTools = new MR_HostStripEffectSlotTools();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_SendSlotFolder
 * @augments MR_HostObject
 */
export class MR_SendSlotFolder extends MR_HostObject {
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SendSlotFolder: constructor()');

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {number} index
     * @returns {MR_SendSlot}
     */
    getByIndex(index: number): MR_SendSlot {
        logger.info(
            `MR_SendSlotFolder: getByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_SendSlot();
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 4;
    }
}

/**
 * @class MR_ControlRoomCueSendSlotFolder
 * @augments MR_HostObject
 */
export class MR_ControlRoomCueSendSlotFolder extends MR_HostObject {
    mBypass: MR_ControlRoomCueSendFolderBypassValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendSlotFolder: constructor()');

        /**
         * @property
         */
        this.mBypass = new MR_ControlRoomCueSendFolderBypassValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {number} index
     * @returns {MR_ControlRoomCueSendSlot}
     */
    getByIndex(index: number): MR_ControlRoomCueSendSlot {
        logger.info(
            `MR_ControlRoomCueSendSlotFolder: getByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_ControlRoomCueSendSlot();
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 4;
    }
}

/**
 * @class MR_MixerBankChannel
 * @augments MR_HostObject
 */
export class MR_MixerBankChannel extends MR_HostObject {
    mValue: MR_MixerChannelValues;
    mPreFilter: MR_PreFilter;
    mChannelEQ: MR_ChannelEQ;
    mInsertAndStripEffects: MR_HostInsertAndStripEffects;
    mSends: MR_SendSlotFolder;
    mCueSends: MR_ControlRoomCueSendSlotFolder;
    mQuickControls: MR_QuickControls;
    mInstrumentPluginSlot: MR_HostInstrumentPluginSlot;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MixerBankChannel: constructor()');

        /**
         * @property
         */
        this.mValue = new MR_MixerChannelValues();

        /**
         * @property
         */
        this.mPreFilter = new MR_PreFilter();

        /**
         * @property
         */
        this.mChannelEQ = new MR_ChannelEQ();

        /**
         * @property
         */
        this.mInsertAndStripEffects = new MR_HostInsertAndStripEffects();

        /**
         * @property
         */
        this.mSends = new MR_SendSlotFolder();

        /**
         * @property
         */
        this.mCueSends = new MR_ControlRoomCueSendSlotFolder();

        /**
         * @property
         */
        this.mQuickControls = new MR_QuickControls();

        /**
         * @property
         */
        this.mInstrumentPluginSlot = new MR_HostInstrumentPluginSlot();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_SelectedTrackChannel
 * @augments MR_HostObject
 */
export class MR_SelectedTrackChannel extends MR_HostObject {
    mValue: MR_MixerChannelValues;
    mPreFilter: MR_PreFilter;
    mChannelEQ: MR_ChannelEQ;
    mInsertAndStripEffects: MR_HostInsertAndStripEffects;
    mSends: MR_SendSlotFolder;
    mCueSends: MR_ControlRoomCueSendSlotFolder;
    mQuickControls: MR_QuickControls;
    mInstrumentPluginSlot: MR_HostInstrumentPluginSlot;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SelectedTrackChannel: constructor()');

        /**
         * @property
         */
        this.mValue = new MR_MixerChannelValues();

        /**
         * @property
         */
        this.mPreFilter = new MR_PreFilter();

        /**
         * @property
         */
        this.mChannelEQ = new MR_ChannelEQ();

        /**
         * @property
         */
        this.mInsertAndStripEffects = new MR_HostInsertAndStripEffects();

        /**
         * @property
         */
        this.mSends = new MR_SendSlotFolder();

        /**
         * @property
         */
        this.mCueSends = new MR_ControlRoomCueSendSlotFolder();

        /**
         * @property
         */
        this.mQuickControls = new MR_QuickControls();

        /**
         * @property
         */
        this.mInstrumentPluginSlot = new MR_HostInstrumentPluginSlot();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostMouseCursor
 * @augments MR_HostObject
 */
export class MR_HostMouseCursor extends MR_HostObject {
    mValueUnderMouse: MR_HostValueAtMouseCursor;
    mValueLocked: MR_HostValueAtMouseCursorLockedState;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostMouseCursor: constructor()');

        // define value
        this.value = 'MR_HostMouseCursor';

        /**
         * @property
         */
        this.mValueUnderMouse = new MR_HostValueAtMouseCursor();

        /**
         * @property
         */
        this.mValueLocked = new MR_HostValueAtMouseCursorLockedState();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostControlRoomChannelMain
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelMain extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue;
    mMuteValue: MR_HostControlRoomValue;
    mBypassInserts: MR_HostControlRoomValue;
    mSelectSourceMonitorMixValue: MR_HostControlRoomValue;
    mSelectSourceExternalInputValue: MR_HostControlRoomValue;
    mListenEnabledValue: MR_HostControlRoomValue;
    mListenLevelValue: MR_HostControlRoomValue;
    mDimActiveValue: MR_HostControlRoomValue;
    mMetronomeClickActiveValue: MR_HostControlRoomValue;
    mMetronomeClickLevelValue: MR_HostControlRoomValue;
    mMetronomeClickPanValue: MR_HostControlRoomValue;
    mReferenceLevelEnabledValue: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomChannelMain: constructor()');

        // define value
        this.value = 'MR_HostControlRoomChannelMain';

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mListenEnabledValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mListenLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mDimActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickPanValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mReferenceLevelEnabledValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
     */
    getSelectSourceCueValueByIndex(index: number): MR_HostControlRoomSelectSourceCueValueByIndex {
        logger.info(
            `MR_HostControlRoomChannelMain: getSelectSourceCueValueByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomSelectSourceCueValueByIndex();
    }
}

/**
 * @class MR_HostControlRoomChannelPhonesByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelPhonesByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue;
    mMuteValue: MR_HostControlRoomValue;
    mBypassInserts: MR_HostControlRoomValue;
    mSelectSourceMonitorMixValue: MR_HostControlRoomValue;
    mSelectSourceExternalInputValue: MR_HostControlRoomValue;
    mListenEnabledValue: MR_HostControlRoomValue;
    mListenLevelValue: MR_HostControlRoomValue;
    mDimActiveValue: MR_HostControlRoomValue;
    mMetronomeClickActiveValue: MR_HostControlRoomValue;
    mMetronomeClickLevelValue: MR_HostControlRoomValue;
    mMetronomeClickPanValue: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomChannelPhonesByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomChannelPhonesByIndex';

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mListenEnabledValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mListenLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mDimActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickPanValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
     */
    getSelectSourceCueValueByIndex(index: number): MR_HostControlRoomSelectSourceCueValueByIndex {
        logger.info(
            `MR_HostControlRoomChannelPhonesByIndex: getSelectSourceCueValueByIndex(${JSON.stringify(
                {
                    index: index,
                }
            )})`
        );
        return new MR_HostControlRoomSelectSourceCueValueByIndex();
    }
}

/**
 * @class MR_HostControlRoomChannelCueByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelCueByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue;
    mMuteValue: MR_HostControlRoomValue;
    mBypassInserts: MR_HostControlRoomValue;
    mSelectSourceMonitorMixValue: MR_HostControlRoomValue;
    mSelectSourceExternalInputValue: MR_HostControlRoomValue;
    mSelectSourceAuxValue: MR_HostControlRoomValue;
    mTalkbackEnabledValue: MR_HostControlRoomValue;
    mTalkbackLevelValue: MR_HostControlRoomValue;
    mMetronomeClickActiveValue: MR_HostControlRoomValue;
    mMetronomeClickLevelValue: MR_HostControlRoomValue;
    mMetronomeClickPanValue: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomChannelCueByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomChannelCueByIndex';

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectSourceAuxValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mTalkbackEnabledValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mTalkbackLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMetronomeClickPanValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostControlRoomChannelExternalInputByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelExternalInputByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue;
    mMuteValue: MR_HostControlRoomValue;
    mBypassInserts: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomChannelExternalInputByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomChannelExternalInputByIndex';

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostControlRoomChannelTalkbackByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelTalkbackByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue;
    mMuteValue: MR_HostControlRoomValue;
    mBypassInserts: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomChannelTalkbackByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomChannelTalkbackByIndex';

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostControlRoomChannelMonitorByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelMonitorByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue;
    mMuteValue: MR_HostControlRoomValue;
    mBypassInserts: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomChannelMonitorByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomChannelMonitorByIndex';

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostControlRoom
 * @augments MR_HostObject
 */
export class MR_HostControlRoom extends MR_HostObject {
    mMainChannel: MR_HostControlRoomChannelMain;
    mAlertDimActiveValue: MR_HostControlRoomValue;
    mTalkbackActiveValue: MR_HostControlRoomValue;
    mTalkbackDimLevelValue: MR_HostControlRoomValue;
    mListenDimLevelValue: MR_HostControlRoomValue;
    mReferenceLevelValue: MR_HostControlRoomValue;
    mSelectNextDownmixPresetValue: MR_HostControlRoomValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoom: constructor()');

        // define value
        this.value = 'MR_HostControlRoom';

        /**
         * @property
         */
        this.mMainChannel = new MR_HostControlRoomChannelMain();

        /**
         * @property
         */
        this.mAlertDimActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mTalkbackActiveValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mTalkbackDimLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mListenDimLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mReferenceLevelValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mSelectNextDownmixPresetValue = new MR_HostControlRoomValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelCueByIndex}
     */
    getCueChannelByIndex(index: number): MR_HostControlRoomChannelCueByIndex {
        logger.info(
            `MR_HostControlRoom: getCueChannelByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomChannelCueByIndex();
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelPhonesByIndex}
     */
    getPhonesChannelByIndex(index: number): MR_HostControlRoomChannelPhonesByIndex {
        logger.info(
            `MR_HostControlRoom: getPhonesChannelByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomChannelPhonesByIndex();
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelExternalInputByIndex}
     */
    getExternalInputChannelByIndex(index: number): MR_HostControlRoomChannelExternalInputByIndex {
        logger.info(
            `MR_HostControlRoom: getExternalInputChannelByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomChannelExternalInputByIndex();
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelTalkbackByIndex}
     */
    getTalkbackChannelByIndex(index: number): MR_HostControlRoomChannelTalkbackByIndex {
        logger.info(
            `MR_HostControlRoom: getTalkbackChannelByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomChannelTalkbackByIndex();
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelMonitorByIndex}
     */
    getMonitorChannelByIndex(index: number): MR_HostControlRoomChannelMonitorByIndex {
        logger.info(
            `MR_HostControlRoom: getMonitorChannelByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomChannelMonitorByIndex();
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectSourceExternalInputValueByIndex}
     */
    getSelectSourceExternalInputValueByIndex(
        index: number
    ): MR_HostControlRoomSelectSourceExternalInputValueByIndex {
        logger.info(
            `MR_HostControlRoom: getSelectSourceExternalInputValueByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomSelectSourceExternalInputValueByIndex();
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectTargetMonitorValueByIndex}
     */
    getSelectTargetMonitorValueByIndex(
        index: number
    ): MR_HostControlRoomSelectTargetMonitorValueByIndex {
        logger.info(
            `MR_HostControlRoom: getSelectTargetMonitorValueByIndex(${JSON.stringify({
                index: index,
            })})`
        );
        return new MR_HostControlRoomSelectTargetMonitorValueByIndex();
    }

    /**
     * @returns {number}
     */
    getMaxTalkbackChannels(): number {
        return 2;
    }

    /**
     * @returns {number}
     */
    getMaxExternalInputChannels(): number {
        return 8;
    }

    /**
     * @returns {number}
     */
    getMaxCueChannels(): number {
        return 4;
    }

    /**
     * @returns {number}
     */
    getMaxPhonesChannels(): number {
        return 2;
    }

    /**
     * @returns {number}
     */
    getMaxMonitorChannels(): number {
        return 4;
    }
}

/**
 * @class MR_MixConsole
 * @augments MR_HostObject
 */
export class MR_MixConsole extends MR_HostObject {
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MixConsole: constructor()');

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {string} name
     * @returns {MR_MixerBankZone}
     */
    makeMixerBankZone(name = ''): MR_MixerBankZone {
        return new MR_MixerBankZone();
    }
}

/**
 * @class MR_TransportValues
 * @augments MR_HostObject
 */
export class MR_TransportValues extends MR_HostObject {
    mStart: MR_StartValue;
    mStop: MR_StopValue;
    mRecord: MR_RecordValue;
    mRewind: MR_RewindValue;
    mForward: MR_ForwardValue;
    mCycleActive: MR_CycleActiveValue;
    mMetronomeActive: MR_MetronomeActiveValue;
    mMetronomeClickLevel: MR_MetronomeClickLevel;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_TransportValues: constructor()');

        /**
         * @property
         */
        this.mStart = new MR_StartValue();

        /**
         * @property
         */
        this.mStop = new MR_StopValue();

        /**
         * @property
         */
        this.mRecord = new MR_RecordValue();

        /**
         * @property
         */
        this.mRewind = new MR_RewindValue();

        /**
         * @property
         */
        this.mForward = new MR_ForwardValue();

        /**
         * @property
         */
        this.mCycleActive = new MR_CycleActiveValue();

        /**
         * @property
         */
        this.mMetronomeActive = new MR_MetronomeActiveValue();

        /**
         * @property
         */
        this.mMetronomeClickLevel = new MR_MetronomeClickLevel();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_PreFilter
 * @augments MR_HostObject
 */
export class MR_PreFilter extends MR_HostObject {
    mBypass: MR_PreFilterBypassValue;
    mGain: MR_PreFilterGainValue;
    mPhaseSwitch: MR_PreFilterPhaseSwitchValue;
    mHighCutOn: MR_PreFilterHighCutOnValue;
    mHighCutFreq: MR_PreFilterHighCutFrequencyValue;
    mHighCutSlope: MR_PreFilterHighCutSlopeValue;
    mLowCutOn: MR_PreFilterLowCutOnValue;
    mLowCutFreq: MR_PreFilterLowCutFrequencyValue;
    mLowCutSlope: MR_PreFilterLowCutSlopeValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilter: constructor()');

        /**
         * @property
         */
        this.mBypass = new MR_PreFilterBypassValue();

        /**
         * @property
         */
        this.mGain = new MR_PreFilterGainValue();

        /**
         * @property
         */
        this.mPhaseSwitch = new MR_PreFilterPhaseSwitchValue();

        /**
         * @property
         */
        this.mHighCutOn = new MR_PreFilterHighCutOnValue();

        /**
         * @property
         */
        this.mHighCutFreq = new MR_PreFilterHighCutFrequencyValue();

        /**
         * @property
         */
        this.mHighCutSlope = new MR_PreFilterHighCutSlopeValue();

        /**
         * @property
         */
        this.mLowCutOn = new MR_PreFilterLowCutOnValue();

        /**
         * @property
         */
        this.mLowCutFreq = new MR_PreFilterLowCutFrequencyValue();

        /**
         * @property
         */
        this.mLowCutSlope = new MR_PreFilterLowCutSlopeValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_ChannelEQBand
 * @augments MR_HostObject
 */
export class MR_ChannelEQBand extends MR_HostObject {
    mGain: MR_EQBandGainValue;
    mFreq: MR_EQBandFrequencyValue;
    mQ: MR_EQBandQualityValue;
    mOn: MR_EQBandOnValue;
    mFilterType: MR_EQBandFilterTypeValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ChannelEQBand: constructor()');

        /**
         * @property
         */
        this.mGain = new MR_EQBandGainValue();

        /**
         * @property
         */
        this.mFreq = new MR_EQBandFrequencyValue();

        /**
         * @property
         */
        this.mQ = new MR_EQBandQualityValue();

        /**
         * @property
         */
        this.mOn = new MR_EQBandOnValue();

        /**
         * @property
         */
        this.mFilterType = new MR_EQBandFilterTypeValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_ChannelEQ
 * @augments MR_HostObject
 */
export class MR_ChannelEQ extends MR_HostObject {
    mBand1: MR_ChannelEQBand;
    mBand2: MR_ChannelEQBand;
    mBand3: MR_ChannelEQBand;
    mBand4: MR_ChannelEQBand;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ChannelEQ: constructor()');

        /**
         * @property
         */
        this.mBand1 = new MR_ChannelEQBand();

        /**
         * @property
         */
        this.mBand2 = new MR_ChannelEQBand();

        /**
         * @property
         */
        this.mBand3 = new MR_ChannelEQBand();

        /**
         * @property
         */
        this.mBand4 = new MR_ChannelEQBand();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostInstrumentPluginSlot
 * @augments MR_HostObject
 */
export class MR_HostInstrumentPluginSlot extends MR_HostObject {
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostInstrumentPluginSlot: constructor()');

        // define value
        this.value = 'MR_HostInstrumentPluginSlot';

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostStripEffectSlotGate
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotGate extends MR_HostObject {
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostStripEffectSlotGate: constructor()');

        // define value
        this.value = 'MR_HostStripEffectSlotGate';

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostStripEffectSlotCompressor
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotCompressor extends MR_HostObject {
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostStripEffectSlotCompressor: constructor()');

        // define value
        this.value = 'MR_HostStripEffectSlotCompressor';

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostStripEffectSlotLimiter
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotLimiter extends MR_HostObject {
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostStripEffectSlotLimiter: constructor()');

        // define value
        this.value = 'MR_HostStripEffectSlotLimiter';

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostStripEffectSlotSaturator
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotSaturator extends MR_HostObject {
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostStripEffectSlotSaturator: constructor()');

        // define value
        this.value = 'MR_HostStripEffectSlotSaturator';

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostStripEffectSlotTools
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotTools extends MR_HostObject {
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostStripEffectSlotTools: constructor()');

        // define value
        this.value = 'MR_HostStripEffectSlotTools';

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_HostInsertEffectViewer
 * @augments MR_HostObject
 */
export class MR_HostInsertEffectViewer extends MR_HostObject {
    mAction: MR_HostInsertEffectViewerActions;
    mOn: MR_PluginOnValue;
    mBypass: MR_PluginBypassValue;
    mEdit: MR_PluginEditValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mParameterBankZone: MR_HostPluginParameterBankZone;
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor(name?: string) {
        super(name);

        logger.debug(
            `MR_HostInsertEffectViewer: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // define value
        this.value = 'MR_HostInsertEffectViewer';

        /**
         * @property
         */
        this.mAction = new MR_HostInsertEffectViewerActions();

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue();

        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue();

        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone();

        /**
         * @property
         */
        this.mOnChangePluginIdentity = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            pluginName: string,
            pluginVendor: string,
            pluginVersion: string,
            formatVersion: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @returns {MR_HostInsertEffectViewer}
     */
    includeEmptySlotsOnly(): MR_HostInsertEffectViewer {
        logger.info(`MR_HostInsertEffectViewer: includeEmptySlotsOnly()`);
        return new MR_HostInsertEffectViewer();
    }

    /**
     * @returns {MR_HostInsertEffectViewer}
     */
    excludeEmptySlots(): MR_HostInsertEffectViewer {
        logger.info(`MR_HostInsertEffectViewer: excludeEmptySlots()`);
        return new MR_HostInsertEffectViewer();
    }

    /**
     * @returns {MR_HostInsertEffectViewer}
     */
    followPluginWindowInFocus(): MR_HostInsertEffectViewer {
        logger.info(`MR_HostInsertEffectViewer: followPluginWindowInFocus()`);
        return new MR_HostInsertEffectViewer();
    }
}

/**
 * @class MR_HostInsertAndStripEffects
 * @augments MR_HostObject
 */
export class MR_HostInsertAndStripEffects extends MR_HostObject {
    mStripEffects: MR_HostStripEffectSlotFolder;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostInsertAndStripEffects: constructor()');

        // define value
        this.value = 'MR_HostInsertAndStripEffects';

        /**
         * @property
         */
        this.mStripEffects = new MR_HostStripEffectSlotFolder();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {string} name
     * @returns {MR_HostInsertEffectViewer}
     */
    makeInsertEffectViewer(name: string): MR_HostInsertEffectViewer {
        logger.info(
            `MR_HostInsertAndStripEffects: makeInsertEffectViewer(${JSON.stringify({
                name: name,
            })})`
        );
        return new MR_HostInsertEffectViewer(name);
    }
}

/**
 * @class MR_SendSlot
 * @augments MR_HostObject
 */
export class MR_SendSlot extends MR_HostObject {
    mOn: MR_SendOn;
    mPrePost: MR_SendPrePost;
    mLevel: MR_SendLevel;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SendSlot: constructor()');

        /**
         * @property
         */
        this.mOn = new MR_SendOn();

        /**
         * @property
         */
        this.mPrePost = new MR_SendPrePost();

        /**
         * @property
         */
        this.mLevel = new MR_SendLevel();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_ControlRoomCueSendSlot
 * @augments MR_HostObject
 */
export class MR_ControlRoomCueSendSlot extends MR_HostObject {
    mOn: MR_ControlRoomCueSendOnValue;
    mPrePost: MR_ControlRoomCueSendPrePostValue;
    mLevel: MR_ControlRoomCueSendLevelValue;
    mPan: MR_ControlRoomCueSendPanValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendSlot: constructor()');

        /**
         * @property
         */
        this.mOn = new MR_ControlRoomCueSendOnValue();

        /**
         * @property
         */
        this.mPrePost = new MR_ControlRoomCueSendPrePostValue();

        /**
         * @property
         */
        this.mLevel = new MR_ControlRoomCueSendLevelValue();

        /**
         * @property
         */
        this.mPan = new MR_ControlRoomCueSendPanValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_MixerChannelValues
 * @augments MR_HostObject
 */
export class MR_MixerChannelValues extends MR_HostObject {
    mVolume: MR_VolumeValue;
    mPan: MR_PanValue;
    mMute: MR_MuteValue;
    mSolo: MR_SoloValue;
    mMonitorEnable: MR_MonitorEnableValue;
    mRecordEnable: MR_RecordEnableValue;
    mEditorOpen: MR_EditorOpenValue;
    mInstrumentOpen: MR_InstrumentOpenValue;
    mSelected: MR_SelectedValue;
    mAutomationRead: MR_AutomationReadValue;
    mAutomationWrite: MR_AutomationWriteValue;
    mVUMeter: MR_VUMeterValue;
    mVUMeterMax: MR_VUMeterMaxValue;
    mVUMeterClip: MR_VUMeterClipValue;
    mVUMeterPeak: MR_VUMeterPeakValue;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MixerChannelValues: constructor()');

        /**
         * @property
         */
        this.mVolume = new MR_VolumeValue();

        /**
         * @property
         */
        this.mPan = new MR_PanValue();

        /**
         * @property
         */
        this.mMute = new MR_MuteValue();

        /**
         * @property
         */
        this.mSolo = new MR_SoloValue();

        /**
         * @property
         */
        this.mMonitorEnable = new MR_MonitorEnableValue();

        /**
         * @property
         */
        this.mRecordEnable = new MR_RecordEnableValue();

        /**
         * @property
         */
        this.mEditorOpen = new MR_EditorOpenValue();

        /**
         * @property
         */
        this.mInstrumentOpen = new MR_InstrumentOpenValue();

        /**
         * @property
         */
        this.mSelected = new MR_SelectedValue();

        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue();

        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue();

        /**
         * @property
         */
        this.mVUMeter = new MR_VUMeterValue();

        /**
         * @property
         */
        this.mVUMeterMax = new MR_VUMeterMaxValue();

        /**
         * @property
         */
        this.mVUMeterClip = new MR_VUMeterClipValue();

        /**
         * @property
         */
        this.mVUMeterPeak = new MR_VUMeterPeakValue();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @class MR_MixerBankZone
 * @augments MR_HostObject
 */
export class MR_MixerBankZone extends MR_HostObject {
    mAction: MR_MixerBankZoneActions;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MixerBankZone: constructor()');

        /**
         * @property
         */
        this.mAction = new MR_MixerBankZoneActions();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeAudioChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeAudioChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeInstrumentChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeInstrumentChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeSamplerChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeSamplerChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeMIDIChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeMIDIChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeFXChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeFXChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeGroupChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeGroupChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeVCAChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeVCAChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeInputChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeInputChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeOutputChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeOutputChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeWindowZoneLeftChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeWindowZoneLeftChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeWindowZoneRightChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: includeWindowZoneRightChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeAudioChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeAudioChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeInstrumentChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeInstrumentChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeSamplerChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeSamplerChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeMIDIChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeMIDIChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeFXChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeFXChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeGroupChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeGroupChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeVCAChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeVCAChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeInputChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeInputChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeOutputChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeOutputChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeWindowZoneLeftChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeWindowZoneLeftChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeWindowZoneRightChannels(): MR_MixerBankZone {
        logger.info(`MR_MixerBankZone: excludeWindowZoneRightChannels()`);
        return new MR_MixerBankZone();
    }

    /**
     * @param {boolean} followVisibility
     * @returns {MR_MixerBankZone}
     */
    setFollowVisibility(followVisibility: boolean): MR_MixerBankZone {
        logger.info(
            `MR_MixerBankZone: setFollowVisibility(${JSON.stringify({
                followVisibility: followVisibility,
            })})`
        );
        return this;
    }

    /**
     * @returns {MR_MixerBankChannel}
     */
    makeMixerBankChannel(): MR_MixerBankChannel {
        logger.info(`MR_MixerBankZone: makeMixerBankChannel()`);
        return new MR_MixerBankChannel();
    }
}

/**
 * @class MR_TrackSelection
 * @augments MR_HostObject
 */
export class MR_TrackSelection extends MR_HostObject {
    mMixerChannel: MR_SelectedTrackChannel;
    mAction: MR_TrackSelectionActions;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_TrackSelection: constructor()');

        /**
         * @property
         */
        this.mMixerChannel = new MR_SelectedTrackChannel();

        /**
         * @property
         */
        this.mAction = new MR_TrackSelectionActions();

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }
}

/**
 * @callback HostObjectOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} title
 */

/**
 * @callback HostObjectOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive
 */

/**
 * @class MR_HostValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 */
export class MR_HostValue {
    value = 'MR_HostValue';
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_HostValue: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}

    toString() {
        const curValue = this.value;

        return `MR_HostValue: toString(${JSON.stringify({
            curValue: curValue,
        })})`;
    }
}

/**
 * @class MR_HostValueUndefined
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostValueUndefined extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor(name?: string) {
        super(name);

        logger.debug(
            `MR_HostValueUndefined: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // define value
        this.value = 'MR_HostValueUndefined';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_HostValueUndefined: constructor()');

        // define value
        this.value = 'MR_HostValueUndefined';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostValueUndefined: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostValueUndefined: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_StartValue
 * Indicates if transport has been started.
 * @augments MR_HostValue
 */
export class MR_StartValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_StartValue: constructor()');

        // define value
        this.value = 'MR_StartValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_StartValue: constructor()');

        // define value
        this.value = 'MR_StartValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_StartValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_StartValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_StopValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_StopValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_StopValue: constructor()');

        // define value
        this.value = 'MR_StopValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_StopValue: constructor()');

        // define value
        this.value = 'MR_StopValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_StopValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_StopValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_RecordValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_RecordValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_RecordValue: constructor()');

        // define value
        this.value = 'MR_RecordValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_RecordValue: constructor()');

        // define value
        this.value = 'MR_RecordValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_RecordValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_RecordValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_RewindValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_RewindValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_RewindValue: constructor()');

        // define value
        this.value = 'MR_RewindValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_RewindValue: constructor()');

        // define value
        this.value = 'MR_RewindValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_RewindValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_RewindValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_ForwardValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_ForwardValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ForwardValue: constructor()');

        // define value
        this.value = 'MR_ForwardValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_ForwardValue: constructor()');

        // define value
        this.value = 'MR_ForwardValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ForwardValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ForwardValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_CycleActiveValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_CycleActiveValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_CycleActiveValue: constructor()');

        // define value
        this.value = 'MR_CycleActiveValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_CycleActiveValue: constructor()');

        // define value
        this.value = 'MR_CycleActiveValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_CycleActiveValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_CycleActiveValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_MetronomeActiveValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_MetronomeActiveValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MetronomeActiveValue: constructor()');

        // define value
        this.value = 'MR_MetronomeActiveValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_MetronomeActiveValue: constructor()');

        // define value
        this.value = 'MR_MetronomeActiveValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MetronomeActiveValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MetronomeActiveValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_MetronomeClickLevel
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_MetronomeClickLevel extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MetronomeClickLevel: constructor()');

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_MetronomeClickLevel: constructor()');
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MetronomeClickLevel: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MetronomeClickLevel: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_VolumeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_VolumeValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_VolumeValue: constructor()');

        // define value
        this.value = 'MR_VolumeValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_VolumeValue: constructor()');

        // define value
        this.value = 'MR_VolumeValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VolumeValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VolumeValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PanValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PanValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PanValue: constructor()');

        // define value
        this.value = 'MR_PanValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_PanValue: constructor()');

        // define value
        this.value = 'MR_PanValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PanValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PanValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_MuteValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_MuteValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MuteValue: constructor()');

        // define value
        this.value = 'MR_MuteValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_MuteValue: constructor()');

        // define value
        this.value = 'MR_MuteValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MuteValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MuteValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_SoloValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_SoloValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SoloValue: constructor()');

        // define value
        this.value = 'MR_SoloValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_SoloValue: constructor()');

        // define value
        this.value = 'MR_SoloValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SoloValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SoloValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_MonitorEnableValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_MonitorEnableValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_MonitorEnableValue: constructor()');

        // define value
        this.value = 'MR_MonitorEnableValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_MonitorEnableValue: constructor()');

        // define value
        this.value = 'MR_MonitorEnableValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MonitorEnableValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_MonitorEnableValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_RecordEnableValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_RecordEnableValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_RecordEnableValue: constructor()');

        // define value
        this.value = 'MR_RecordEnableValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_RecordEnableValue: constructor()');

        // define value
        this.value = 'MR_RecordEnableValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_RecordEnableValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_RecordEnableValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_EditorOpenValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_EditorOpenValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_EditorOpenValue: constructor()');

        // define value
        this.value = 'MR_EditorOpenValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_EditorOpenValue: constructor()');

        // define value
        this.value = 'MR_EditorOpenValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EditorOpenValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EditorOpenValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_InstrumentOpenValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_InstrumentOpenValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_InstrumentOpenValue: constructor()');

        // define value
        this.value = 'MR_InstrumentOpenValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_InstrumentOpenValue: constructor()');

        // define value
        this.value = 'MR_InstrumentOpenValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_InstrumentOpenValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_InstrumentOpenValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_SelectedValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_SelectedValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SelectedValue: constructor()');

        // define value
        this.value = 'MR_SelectedValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_SelectedValue: constructor()');

        // define value
        this.value = 'MR_SelectedValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SelectedValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SelectedValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_AutomationReadValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_AutomationReadValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_AutomationReadValue: constructor()');

        // define value
        this.value = 'MR_AutomationReadValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_AutomationReadValue: constructor()');

        // define value
        this.value = 'MR_AutomationReadValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_AutomationReadValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_AutomationReadValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_AutomationWriteValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_AutomationWriteValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_AutomationWriteValue: constructor()');

        // define value
        this.value = 'MR_AutomationWriteValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};

        logger.debug('MR_AutomationWriteValue: constructor()');

        // define value
        this.value = 'MR_AutomationWriteValue';
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_AutomationWriteValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_AutomationWriteValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_VUMeterValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_VUMeterValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_VUMeterValue: constructor()');

        // define value
        this.value = 'MR_VUMeterValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_VUMeterMaxValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_VUMeterMaxValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_VUMeterMaxValue: constructor()');

        // define value
        this.value = 'MR_VUMeterMaxValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterMaxValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterMaxValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_VUMeterClipValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_VUMeterClipValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_VUMeterClipValue: constructor()');

        // define value
        this.value = 'MR_VUMeterClipValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterClipValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterClipValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_VUMeterPeakValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_VUMeterPeakValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_VUMeterPeakValue: constructor()');

        // define value
        this.value = 'MR_VUMeterPeakValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterPeakValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_VUMeterPeakValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_SendOn
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_SendOn extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SendOn: constructor()');

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SendOn: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SendOn: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_SendPrePost
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_SendPrePost extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SendPrePost: constructor()');

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SendPrePost: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SendPrePost: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_SendLevel
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_SendLevel extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_SendLevel: constructor()');

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SendLevel: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_SendLevel: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_ControlRoomCueSendOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_ControlRoomCueSendOnValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendOnValue: constructor()');

        // define value
        this.value = 'MR_ControlRoomCueSendOnValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendOnValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendOnValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_ControlRoomCueSendPrePostValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_ControlRoomCueSendPrePostValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendPrePostValue: constructor()');

        // define value
        this.value = 'MR_ControlRoomCueSendPrePostValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendPrePostValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendPrePostValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_ControlRoomCueSendLevelValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_ControlRoomCueSendLevelValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendLevelValue: constructor()');

        // define value
        this.value = 'MR_ControlRoomCueSendLevelValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendLevelValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendLevelValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_ControlRoomCueSendPanValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_ControlRoomCueSendPanValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendPanValue: constructor()');

        // define value
        this.value = 'MR_ControlRoomCueSendPanValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendPanValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendPanValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_ControlRoomCueSendFolderBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_ControlRoomCueSendFolderBypassValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ControlRoomCueSendFolderBypassValue: constructor()');

        // define value
        this.value = 'MR_ControlRoomCueSendFolderBypassValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendFolderBypassValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_ControlRoomCueSendFolderBypassValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PluginOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PluginOnValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PluginOnValue: constructor()');

        // define value
        this.value = 'MR_PluginOnValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PluginOnValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PluginOnValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PluginBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PluginBypassValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PluginBypassValue: constructor()');

        // define value
        this.value = 'MR_PluginBypassValue';

        // define value
        this.value = 'MR_PluginBypassValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PluginBypassValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PluginBypassValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PluginEditValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PluginEditValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PluginEditValue: constructor()');

        // define value
        this.value = 'MR_PluginEditValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PluginEditValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PluginEditValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterBypassValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterBypassValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterBypassValue: constructor()');

        // define value
        this.value = 'MR_PreFilterBypassValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterBypassValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterBypassValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterGainValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterGainValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterGainValue: constructor()');

        // define value
        this.value = 'MR_PreFilterGainValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterGainValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterGainValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterPhaseSwitchValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterPhaseSwitchValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterPhaseSwitchValue: constructor()');

        // define value
        this.value = 'MR_PreFilterPhaseSwitchValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterPhaseSwitchValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterPhaseSwitchValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterHighCutFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterHighCutFrequencyValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterHighCutFrequencyValue: constructor()');

        // define value
        this.value = 'MR_PreFilterHighCutFrequencyValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterHighCutFrequencyValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterHighCutFrequencyValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterHighCutOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterHighCutOnValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterHighCutOnValue: constructor()');

        // define value
        this.value = 'MR_PreFilterHighCutOnValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterHighCutOnValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterHighCutOnValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterHighCutSlopeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterHighCutSlopeValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterHighCutSlopeValue: constructor()');

        // define value
        this.value = 'MR_PreFilterHighCutSlopeValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterHighCutSlopeValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterHighCutSlopeValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterLowCutFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterLowCutFrequencyValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterLowCutFrequencyValue: constructor()');

        // define value
        this.value = 'MR_PreFilterLowCutFrequencyValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterLowCutFrequencyValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterLowCutFrequencyValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterLowCutOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterLowCutOnValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterLowCutOnValue: constructor()');

        // define value
        this.value = 'MR_PreFilterLowCutOnValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterLowCutOnValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterLowCutOnValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_PreFilterLowCutSlopeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_PreFilterLowCutSlopeValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_PreFilterLowCutSlopeValue: constructor()');

        // define value
        this.value = 'MR_PreFilterLowCutSlopeValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterLowCutSlopeValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_PreFilterLowCutSlopeValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_EQBandGainValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_EQBandGainValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_EQBandGainValue: constructor()');

        // define value
        this.value = 'MR_EQBandGainValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandGainValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandGainValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_EQBandFrequencyValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_EQBandFrequencyValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_EQBandFrequencyValue: constructor()');

        // define value
        this.value = 'MR_EQBandFrequencyValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandFrequencyValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandFrequencyValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_EQBandQualityValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_EQBandQualityValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_EQBandQualityValue: constructor()');

        // define value
        this.value = 'MR_EQBandQualityValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandQualityValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandQualityValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_EQBandOnValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_EQBandOnValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_EQBandOnValue: constructor()');

        // define value
        this.value = 'MR_EQBandOnValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandOnValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandOnValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_EQBandFilterTypeValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_EQBandFilterTypeValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_EQBandFilterTypeValue: constructor()');

        // define value
        this.value = 'MR_EQBandFilterTypeValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandFilterTypeValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_EQBandFilterTypeValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_QuickControlValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_QuickControlValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_QuickControlValue: constructor()');

        // define value
        this.value = 'MR_QuickControlValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_QuickControlValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_QuickControlValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_FocusedQuickControlsLockedStateValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_FocusedQuickControlsLockedStateValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_FocusedQuickControlsLockedStateValue: constructor()');

        // define value
        this.value = 'MR_FocusedQuickControlsLockedStateValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_FocusedQuickControlsLockedStateValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_FocusedQuickControlsLockedStateValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostPluginParameterBankValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostPluginParameterBankValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostPluginParameterBankValue: constructor()');

        // define value
        this.value = 'MR_HostPluginParameterBankValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostPluginParameterBankValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostPluginParameterBankValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostValueAtMouseCursor
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostValueAtMouseCursor extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostValueAtMouseCursor: constructor()');

        // define value
        this.value = 'MR_HostValueAtMouseCursor';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostValueAtMouseCursor: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostValueAtMouseCursor: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostValueAtMouseCursorLockedState
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostValueAtMouseCursorLockedState extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostValueAtMouseCursorLockedState: constructor()');

        // define value
        this.value = 'MR_HostValueAtMouseCursorLockedState';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostValueAtMouseCursorLockedState: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostValueAtMouseCursorLockedState: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostControlRoomValue
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostControlRoomValue extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomValue: constructor()');

        // define value
        this.value = 'MR_HostControlRoomValue';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomValue: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomValue: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostControlRoomSelectSourceCueValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostControlRoomSelectSourceCueValueByIndex extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomSelectSourceCueValueByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomSelectSourceCueValueByIndex';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomSelectSourceCueValueByIndex: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomSelectSourceCueValueByIndex: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostControlRoomSelectTargetMonitorValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostControlRoomSelectTargetMonitorValueByIndex extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomSelectTargetMonitorValueByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomSelectTargetMonitorValueByIndex';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomSelectTargetMonitorValueByIndex: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomSelectTargetMonitorValueByIndex: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @class MR_HostControlRoomSelectSourceExternalInputValueByIndex
 * Represents a continuous value state of a [HostObject](#hostobject).
 * @augments MR_HostValue
 */
export class MR_HostControlRoomSelectSourceExternalInputValueByIndex extends MR_HostValue {
    mOnProcessValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: number
    ) => void;
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void;
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void;
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void;

    constructor() {
        super();

        logger.debug('MR_HostControlRoomSelectSourceExternalInputValueByIndex: constructor()');

        // define value
        this.value = 'MR_HostControlRoomSelectSourceExternalInputValueByIndex';

        /**
         * @property
         */
        this.mOnProcessValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: number
        ) => {};

        /**
         * @property
         */
        this.mOnDisplayValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            value: string,
            units: string
        ) => {};

        /**
         * @property
         */
        this.mOnTitleChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            title: string
        ) => {};

        /**
         * @property
         */
        this.mOnColorChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            r: number,
            g: number,
            b: number,
            a: number,
            isActive: boolean
        ) => {};
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override increment(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomSelectSourceExternalInputValueByIndex: increment(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    override decrement(activeMapping: MR_ActiveMapping): void {
        logger.info(
            `MR_HostControlRoomSelectSourceExternalInputValueByIndex: decrement(${JSON.stringify({
                activeMapping: activeMapping,
            })})`
        );
    }
}

/**
 * @callback HostValueOnProcessValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} value
 */

/**
 * @callback HostValueOnDisplayValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} value
 * @param {string} units
 */

/**
 * @callback HostValueOnTitleChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} objectTitle
 * @param {string} valueTitle
 */

/**
 * @callback HostValueOnColorChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @param {boolean} isActive
 */

/**
 * @callback OnChangeTransportTime
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} time
 * @param {string} format
 */

/**
 * @callback OnChangeTransportTempoBPM
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} tempoBPM
 */

/**
 * @class MR_TransportTimeDisplayDetails
 */
export class MR_TransportTimeDisplayDetails {
    constructor() {
        logger.debug('MR_TransportTimeDisplayDetails: constructor()');
    }
}

/**
 * @class MR_TransportTimeDisplayDetailsPrimary
 * @augments MR_TransportTimeDisplayDetails
 */
export class MR_TransportTimeDisplayDetailsPrimary extends MR_TransportTimeDisplayDetails {
    mCycleLocatorLeft: MR_TransportTime;
    mCycleLocatorRight: MR_TransportTime;
    mTransportLocator: MR_TransportTime;

    constructor() {
        super();

        logger.debug('MR_TransportTimeDisplayDetailsPrimary: constructor()');

        /**
         * @property
         */
        this.mCycleLocatorLeft = new MR_TransportTime();

        /**
         * @property
         */
        this.mCycleLocatorRight = new MR_TransportTime();

        /**
         * @property
         */
        this.mTransportLocator = new MR_TransportTime();
    }
}

/**
 * @class MR_TransportTimeDisplayDetailsSecondary
 * @augments MR_TransportTimeDisplayDetails
 */
export class MR_TransportTimeDisplayDetailsSecondary extends MR_TransportTimeDisplayDetails {
    mCycleLocatorLeft: MR_TransportTime;
    mCycleLocatorRight: MR_TransportTime;
    mTransportLocator: MR_TransportTime;

    constructor() {
        super();

        logger.debug('MR_TransportTimeDisplayDetailsSecondary: constructor()');

        /**
         * @property
         */
        this.mCycleLocatorLeft = new MR_TransportTime();

        /**
         * @property
         */
        this.mCycleLocatorRight = new MR_TransportTime();

        /**
         * @property
         */
        this.mTransportLocator = new MR_TransportTime();
    }
}

/**
 * @class MR_TransportTimeDisplay
 */
export class MR_TransportTimeDisplay {
    mPrimary: MR_TransportTimeDisplayDetailsPrimary;
    mSecondary: MR_TransportTimeDisplayDetailsSecondary;
    mOnChangeTempoBPM: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        tempoBPM: number
    ) => void;

    constructor() {
        /**
         * @property
         */
        this.mPrimary = new MR_TransportTimeDisplayDetailsPrimary();

        /**
         * @property
         */
        this.mSecondary = new MR_TransportTimeDisplayDetailsSecondary();

        /**
         * @property
         */
        this.mOnChangeTempoBPM = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            tempoBPM: number
        ) => {};

        logger.debug('MR_TransportTimeDisplay: constructor()');
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     * @param {number} tempoBPM
     */
    setTempoBPM(activeMapping: MR_ActiveMapping, tempoBPM: number): void {
        logger.info(
            `MR_TransportTimeDisplay: setTempoBPM(${JSON.stringify({
                activeMapping: activeMapping,
                tempoBPM: tempoBPM,
            })})`
        );
    }
}

/**
 * @class MR_TransportTime
 */
export class MR_TransportTime {
    mOnChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        time: string,
        format: string
    ) => void;

    constructor() {
        /**
         * @property
         */
        this.mOnChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            time: string,
            format: string
        ) => {};

        logger.debug('MR_TransportTime: constructor()');
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     * @param {string} timeString
     */
    setTime(activeMapping: MR_ActiveMapping, timeString: string): void {
        logger.info(
            `MR_TransportTime: setTime(${JSON.stringify({
                activeMapping: activeMapping,
                timeString: timeString,
            })})`
        );
    }
}

/**
 * @class MR_HostPluginParameterBankZoneActions
 */
export class MR_HostPluginParameterBankZoneActions {
    value = 'MR_HostPluginParameterBankZoneActions';

    mPrevBank: MR_HostPluginParameterBankZoneAction;
    mNextBank: MR_HostPluginParameterBankZoneAction;
    mResetBank: MR_HostPluginParameterBankZoneAction;

    constructor() {
        /**
         * @property
         */
        this.mPrevBank = new MR_HostPluginParameterBankZoneAction();

        /**
         * @property
         */
        this.mNextBank = new MR_HostPluginParameterBankZoneAction();

        /**
         * @property
         */
        this.mResetBank = new MR_HostPluginParameterBankZoneAction();

        logger.debug('MR_HostPluginParameterBankZoneActions: constructor()');
    }
}

/**
 * @callback HostPluginSlotOnChangePluginIdentity
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {string} pluginName
 * @param {string} pluginVendor
 * @param {string} pluginVersion
 * @param {string} formatVersion


/**
 * @class MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilter {
    value = 'MR_HostInsertEffectFilter';

    constructor() {
        logger.debug('MR_HostInsertEffectFilter: constructor()');
    }
}

/**
 * @class MR_HostInsertEffectFilterIncludeEmptySlotsOnly
 * @augments MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilterIncludeEmptySlotsOnly extends MR_HostInsertEffectFilter {
    constructor() {
        super();
    }
}

/**
 * @class MR_HostInsertEffectFilterExcludeEmptySlots
 * @augments MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilterExcludeEmptySlots extends MR_HostInsertEffectFilter {
    constructor() {
        super();
    }
}

/**
 * @class MR_HostInsertEffectFilterFollowPluginWindowInFocus
 * @augments MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilterFollowPluginWindowInFocus extends MR_HostInsertEffectFilter {
    constructor() {
        super();
    }
}

/**
 * @class MR_HostInsertEffectViewerActions
 */
export class MR_HostInsertEffectViewerActions {
    value = 'MR_HostInsertEffectViewerActions';

    mPrev: MR_HostInsertEffectViewerAction;
    mNext: MR_HostInsertEffectViewerAction;
    mReset: MR_HostInsertEffectViewerAction;

    constructor() {
        /**
         * @property
         */
        this.mPrev = new MR_HostInsertEffectViewerAction();

        /**
         * @property
         */
        this.mNext = new MR_HostInsertEffectViewerAction();

        /**
         * @property
         */
        this.mReset = new MR_HostInsertEffectViewerAction();

        logger.debug('MR_HostInsertEffectViewerActions: constructor()');
    }
}

/**
 * @class MR_MixerBankZoneActions
 */
export class MR_MixerBankZoneActions {
    mPrevBank: MR_MixerBankZoneAction;
    mNextBank: MR_MixerBankZoneAction;
    mShiftLeft: MR_MixerBankZoneAction;
    mShiftRight: MR_MixerBankZoneAction;
    mResetBank: MR_MixerBankZoneAction;

    constructor() {
        /**
         * @property
         */
        this.mPrevBank = new MR_MixerBankZoneAction();

        /**
         * @property
         */
        this.mNextBank = new MR_MixerBankZoneAction();

        /**
         * @property
         */
        this.mShiftLeft = new MR_MixerBankZoneAction();

        /**
         * @property
         */
        this.mShiftRight = new MR_MixerBankZoneAction();

        /**
         * @property
         */
        this.mResetBank = new MR_MixerBankZoneAction();

        logger.debug('MR_MixerBankZoneActions: constructor()');
    }
}

/**
 * @class MR_TrackSelectionActions
 */
export class MR_TrackSelectionActions {
    mPrevTrack: MR_TrackSelectionAction;
    mNextTrack: MR_TrackSelectionAction;

    constructor() {
        /**
         * @property
         */
        this.mPrevTrack = new MR_TrackSelectionAction();

        /**
         * @property
         */
        this.mNextTrack = new MR_TrackSelectionAction();

        logger.debug('MR_TrackSelectionActions: constructor()');
    }
}

/**
 * @class MR_HostBinding
 */
export class MR_HostBinding {
    value = 'MR_HostBinding';

    constructor() {
        logger.debug('MR_HostBinding: constructor()');
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_HostBinding}
     */
    setSubPage(subPage: MR_SubPage): MR_HostBinding {
        logger.info(
            `MR_HostBinding: setSubPage(${JSON.stringify({
                subPage: subPage,
            })})`
        );
        return this;
    }

    /**
     * @param {number} filterValue
     * @returns {MR_HostBinding}
     */
    filterByValue(filterValue: number): MR_HostBinding {
        logger.info(
            `MR_HostBinding: filterByValue(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return this;
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_HostBinding}
     */
    filterByValueRange(from: number, to: number): MR_HostBinding {
        logger.info(
            `MR_HostBinding: filterByValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return this;
    }

    /**
     * @param {number} mapValue
     * @returns {MR_HostBinding}
     */
    mapToValue(mapValue: number): MR_HostBinding {
        logger.info(
            `MR_HostBinding: mapToValue(${JSON.stringify({
                mapValue: mapValue,
            })})`
        );
        return this;
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_HostBinding}
     */
    mapToValueRange(from: number, to: number): MR_HostBinding {
        logger.info(
            `MR_HostBinding: mapToValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return this;
    }
}

/**
 * @class MR_ValueBinding
 * @augments MR_HostBinding
 */
export class MR_ValueBinding extends MR_HostBinding {
    mOnValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        currValue: number,
        valueDiff: number
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ValueBinding: constructor()');

        /**
         * @property
         */
        this.mOnValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            currValue: number,
            valueDiff: number
        ) => {};
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setTypeDefault(): MR_ValueBinding {
        logger.info(`MR_ValueBinding: setTypeDefault()`);
        return this;
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setTypeToggle(): MR_ValueBinding {
        logger.info(`MR_ValueBinding: setTypeToggle()`);
        return this;
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setValueTakeOverModeJump(): MR_ValueBinding {
        logger.info(`MR_ValueBinding: setValueTakeOverModeJump()`);
        return this;
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setValueTakeOverModePickup(): MR_ValueBinding {
        logger.info(`MR_ValueBinding: setValueTakeOverModePickup()`);
        return this;
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setValueTakeOverModeScaled(): MR_ValueBinding {
        logger.info(`MR_ValueBinding: setValueTakeOverModeScaled()`);
        return this;
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_ValueBinding}
     */
    override setSubPage(subPage: MR_SubPage): MR_ValueBinding {
        logger.info(
            `MR_ValueBinding: setSubPage(${JSON.stringify({
                subPage: subPage,
            })})`
        );
        return this;
    }

    /**
     * @param {number} filterValue
     * @returns {MR_ValueBinding}
     */
    override filterByValue(filterValue: number): MR_ValueBinding {
        logger.info(
            `MR_ValueBinding: filterByValue(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_ValueBinding();
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ValueBinding}
     */
    override filterByValueRange(from: number, to: number): MR_ValueBinding {
        logger.info(
            `MR_ValueBinding: filterByValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return new MR_ValueBinding();
    }

    /**
     * @param {number} mapValue
     * @returns {MR_ValueBinding}
     */
    override mapToValue(mapValue: number): MR_ValueBinding {
        logger.info(
            `MR_ValueBinding: mapToValue(${JSON.stringify({
                mapValue: mapValue,
            })})`
        );
        return new MR_ValueBinding();
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ValueBinding}
     */
    override mapToValueRange(from: number, to: number): MR_ValueBinding {
        logger.info(
            `MR_ValueBinding: mapToValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return new MR_ValueBinding();
    }
}

/**
 * @class MR_CommandBinding
 * @augments MR_HostBinding
 */
export class MR_CommandBinding extends MR_HostBinding {
    mOnValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        currValue: number,
        valueDiff: number
    ) => void;

    constructor() {
        super();

        logger.debug('MR_CommandBinding: constructor()');

        /**
         * @property
         */
        this.mOnValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            currValue: number,
            valueDiff: number
        ) => {};
    }

    /**
     * @param {number} delaySeconds
     * @param {number} rateHz
     * @returns {MR_Repeating}
     */
    makeRepeating(delaySeconds: number, rateHz: number): MR_Repeating {
        logger.info(
            `MR_CommandBinding: makeRepeating(${JSON.stringify({
                delaySeconds: delaySeconds,
                rateHz: rateHz,
            })})`
        );
        return new MR_Repeating();
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_CommandBinding}
     */
    override setSubPage(subPage: MR_SubPage): MR_CommandBinding {
        logger.info(
            `MR_CommandBinding: setSubPage(${JSON.stringify({
                subPage: subPage,
            })})`
        );
        return this;
    }

    /**
     * @param {number} filterValue
     * @returns {MR_CommandBinding}
     */
    override filterByValue(filterValue: number): MR_CommandBinding {
        logger.info(
            `MR_CommandBinding: filterByValue(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_CommandBinding();
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_CommandBinding}
     */
    override filterByValueRange(from: number, to: number): MR_CommandBinding {
        logger.info(
            `MR_CommandBinding: filterByValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return new MR_CommandBinding();
    }

    /**
     * @param {number} mapValue
     * @returns {MR_CommandBinding}
     */
    override mapToValue(mapValue: number): MR_CommandBinding {
        logger.info(
            `MR_CommandBinding: mapToValue(${JSON.stringify({
                mapValue: mapValue,
            })})`
        );
        return new MR_CommandBinding();
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_CommandBinding}
     */
    override mapToValueRange(from: number, to: number): MR_CommandBinding {
        logger.info(
            `MR_CommandBinding: mapToValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return new MR_CommandBinding();
    }
}

/**
 * @class MR_ActionBinding
 * @augments MR_HostBinding
 */
export class MR_ActionBinding extends MR_HostBinding {
    mOnValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        currValue: number,
        valueDiff: number
    ) => void;

    constructor() {
        super();

        logger.debug('MR_ActionBinding: constructor()');

        /**
         * @property
         */
        this.mOnValueChange = (
            activeDevice: MR_ActiveDevice,
            activeMapping: MR_ActiveMapping,
            currValue: number,
            valueDiff: number
        ) => {};
    }

    /**
     * @param {number} delaySeconds
     * @param {number} rateHz
     * @returns {MR_Repeating}
     */
    makeRepeating(delaySeconds: number, rateHz: number): MR_Repeating {
        logger.info(
            `MR_ActionBinding: makeRepeating(${JSON.stringify({
                delaySeconds: delaySeconds,
                rateHz: rateHz,
            })})`
        );
        return new MR_Repeating();
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_ActionBinding}
     */
    override setSubPage(subPage: MR_SubPage): MR_ActionBinding {
        logger.info(
            `MR_ActionBinding: setSubPage(${JSON.stringify({
                subPage: subPage,
            })})`
        );
        return this;
    }

    /**
     * @param {number} filterValue
     * @returns {MR_ActionBinding}
     */
    override filterByValue(filterValue: number): MR_ActionBinding {
        logger.info(
            `MR_ActionBinding: filterByValue(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_ActionBinding();
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ActionBinding}
     */
    override filterByValueRange(from: number, to: number): MR_ActionBinding {
        logger.info(
            `MR_ActionBinding: filterByValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return new MR_ActionBinding();
    }

    /**
     * @param {number} mapValue
     * @returns {MR_ActionBinding}
     */
    override mapToValue(mapValue: number): MR_ActionBinding {
        logger.info(
            `MR_ActionBinding: mapToValue(${JSON.stringify({
                mapValue: mapValue,
            })})`
        );
        return new MR_ActionBinding();
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ActionBinding}
     */
    override mapToValueRange(from: number, to: number): MR_ActionBinding {
        logger.info(
            `MR_ActionBinding: mapToValueRange(${JSON.stringify({
                from: from,
                to: to,
            })})`
        );
        return new MR_ActionBinding();
    }
}

/**
 * @callback HostBindingOnValueChange
 * @param {MR_ActiveDevice} activeDevice
 * @param {MR_ActiveMapping} activeMapping
 * @param {number} currValue
 * @param {number} valueDiff

/**
 * @class MR_SubPageArea
 */
export class MR_SubPageArea {
    mAction: MR_SubPageAreaActions;
    name: string | undefined;

    constructor(name?: string) {
        logger.debug(
            `MR_SubPageArea: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;

        /**
         * @property
         */
        this.mAction = new MR_SubPageAreaActions();
    }

    /**
     * @param {string} name
     * @returns {MR_SubPage}
     */
    makeSubPage(name: string): MR_SubPage {
        logger.info(
            `MR_SubPageArea: makeSubPage(${JSON.stringify({
                name: name,
            })})`
        );
        return new MR_SubPage(name);
    }
}

/**
 * @class MR_SubPageAreaActions
 */
export class MR_SubPageAreaActions {
    mPrev: MR_SubPageAreaAction;
    mNext: MR_SubPageAreaAction;
    mReset: MR_SubPageAreaAction;

    constructor() {
        /**
         * @property
         */
        this.mPrev = new MR_SubPageAreaAction();

        /**
         * @property
         */
        this.mNext = new MR_SubPageAreaAction();

        /**
         * @property
         */
        this.mReset = new MR_SubPageAreaAction();

        logger.debug('MR_SubPageAreaActions: constructor()');
    }
}

/**
 * @class MR_SubPage
 */
export class MR_SubPage {
    name: string | undefined;

    mAction: MR_SubPageActions;
    mOnActivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void;
    mOnDeactivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void;

    constructor(name?: string) {
        /**
         * @property
         */
        this.mAction = new MR_SubPageActions();

        /**
         * @property
         */
        this.mOnActivate = (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => {};

        /**
         * @property
         */
        this.mOnDeactivate = (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => {};

        logger.debug(
            `MR_SubPage: constructor(${JSON.stringify({
                name: name,
            })})`
        );

        // set name
        this.name = name;
    }
}

/**
 * @class MR_SubPageActions
 */
export class MR_SubPageActions {
    value = 'MR_SubPageActions';
    mActivate: MR_SubPageActionActivate;

    constructor() {
        /**
         * @property
         */
        this.mActivate = new MR_SubPageActionActivate();

        logger.debug('MR_SubPageActions: constructor()');
    }
}

/**
 * @class MR_Repeating
 */
export class MR_Repeating {
    value = 'MR_Repeating';

    constructor() {
        logger.debug('MR_Repeating: constructor()');
    }
}

/**
 * @class MR_MappingPageActions
 */
export class MR_MappingPageActions {
    value = 'MR_MappingPageActions';
    mActivate: MR_MappingPageActionActivate;

    constructor() {
        /**
         * @property
         */
        this.mActivate = new MR_MappingPageActionActivate();

        logger.debug('MR_SubPageActions: constructor()');
    }
}

/**
 * @class MR_DeviceDetectionUnit
 * Define device auto detection.
 * @example
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice IN')
 *     .expectOutputNameEquals('SimpleDevice OUT')
 *
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice (MIDI IN)')
 *     .expectOutputNameEquals('SimpleDevice (MIDI OUT)')
 *
 */
export class MR_DeviceDetectionUnit {
    value = 'MR_DeviceDetectionUnit';

    constructor() {
        logger.debug('MR_DeviceDetectionUnit: constructor()');
    }

    /**
     * Define port naming pair.
     * @example
     * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
     *     .expectInputNameEquals('SimpleDevice IN')
     *     .expectOutputNameEquals('SimpleDevice OUT')
     *
     * @param {MR_DeviceMidiInput} inputPort
     * @param {MR_DeviceMidiOutput} outputPort
     * @returns {MR_DetectionPortPair}
     */
    detectPortPair(
        inputPort: MR_DeviceMidiInput,
        outputPort: MR_DeviceMidiOutput
    ): MR_DetectionPortPair {
        logger.info(
            `MR_DeviceDetectionUnit: detectPortPair(${JSON.stringify({
                inputPort: inputPort,
                outputPort: outputPort,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {MR_DeviceMidiInput} inputPort
     * @returns {MR_DetectionSingleInput}
     */
    detectSingleInput(inputPort: MR_DeviceMidiInput): MR_DetectionSingleInput {
        logger.info(
            `MR_DeviceDetectionUnit: detectSingleInput(${JSON.stringify({
                inputPort: inputPort,
            })})`
        );
        return new MR_DetectionSingleInput();
    }
}

/**
 * @class MR_DetectionEntry
 */
export class MR_DetectionEntry {
    value = 'MR_DetectionEntry';

    constructor() {
        logger.debug('MR_DetectionEntry: constructor()');
    }
}

/**
 * @class MR_DetectionPortPair
 * Define port naming pair.
 * @example
 * deviceDriver.makeDetectionUnit().detectPortPair(midiInput, midiOutput)
 *     .expectInputNameEquals('SimpleDevice IN')
 *     .expectOutputNameEquals('SimpleDevice OUT')
 *
 * @augments MR_DetectionEntry
 */
export class MR_DetectionPortPair extends MR_DetectionEntry {
    constructor() {
        super();

        logger.debug('MR_DetectionPortPair: constructor()');

        // define value
        this.value = 'MR_DetectionPortPair';
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameContains(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectInputNameContains(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameEquals(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectInputNameEquals(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameStartsWith(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectInputNameStartsWith(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameEndsWith(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectInputNameEndsWith(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameContains(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectOutputNameContains(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameEquals(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectOutputNameEquals(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameStartsWith(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectOutputNameStartsWith(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameEndsWith(filterValue: string): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectOutputNameEndsWith(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionPortPair();
    }

    /**
     * @param {string} manufacturerID
     * @param {string} deviceFamily
     * @param {string} modelNumber
     * @returns {MR_DetectionPortPair}
     */
    expectSysexIdentityResponse(
        manufacturerID: string,
        deviceFamily: string,
        modelNumber: string
    ): MR_DetectionPortPair {
        logger.info(
            `MR_DetectionPortPair: expectSysexIdentityResponse(${JSON.stringify({
                manufacturerID: manufacturerID,
                deviceFamily: deviceFamily,
                modelNumber: modelNumber,
            })})`
        );
        return new MR_DetectionPortPair();
    }
}

/**
 * @class MR_DetectionSingleInput
 * @augments MR_DetectionEntry
 */
export class MR_DetectionSingleInput extends MR_DetectionEntry {
    constructor() {
        super();

        logger.debug('MR_DetectionSingleInput: constructor()');

        // define value
        this.value = 'MR_DetectionSingleInput';
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameContains(filterValue: string): MR_DetectionSingleInput {
        logger.info(
            `MR_DetectionSingleInput: expectInputNameContains(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionSingleInput();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameEquals(filterValue: string): MR_DetectionSingleInput {
        logger.info(
            `MR_DetectionSingleInput: expectInputNameEquals(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionSingleInput();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameStartsWith(filterValue: string): MR_DetectionSingleInput {
        logger.info(
            `MR_DetectionSingleInput: expectInputNameStartsWith(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionSingleInput();
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameEndsWith(filterValue: string): MR_DetectionSingleInput {
        logger.info(
            `MR_DetectionSingleInput: expectInputNameEndsWith(${JSON.stringify({
                filterValue: filterValue,
            })})`
        );
        return new MR_DetectionSingleInput();
    }
}

/**
 * @class MR_DeviceDriverActions
 */
export class MR_DeviceDriverActions {
    mPrevPage: MR_DeviceDriverAction;
    mNextPage: MR_DeviceDriverAction;
    mResetPage: MR_DeviceDriverAction;

    constructor() {
        /**
         * @property
         */
        this.mPrevPage = new MR_DeviceDriverAction();

        /**
         * @property
         */
        this.mNextPage = new MR_DeviceDriverAction();

        /**
         * @property
         */
        this.mResetPage = new MR_DeviceDriverAction();

        logger.debug('MR_DeviceDriverActions: constructor()');
    }
}

/**
 * @class MR_InitialSysexFile
 */
export class MR_InitialSysexFile {
    constructor() {
        logger.debug('MR_InitialSysexFile: constructor()');
    }
}

/**
 * @class MR_UserGuide
 */
export class MR_UserGuide {
    constructor() {
        logger.debug('MR_UserGuide: constructor()');
    }
}

// export classes etc.
const module_object = new MR_MidiRemoteAPI();
export const makeDeviceDriver = module_object.makeDeviceDriver;
export const mDefaults = new MR_HostDefaults();
export default module_object;
