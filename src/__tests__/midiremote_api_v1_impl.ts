/**
 * @class MR_MidiRemoteAPI
 * Entry point to the **MIDI Remote API**.
 * @example
 * var midiremote_api = require('midiremote_api_v1')
 */
export class MR_MidiRemoteAPI {
    mDefaults: MR_HostDefaults

    constructor() {
        console.log('Mock MR_MidiRemoteAPI: constructor was called')

        /**
         * @property
         */
        this.mDefaults = new MR_HostDefaults()
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
        console.log('Mock MR_DeviceSurface: makeDeviceDriver was called')
        return new MR_DeviceDriver()
    }
}

/**
 * @typedef Integer
 * @type {number}
 */
type Integer = number

/**
 * @typedef Text
 * @type {string}
 */
type Text = string

/**
 * @typedef Scalar
 * @type {number}
 */
type Scalar = number

/**
 * @typedef Bool
 * @type {boolean}
 */
type Bool = boolean

/**
 * @typedef Byte
 * @type {number}
 */
type Byte = number

/**
 * @typedef Uuid
 * @type {string}
 */
type Uuid = string

/**
 * @typedef Size
 * @type {number}
 */
type Size = number

/**
 * @typedef Index
 * @type {number}
 */
type Index = number

/**
 * @typedef Name
 * @type {string}
 */
type Name = string

/**
 * @typedef MidiMessage
 * @type {number[]}
 */
type MidiMessage = number[]

/**
 * @typedef HostObjectClassID
 * @type {string}
 */
type HostObjectClassID = string

/**
 * @typedef HostObjectPath
 * @type {string}
 */
type HostObjectPath = string

/**
 * @typedef HostValueTag
 * @type {number}
 */
type HostValueTag = number

/**
 * @class MR_HostDefaults
 */
export class MR_HostDefaults {
    constructor() {
        console.log('Mock MR_HostDefaults: constructor was called')
    }

    /**
     * @returns {string}
     */
    getAppName(): string {
        return 'Mocked Midi Remote API'
    }

    /**
     * @returns {number}
     */
    getNumberOfInsertEffectSlots(): number {
        return 8
    }

    /**
     * @returns {number}
     */
    getNumberOfStripEffectSlots(): number {
        return 8
    }

    /**
     * @returns {number}
     */
    getNumberOfSendSlots(): number {
        return 8
    }

    /**
     * @returns {number}
     */
    getNumberOfQuickControls(): number {
        return 8
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomTalkbackChannels(): number {
        return 2
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomExternalInputChannels(): number {
        return 4
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomCueChannels(): number {
        return 4
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomPhonesChannels(): number {
        return 2
    }

    /**
     * @returns {number}
     */
    getMaxControlRoomMonitorChannels(): number {
        return 4
    }
}

/**
 * @class MR_ActiveDevice
 * Represents a detected and activated device of a specific [DeviceDriver](#devicedriver).
 */
export class MR_ActiveDevice {
    constructor() {
        console.log('Mock MR_ActiveDevice: constructor was called')
    }

    /**
     * @param {string} key
     * @param {string} val
     */
    setState(key: string, val: string): void {}

    /**
     * @param {string} key
     * @returns {string}
     */
    getState(key: string): string {
        return 'NOT IMPLEMENTED'
    }
}

/**
 * @class MR_ActiveMapping
 */
export class MR_ActiveMapping {
    constructor() {
        console.log('Mock MR_ActiveMapping: constructor was called')
    }
}

/**
 * @class MR_HostAction
 */
export class MR_HostAction {
    constructor() {
        console.log('Mock MR_HostAction: constructor was called')
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_HostPluginParameterBankZoneAction
 * @augments MR_HostAction
 */
export class MR_HostPluginParameterBankZoneAction extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_HostInsertEffectViewerAction
 * @augments MR_HostAction
 */
export class MR_HostInsertEffectViewerAction extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_MixerBankZoneAction
 * @augments MR_HostAction
 */
export class MR_MixerBankZoneAction extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_TrackSelectionAction
 * @augments MR_HostAction
 */
export class MR_TrackSelectionAction extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_SubPageActionActivate
 * @augments MR_HostAction
 */
export class MR_SubPageActionActivate extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_SubPageAreaAction
 * @augments MR_HostAction
 */
export class MR_SubPageAreaAction extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_MappingPageActionActivate
 * @augments MR_HostAction
 */
export class MR_MappingPageActionActivate extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_DeviceDriverAction
 * @augments MR_HostAction
 */
export class MR_DeviceDriverAction extends MR_HostAction {
    constructor() {
        super()
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    trigger(activeMapping: MR_ActiveMapping): void {}
}

/**
 * @class MR_DeviceDriver
 * Represents specific hardware device.
 * @example
 * var deviceDriver = midiremote_api.makeDeviceDriver('ExampleCompany', 'SimpleDevice', 'Steinberg Media Technologies GmbH')
 */
export class MR_DeviceDriver {
    mPorts: MR_Ports
    mSurface: MR_DeviceSurface
    mMapping: MR_FactoryMapping
    mAction: MR_DeviceDriverActions
    mOnActivate: (activeDevice: MR_ActiveDevice) => void
    mOnDeactivate: (activeDevice: MR_ActiveDevice) => void

    constructor() {
        /**
         * @property
         */
        this.mPorts = new MR_Ports()
        /**
         * @property
         */
        this.mSurface = new MR_DeviceSurface()
        /**
         * @property
         */
        this.mMapping = new MR_FactoryMapping()
        /**
         * @property
         */
        this.mAction = new MR_DeviceDriverActions()
        /**
         * @property
         */
        this.mOnActivate = (/** @type {MR_ActiveDevice} */ activeDevice) => {}
        /**
         * @property
         */
        this.mOnDeactivate = (/** @type {MR_ActiveDevice} */ activeDevice) => {}

        console.log('Mock MR_DeviceDriver: constructor was called')
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
        return new MR_DeviceDetectionUnit()
    }

    /**
     * @param {string} fileName
     * @param {number} delayInMilliseconds
     * @returns {MR_InitialSysexFile}
     */
    setInitialSysexFile(fileName: string, delayInMilliseconds: number): MR_InitialSysexFile {
        return new MR_InitialSysexFile()
    }

    /**
     * @param {string} fileName
     * @returns {MR_UserGuide}
     */
    setUserGuide(fileName: string): MR_UserGuide {
        return new MR_UserGuide()
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
        console.log('Mock MR_Ports: constructor was called')
    }

    /**
     * Device driver MIDI input port.
     * @example
     * var midiInput = deviceDriver.mPorts.makeMidiInput()
     * @param {string} name
     * @returns {MR_DeviceMidiInput}
     */
    makeMidiInput(name = ''): MR_DeviceMidiInput {
        return new MR_DeviceMidiInput()
    }

    /**
     * Device driver MIDI output port.
     * @example
     * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
     * @param {string} name
     * @returns {MR_DeviceMidiOutput}
     */
    makeMidiOutput(name = ''): MR_DeviceMidiOutput {
        return new MR_DeviceMidiOutput()
    }
}

/**
 * @class MR_DeviceMidiInput
 * Device driver MIDI input port.
 * @example
 * var midiInput = deviceDriver.mPorts.makeMidiInput()
 */
export class MR_DeviceMidiInput {
    /**
     * @callback OnSysex
     * @param {MR_ActiveDevice} activeDevice
     * @param {MidiMessage} message
     */
    mOnSysex: (activeDevice: MR_ActiveDevice, message: MidiMessage) => void

    constructor() {
        /**
         * @property
         */
        this.mOnSysex = (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MidiMessage} */ message
        ) => {}

        console.log('Mock MR_DeviceMidiInput: constructor was called')
    }
}

/**
 * @class MR_DeviceMidiOutput
 * Device driver MIDI output port.
 * @example
 * var midiOutput = deviceDriver.mPorts.makeMidiOutput()
 */
export class MR_DeviceMidiOutput {
    constructor() {
        console.log('Mock MR_DeviceMidiOutput: constructor was called')
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {MidiMessage} message
     */
    sendMidi(activeDevice: MR_ActiveDevice, message: MidiMessage): void {}

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {string} fileName
     * @param {number} delayMilliseconds
     */
    sendSysexFile(
        activeDevice: MR_ActiveDevice,
        fileName: string,
        delayMilliseconds: number
    ): void {}
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
        console.log('Mock MR_DeviceSurface: constructor was called')
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_PushEncoder}
     */
    makePushEncoder(x: number, y: number, w: number, h: number): MR_PushEncoder {
        console.log('Mock MR_DeviceSurface: makePushEncoder was called')
        return new MR_PushEncoder()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Knob}
     */
    makeKnob(x: number, y: number, w: number, h: number): MR_Knob {
        console.log('Mock MR_DeviceSurface: makeKnob was called')
        return new MR_Knob()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Fader}
     */
    makeFader(x: number, y: number, w: number, h: number): MR_Fader {
        console.log('Mock MR_DeviceSurface: makeFader was called')
        return new MR_Fader()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Button}
     */
    makeButton(x: number, y: number, w: number, h: number): MR_Button {
        return new MR_Button()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_ModWheel}
     */
    makeModWheel(x: number, y: number, w: number, h: number): MR_ModWheel {
        return new MR_ModWheel()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_PitchBend}
     */
    makePitchBend(x: number, y: number, w: number, h: number): MR_PitchBend {
        return new MR_PitchBend()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_TriggerPad}
     */
    makeTriggerPad(x: number, y: number, w: number, h: number): MR_TriggerPad {
        return new MR_TriggerPad()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_PadXY}
     */
    makePadXY(x: number, y: number, w: number, h: number): MR_PadXY {
        return new MR_PadXY()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_JoyStickXY}
     */
    makeJoyStickXY(x: number, y: number, w: number, h: number): MR_JoyStickXY {
        return new MR_JoyStickXY()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_Lamp}
     */
    makeLamp(x: number, y: number, w: number, h: number): MR_Lamp {
        return new MR_Lamp()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_BlindPanel}
     */
    makeBlindPanel(x: number, y: number, w: number, h: number): MR_BlindPanel {
        return new MR_BlindPanel()
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
        return new MR_PianoKeys()
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @returns {MR_SurfaceLabelField}
     */
    makeLabelField(x: number, y: number, w: number, h: number): MR_SurfaceLabelField {
        return new MR_SurfaceLabelField()
    }

    /**
     * @param {string} name
     * @returns {MR_ControlLayerZone}
     */
    makeControlLayerZone(name: string): MR_ControlLayerZone {
        return new MR_ControlLayerZone()
    }

    /**
     * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
     * @param {string} name
     * @returns {MR_SurfaceCustomValueVariable}
     */
    makeCustomValueVariable(name: string): MR_SurfaceCustomValueVariable {
        return new MR_SurfaceCustomValueVariable()
    }
}

/**
 * @class MR_SurfaceElement
 */
export class MR_SurfaceElement {
    constructor() {
        console.log('Mock MR_SurfaceElement: constructor was called')
    }
}

/**
 * @class MR_PushEncoder
 * @augments MR_SurfaceElement
 */
export class MR_PushEncoder extends MR_SurfaceElement {
    mEncoderValue: MR_SurfaceElementValue
    mPushValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mEncoderValue = new MR_SurfaceElementValue()
        /**
         * @property
         */
        this.mPushValue = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_PushEncoder}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_PushEncoder {
        return this
    }
}

/**
 * @class MR_Knob
 * @augments MR_SurfaceElement
 */
export class MR_Knob extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_Knob}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_Knob {
        return this
    }
}

/**
 * @class MR_Fader
 * @augments MR_SurfaceElement
 */
export class MR_Fader extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @returns {MR_Fader}
     */
    setTypeVertical(): MR_Fader {
        return this
    }

    /**
     * @returns {MR_Fader}
     */
    setTypeHorizontal(): MR_Fader {
        return this
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_Fader}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_Fader {
        return this
    }
}

/**
 * @class MR_Button
 * @augments MR_SurfaceElement
 */
export class MR_Button extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @returns {MR_Button}
     */
    setTypePush(): MR_Button {
        return this
    }

    /**
     * @returns {MR_Button}
     */
    setTypeToggle(): MR_Button {
        return this
    }

    /**
     * @returns {MR_Button}
     */
    setShapeRectangle(): MR_Button {
        return this
    }

    /**
     * @returns {MR_Button}
     */
    setShapeCircle(): MR_Button {
        return this
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_Button}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_Button {
        return this
    }
}

/**
 * @class MR_ModWheel
 * @augments MR_SurfaceElement
 */
export class MR_ModWheel extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_ModWheel}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_ModWheel {
        return this
    }
}

/**
 * @class MR_PitchBend
 * @augments MR_SurfaceElement
 */
export class MR_PitchBend extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_PitchBend}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_PitchBend {
        return this
    }
}

/**
 * @class MR_TriggerPad
 * @augments MR_SurfaceElement
 */
export class MR_TriggerPad extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_TriggerPad}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_TriggerPad {
        return this
    }
}

/**
 * @class MR_PadXY
 * @augments MR_SurfaceElement
 */
export class MR_PadXY extends MR_SurfaceElement {
    mX: MR_SurfaceElementValue
    mY: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mX = new MR_SurfaceElementValue()
        /**
         * @property
         */
        this.mY = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_PadXY}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_PadXY {
        return this
    }
}

/**
 * @class MR_JoyStickXY
 * @augments MR_SurfaceElement
 */
export class MR_JoyStickXY extends MR_SurfaceElement {
    mX: MR_SurfaceElementValue
    mY: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mX = new MR_SurfaceElementValue()
        /**
         * @property
         */
        this.mY = new MR_SurfaceElementValue()
    }

    /**
     * @param {MR_ControlLayer} controlLayer
     * @returns {MR_JoyStickXY}
     */
    setControlLayer(controlLayer: MR_ControlLayer): MR_JoyStickXY {
        return this
    }
}

/**
 * @class MR_Lamp
 * @augments MR_SurfaceElement
 */
export class MR_Lamp extends MR_SurfaceElement {
    mSurfaceValue: MR_SurfaceElementValue

    constructor() {
        super()

        /**
         * @property
         */
        this.mSurfaceValue = new MR_SurfaceElementValue()
    }

    /**
     * @returns {MR_Lamp}
     */
    setShapeRectangle(): MR_Lamp {
        return this
    }

    /**
     * @returns {MR_Lamp}
     */
    setShapeCircle(): MR_Lamp {
        return this
    }
}

/**
 * @class MR_BlindPanel
 * @augments MR_SurfaceElement
 */
export class MR_BlindPanel extends MR_SurfaceElement {
    constructor() {
        super()
    }

    /**
     * @returns {MR_BlindPanel}
     */
    setShapeRectangle(): MR_BlindPanel {
        return this
    }

    /**
     * @returns {MR_BlindPanel}
     */
    setShapeCircle(): MR_BlindPanel {
        return this
    }
}

/**
 * @class MR_PianoKeys
 * @augments MR_SurfaceElement
 */
export class MR_PianoKeys extends MR_SurfaceElement {
    constructor() {
        super()
    }
}

/**
 * @class MR_SurfaceLabelField
 */
export class MR_SurfaceLabelField {
    constructor() {
        console.log('Mock MR_SurfaceLabelField: constructor was called')
    }

    /**
     * @param {MR_SurfaceElement} surfaceElement
     * @returns {MR_SurfaceLabelField}
     */
    relateTo(surfaceElement: MR_SurfaceElement): MR_SurfaceLabelField {
        return new MR_SurfaceLabelField()
    }
}

/**
 * @class MR_ControlLayerZone
 */
export class MR_ControlLayerZone {
    constructor() {
        console.log('Mock MR_ControlLayerZone: constructor was called')
    }

    /**
     * @param {string} name
     * @returns {MR_ControlLayer}
     */
    makeControlLayer(name: string): MR_ControlLayer {
        return new MR_ControlLayer()
    }
}

/**
 * @class MR_ControlLayer
 */
export class MR_ControlLayer {
    constructor() {
        console.log('Mock MR_ControlLayer: constructor was called')
    }
}

/**
 * @class MR_SurfaceValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 */
export class MR_SurfaceValue {
    constructor() {
        console.log('Mock MR_SurfaceValue: constructor was called')
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {number} value
     */
    setProcessValue(activeDevice: MR_ActiveDevice, value: number): void {}

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @returns {number}
     */
    getProcessValue(activeDevice: MR_ActiveDevice): number {
        return -1
    }
}

/**
 * @class MR_SurfaceElementValue
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
export class MR_SurfaceElementValue extends MR_SurfaceValue {
    mMidiBinding: MR_SurfaceValueMidiBinding
    mOnProcessValueChange: (activeDevice: MR_ActiveDevice, value: number, diff: number) => void
    mOnDisplayValueChange: (activeDevice: MR_ActiveDevice, value: string, units: string) => void
    mOnTitleChange: (activeDevice: MR_ActiveDevice, objectTitle: string, valueTitle: string) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mMidiBinding = new MR_SurfaceValueMidiBinding()
        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {number} */ value,
            /** @type {number} */ diff
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}
        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {string} */ objectTitle,
            /** @type {string} */ valueTitle
        ) {}
        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {number} value
     */
    setProcessValue(activeDevice: MR_ActiveDevice, value: number): void {}

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @returns {number}
     */
    getProcessValue(activeDevice: MR_ActiveDevice): number {
        return -1
    }
}

/**
 * @class MR_SurfaceCustomValueVariable
 * Represents a continuous value state of a [SurfaceElement](#surfaceelement).
 * @augments MR_SurfaceValue
 */
export class MR_SurfaceCustomValueVariable extends MR_SurfaceValue {
    mMidiBinding: MR_SurfaceValueMidiBinding
    mOnProcessValueChange: (activeDevice: MR_ActiveDevice, value: number, diff: number) => void
    mOnDisplayValueChange: (activeDevice: MR_ActiveDevice, value: string, units: string) => void
    mOnTitleChange: (activeDevice: MR_ActiveDevice, objectTitle: string, valueTitle: string) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mMidiBinding = new MR_SurfaceValueMidiBinding()
        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {number} */ value,
            /** @type {number} */ diff
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}
        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {string} */ objectTitle,
            /** @type {string} */ valueTitle
        ) {}
        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @param {number} value
     */
    setProcessValue(activeDevice: MR_ActiveDevice, value: number): void {}

    /**
     * @param {MR_ActiveDevice} activeDevice
     * @returns {number}
     */
    getProcessValue(activeDevice: MR_ActiveDevice): number {
        return -1
    }
}

/**
 * @class MR_SurfaceValueMidiBinding
 */
export class MR_SurfaceValueMidiBinding {
    constructor() {
        console.log('Mock MR_SurfaceValueMidiBinding: constructor was called')
    }

    /**
     * @param {MR_DeviceMidiInput} inputPort
     * @returns {MR_SurfaceValueMidiBinding}
     */
    setInputPort(inputPort: MR_DeviceMidiInput): MR_SurfaceValueMidiBinding {
        return this
    }

    /**
     * @param {MR_DeviceMidiOutput} outputPort
     * @returns {MR_SurfaceValueMidiBinding}
     */
    setOutputPort(outputPort: MR_DeviceMidiOutput): MR_SurfaceValueMidiBinding {
        return this
    }

    /**
     * @param {boolean} isConsuming
     * @returns {MR_SurfaceValueMidiBinding}
     */
    setIsConsuming(isConsuming: boolean): MR_SurfaceValueMidiBinding {
        return this
    }

    /**
     * @param {number} channelNumber
     * @param {number} pitch
     * @returns {MR_MidiBindingToNote}
     */
    bindToNote(channelNumber: number, pitch: number): MR_MidiBindingToNote {
        return new MR_MidiBindingToNote()
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
        return new MR_MidiBindingToControlChange()
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
        return new MR_MidiBindingToControlChange14Bit()
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
        return new MR_MidiBindingToControlChange14BitNRPN()
    }

    /**
     * @param {number} channelNumber
     * @returns {MR_MidiBindingToPitchBend}
     */
    bindToPitchBend(channelNumber: number): MR_MidiBindingToPitchBend {
        return new MR_MidiBindingToPitchBend()
    }

    /**
     * @param {number} channelNumber
     * @returns {MR_MidiBindingToChannelPressure}
     */
    bindToChannelPressure(channelNumber: number): MR_MidiBindingToChannelPressure {
        return new MR_MidiBindingToChannelPressure()
    }
}

/**
 * @class MR_MidiBindingValueRange7Bit
 */
export class MR_MidiBindingValueRange7Bit {
    constructor() {
        console.log('Mock MR_MidiBindingValueRange7Bit: constructor was called')
    }
}

/**
 * @class MR_MidiBindingValueRange14Bit
 */
export class MR_MidiBindingValueRange14Bit {
    constructor() {
        console.log('Mock MR_MidiBindingValueRange14Bit: constructor was called')
    }
}

/**
 * @class MR_MidiChannelBinding
 */
export class MR_MidiChannelBinding {
    constructor() {
        console.log('Mock MR_MidiChannelBinding: constructor was called')
    }
}

/**
 * @class MR_MidiBindingToNote
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToNote extends MR_MidiChannelBinding {
    constructor() {
        super()
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToNote}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToNote {
        return new MR_MidiBindingToNote()
    }
}

/**
 * @class MR_MidiBindingToControlChange
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToControlChange extends MR_MidiChannelBinding {
    constructor() {
        super()
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToControlChange}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToControlChange {
        return new MR_MidiBindingToControlChange()
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeAbsolute(): MR_MidiBindingToControlChange {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeRelativeSignedBit(): MR_MidiBindingToControlChange {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeRelativeBinaryOffset(): MR_MidiBindingToControlChange {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange}
     */
    setTypeRelativeTwosComplement(): MR_MidiBindingToControlChange {
        return this
    }
}

/**
 * @class MR_MidiBindingToControlChange14Bit
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToControlChange14Bit extends MR_MidiChannelBinding {
    constructor() {
        super()
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToControlChange14Bit {
        return new MR_MidiBindingToControlChange14Bit()
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeAbsolute(): MR_MidiBindingToControlChange14Bit {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeRelativeSignedBit(): MR_MidiBindingToControlChange14Bit {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeRelativeBinaryOffset(): MR_MidiBindingToControlChange14Bit {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange14Bit}
     */
    setTypeRelativeTwosComplement(): MR_MidiBindingToControlChange14Bit {
        return this
    }
}

/**
 * @class MR_MidiBindingToControlChange14BitNRPN
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToControlChange14BitNRPN extends MR_MidiChannelBinding {
    constructor() {
        super()
    }

    /**
     * @param {number} min
     * @param {number} max
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setValueRange(min: number, max: number): MR_MidiBindingToControlChange14BitNRPN {
        return new MR_MidiBindingToControlChange14BitNRPN()
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeAbsolute(): MR_MidiBindingToControlChange14BitNRPN {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeRelativeSignedBit(): MR_MidiBindingToControlChange14BitNRPN {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeRelativeBinaryOffset(): MR_MidiBindingToControlChange14BitNRPN {
        return this
    }

    /**
     * @returns {MR_MidiBindingToControlChange14BitNRPN}
     */
    setTypeRelativeTwosComplement(): MR_MidiBindingToControlChange14BitNRPN {
        return this
    }
}

/**
 * @class MR_MidiBindingToPitchBend
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToPitchBend extends MR_MidiChannelBinding {
    mValueRange: MR_MidiBindingValueRange14Bit

    constructor() {
        super()

        /**
         * @property
         */
        this.mValueRange = new MR_MidiBindingValueRange14Bit()
    }
}

/**
 * @class MR_MidiBindingToChannelPressure
 * @augments MR_MidiChannelBinding
 */
export class MR_MidiBindingToChannelPressure extends MR_MidiChannelBinding {
    mValueRange: MR_MidiBindingValueRange7Bit

    constructor() {
        super()

        /**
         * @property
         */
        this.mValueRange = new MR_MidiBindingValueRange7Bit()
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
    constructor() {
        console.log('Mock MR_Mapping: constructor was called')
    }
}

/**
 * @class MR_FactoryMapping
 * @augments MR_Mapping
 */
export class MR_FactoryMapping extends MR_Mapping {
    constructor() {
        super()
    }

    /**
     * @param {string} name
     * @returns {MR_FactoryMappingPage}
     */
    makePage(name: string): MR_FactoryMappingPage {
        return new MR_FactoryMappingPage()
    }
}

/**
 * @class MR_Page
 */
export class MR_Page {
    constructor() {
        console.log('Mock MR_Page: constructor was called')
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostValue} hostValue
     * @returns {MR_ValueBinding}
     */
    makeValueBinding(surfaceValue: MR_SurfaceValue, hostValue: MR_HostValue): MR_ValueBinding {
        return new MR_ValueBinding()
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
        return new MR_CommandBinding()
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostAction} hostAction
     * @returns {MR_ActionBinding}
     */
    makeActionBinding(surfaceValue: MR_SurfaceValue, hostAction: MR_HostAction): MR_ActionBinding {
        return new MR_ActionBinding()
    }

    /**
     * @param {string} name
     * @returns {MR_SubPageArea}
     */
    makeSubPageArea(name: string): MR_SubPageArea {
        return new MR_SubPageArea()
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {string} text
     * @returns {MR_Page}
     */
    setLabelFieldText(surfaceLabelField: MR_SurfaceLabelField, text: string): MR_Page {
        return null
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
        return null
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
        return null
    }
}

/**
 * @class MR_FactoryMappingPage
 * @augments MR_Page
 */
export class MR_FactoryMappingPage extends MR_Page {
    mHostAccess: MR_HostAccess
    mOnActivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void
    mOnDeactivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void
    mCustom: MR_HostObjectUndefined
    mAction: MR_MappingPageActions

    constructor() {
        super()

        /**
         * @property
         */
        this.mHostAccess = new MR_HostAccess()
        /**
         * @property
         */
        this.mOnActivate = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping
        ) {}
        /**
         * @property
         */
        this.mOnDeactivate = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping
        ) {}
        /**
         * @property
         */
        this.mCustom = new MR_HostObjectUndefined()
        /**
         * @property
         */
        this.mAction = new MR_MappingPageActions()
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostValue} hostValue
     * @returns {MR_ValueBinding}
     */
    makeValueBinding(surfaceValue: MR_SurfaceValue, hostValue: MR_HostValue): MR_ValueBinding {
        return new MR_ValueBinding()
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
        return new MR_CommandBinding()
    }

    /**
     * @param {MR_SurfaceValue} surfaceValue
     * @param {MR_HostAction} hostAction
     * @returns {MR_ActionBinding}
     */
    makeActionBinding(surfaceValue: MR_SurfaceValue, hostAction: MR_HostAction): MR_ActionBinding {
        return new MR_ActionBinding()
    }

    /**
     * @param {string} name
     * @returns {MR_SubPageArea}
     */
    makeSubPageArea(name: string): MR_SubPageArea {
        return new MR_SubPageArea()
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {string} text
     * @returns {MR_FactoryMappingPage}
     */
    setLabelFieldText(
        surfaceLabelField: MR_SurfaceLabelField,
        text: string
    ): MR_FactoryMappingPage {
        return new MR_FactoryMappingPage()
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {MR_HostObject} hostObject
     * @returns {MR_FactoryMappingPage}
     */
    setLabelFieldHostObject(
        surfaceLabelField: MR_SurfaceLabelField,
        hostObject: MR_HostObject
    ): MR_FactoryMappingPage {
        return new MR_FactoryMappingPage()
    }

    /**
     * @param {MR_SurfaceLabelField} surfaceLabelField
     * @param {MR_SubPageArea} subPageArea
     * @returns {MR_FactoryMappingPage}
     */
    setLabelFieldSubPageArea(
        surfaceLabelField: MR_SurfaceLabelField,
        subPageArea: MR_SubPageArea
    ): MR_FactoryMappingPage {
        return new MR_FactoryMappingPage()
    }
}

/**
 * @class MR_HostAccess
 * Provides objects and methods to bind the defined Surface to host functions.
 * @example
 * var hostSelectedTrackChannel = page.mHostAccess.mTrackSelection.mMixerChannel
 */
export class MR_HostAccess {
    mTransport: MR_HostTransport
    mMixConsole: MR_MixConsole
    mControlRoom: MR_HostControlRoom
    mTrackSelection: MR_TrackSelection
    mMouseCursor: MR_HostMouseCursor
    mFocusedQuickControls: MR_FocusedQuickControls

    constructor() {
        console.log('Mock MR_HostAccess: constructor was called')

        /**
         * @property
         */
        this.mTransport = new MR_HostTransport()
        /**
         * @property
         */
        this.mMixConsole = new MR_MixConsole()
        /**
         * @property
         */
        this.mControlRoom = new MR_HostControlRoom()
        /**
         * @property
         */
        this.mTrackSelection = new MR_TrackSelection()
        /**
         * @property
         */
        this.mMouseCursor = new MR_HostMouseCursor()
        /**
         * @property
         */
        this.mFocusedQuickControls = new MR_FocusedQuickControls()
    }
}

/**
 * @class MR_HostObject
 */
export class MR_HostObject {
    constructor() {
        console.log('Mock MR_HostObject: constructor was called')
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
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {string} name
     * @returns {MR_HostValueUndefined}
     */
    makeHostValueVariable(name: string): MR_HostValueUndefined {
        return new MR_HostValueUndefined()
    }
}

/**
 * @class MR_HostTransport
 * Access transport functions.
 * @augments MR_HostObject
 */
export class MR_HostTransport extends MR_HostObject {
    mValue: MR_TransportValues
    mTimeDisplay: MR_TransportTimeDisplay
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mValue = new MR_TransportValues()

        /**
         * @property
         */
        this.mTimeDisplay = new MR_TransportTimeDisplay()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
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
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_QuickControlValue}
     */
    getByIndex(index: number): MR_QuickControlValue {
        return new MR_QuickControlValue()
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 8
    }
}

/**
 * @class MR_FocusedQuickControls
 * @augments MR_HostObject
 */
export class MR_FocusedQuickControls extends MR_HostObject {
    mFocusLockedValue: MR_FocusedQuickControlsLockedStateValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mFocusLockedValue = new MR_FocusedQuickControlsLockedStateValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_QuickControlValue}
     */
    getByIndex(index: number): MR_QuickControlValue {
        return new MR_QuickControlValue()
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 8
    }
}

/**
 * @class MR_HostPluginParameterBankZone
 * @augments MR_HostObject
 */
export class MR_HostPluginParameterBankZone extends MR_HostObject {
    mAction: MR_HostPluginParameterBankZoneActions
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mAction = new MR_HostPluginParameterBankZoneActions()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @returns {MR_HostPluginParameterBankValue}
     */
    makeParameterValue(): MR_HostPluginParameterBankValue {
        return new MR_HostPluginParameterBankValue()
    }
}

/**
 * @class MR_HostStripEffectSlotFolder
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotFolder extends MR_HostObject {
    mGate: MR_HostStripEffectSlotGate
    mCompressor: MR_HostStripEffectSlotCompressor
    mLimiter: MR_HostStripEffectSlotLimiter
    mSaturator: MR_HostStripEffectSlotSaturator
    mTools: MR_HostStripEffectSlotTools
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mGate = new MR_HostStripEffectSlotGate()
        /**
         * @property
         */
        this.mCompressor = new MR_HostStripEffectSlotCompressor()
        /**
         * @property
         */
        this.mLimiter = new MR_HostStripEffectSlotLimiter()
        /**
         * @property
         */
        this.mSaturator = new MR_HostStripEffectSlotSaturator()
        /**
         * @property
         */
        this.mTools = new MR_HostStripEffectSlotTools()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
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
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {number} index
     * @returns {MR_SendSlot}
     */
    getByIndex(index: number): MR_SendSlot {
        return new MR_SendSlot()
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 4
    }
}

/**
 * @class MR_ControlRoomCueSendSlotFolder
 * @augments MR_HostObject
 */
export class MR_ControlRoomCueSendSlotFolder extends MR_HostObject {
    mBypass: MR_ControlRoomCueSendFolderBypassValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mBypass = new MR_ControlRoomCueSendFolderBypassValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {number} index
     * @returns {MR_ControlRoomCueSendSlot}
     */
    getByIndex(index: number): MR_ControlRoomCueSendSlot {
        return new MR_ControlRoomCueSendSlot()
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return 4
    }
}

/**
 * @class MR_MixerBankChannel
 * @augments MR_HostObject
 */
export class MR_MixerBankChannel extends MR_HostObject {
    mValue: MR_MixerChannelValues
    mPreFilter: MR_PreFilter
    mChannelEQ: MR_ChannelEQ
    mInsertAndStripEffects: MR_HostInsertAndStripEffects
    mSends: MR_SendSlotFolder
    mCueSends: MR_ControlRoomCueSendSlotFolder
    mQuickControls: MR_QuickControls
    mInstrumentPluginSlot: MR_HostInstrumentPluginSlot
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mValue = new MR_MixerChannelValues()
        /**
         * @property
         */
        this.mPreFilter = new MR_PreFilter()
        /**
         * @property
         */
        this.mChannelEQ = new MR_ChannelEQ()
        /**
         * @property
         */
        this.mInsertAndStripEffects = new MR_HostInsertAndStripEffects()
        /**
         * @property
         */
        this.mSends = new MR_SendSlotFolder()
        /**
         * @property
         */
        this.mCueSends = new MR_ControlRoomCueSendSlotFolder()
        /**
         * @property
         */
        this.mQuickControls = new MR_QuickControls()
        /**
         * @property
         */
        this.mInstrumentPluginSlot = new MR_HostInstrumentPluginSlot()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_SelectedTrackChannel
 * @augments MR_HostObject
 */
export class MR_SelectedTrackChannel extends MR_HostObject {
    mValue: MR_MixerChannelValues
    mPreFilter: MR_PreFilter
    mChannelEQ: MR_ChannelEQ
    mInsertAndStripEffects: MR_HostInsertAndStripEffects
    mSends: MR_SendSlotFolder
    mCueSends: MR_ControlRoomCueSendSlotFolder
    mQuickControls: MR_QuickControls
    mInstrumentPluginSlot: MR_HostInstrumentPluginSlot
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mValue = new MR_MixerChannelValues()
        /**
         * @property
         */
        this.mPreFilter = new MR_PreFilter()
        /**
         * @property
         */
        this.mChannelEQ = new MR_ChannelEQ()
        /**
         * @property
         */
        this.mInsertAndStripEffects = new MR_HostInsertAndStripEffects()
        /**
         * @property
         */
        this.mSends = new MR_SendSlotFolder()
        /**
         * @property
         */
        this.mCueSends = new MR_ControlRoomCueSendSlotFolder()
        /**
         * @property
         */
        this.mQuickControls = new MR_QuickControls()
        /**
         * @property
         */
        this.mInstrumentPluginSlot = new MR_HostInstrumentPluginSlot()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostMouseCursor
 * @augments MR_HostObject
 */
export class MR_HostMouseCursor extends MR_HostObject {
    mValueUnderMouse: MR_HostValueAtMouseCursor
    mValueLocked: MR_HostValueAtMouseCursorLockedState
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mValueUnderMouse = new MR_HostValueAtMouseCursor()
        /**
         * @property
         */
        this.mValueLocked = new MR_HostValueAtMouseCursorLockedState()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostControlRoomChannelMain
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelMain extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue
    mMuteValue: MR_HostControlRoomValue
    mBypassInserts: MR_HostControlRoomValue
    mSelectSourceMonitorMixValue: MR_HostControlRoomValue
    mSelectSourceExternalInputValue: MR_HostControlRoomValue
    mListenEnabledValue: MR_HostControlRoomValue
    mListenLevelValue: MR_HostControlRoomValue
    mDimActiveValue: MR_HostControlRoomValue
    mMetronomeClickActiveValue: MR_HostControlRoomValue
    mMetronomeClickLevelValue: MR_HostControlRoomValue
    mMetronomeClickPanValue: MR_HostControlRoomValue
    mReferenceLevelEnabledValue: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mListenEnabledValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mListenLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mDimActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickPanValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mReferenceLevelEnabledValue = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
     */
    getSelectSourceCueValueByIndex(index: number): MR_HostControlRoomSelectSourceCueValueByIndex {
        return new MR_HostControlRoomSelectSourceCueValueByIndex()
    }
}

/**
 * @class MR_HostControlRoomChannelPhonesByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelPhonesByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue
    mMuteValue: MR_HostControlRoomValue
    mBypassInserts: MR_HostControlRoomValue
    mSelectSourceMonitorMixValue: MR_HostControlRoomValue
    mSelectSourceExternalInputValue: MR_HostControlRoomValue
    mListenEnabledValue: MR_HostControlRoomValue
    mListenLevelValue: MR_HostControlRoomValue
    mDimActiveValue: MR_HostControlRoomValue
    mMetronomeClickActiveValue: MR_HostControlRoomValue
    mMetronomeClickLevelValue: MR_HostControlRoomValue
    mMetronomeClickPanValue: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mListenEnabledValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mListenLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mDimActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickPanValue = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectSourceCueValueByIndex}
     */
    getSelectSourceCueValueByIndex(index: number): MR_HostControlRoomSelectSourceCueValueByIndex {
        return new MR_HostControlRoomSelectSourceCueValueByIndex()
    }
}

/**
 * @class MR_HostControlRoomChannelCueByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelCueByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue
    mMuteValue: MR_HostControlRoomValue
    mBypassInserts: MR_HostControlRoomValue
    mSelectSourceMonitorMixValue: MR_HostControlRoomValue
    mSelectSourceExternalInputValue: MR_HostControlRoomValue
    mSelectSourceAuxValue: MR_HostControlRoomValue
    mTalkbackEnabledValue: MR_HostControlRoomValue
    mTalkbackLevelValue: MR_HostControlRoomValue
    mMetronomeClickActiveValue: MR_HostControlRoomValue
    mMetronomeClickLevelValue: MR_HostControlRoomValue
    mMetronomeClickPanValue: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceMonitorMixValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceExternalInputValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectSourceAuxValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mTalkbackEnabledValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mTalkbackLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMetronomeClickPanValue = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostControlRoomChannelExternalInputByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelExternalInputByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue
    mMuteValue: MR_HostControlRoomValue
    mBypassInserts: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostControlRoomChannelTalkbackByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelTalkbackByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue
    mMuteValue: MR_HostControlRoomValue
    mBypassInserts: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostControlRoomChannelMonitorByIndex
 * @augments MR_HostObject
 */
export class MR_HostControlRoomChannelMonitorByIndex extends MR_HostObject {
    mLevelValue: MR_HostControlRoomValue
    mMuteValue: MR_HostControlRoomValue
    mBypassInserts: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mMuteValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mBypassInserts = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostControlRoom
 * @augments MR_HostObject
 */
export class MR_HostControlRoom extends MR_HostObject {
    mMainChannel: MR_HostControlRoomChannelMain
    mAlertDimActiveValue: MR_HostControlRoomValue
    mTalkbackActiveValue: MR_HostControlRoomValue
    mTalkbackDimLevelValue: MR_HostControlRoomValue
    mListenDimLevelValue: MR_HostControlRoomValue
    mReferenceLevelValue: MR_HostControlRoomValue
    mSelectNextDownmixPresetValue: MR_HostControlRoomValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mMainChannel = new MR_HostControlRoomChannelMain()
        /**
         * @property
         */
        this.mAlertDimActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mTalkbackActiveValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mTalkbackDimLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mListenDimLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mReferenceLevelValue = new MR_HostControlRoomValue()
        /**
         * @property
         */
        this.mSelectNextDownmixPresetValue = new MR_HostControlRoomValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelCueByIndex}
     */
    getCueChannelByIndex(index: number): MR_HostControlRoomChannelCueByIndex {
        return new MR_HostControlRoomChannelCueByIndex()
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelPhonesByIndex}
     */
    getPhonesChannelByIndex(index: number): MR_HostControlRoomChannelPhonesByIndex {
        return new MR_HostControlRoomChannelPhonesByIndex()
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelExternalInputByIndex}
     */
    getExternalInputChannelByIndex(index: number): MR_HostControlRoomChannelExternalInputByIndex {
        return new MR_HostControlRoomChannelExternalInputByIndex()
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelTalkbackByIndex}
     */
    getTalkbackChannelByIndex(index: number): MR_HostControlRoomChannelTalkbackByIndex {
        return new MR_HostControlRoomChannelTalkbackByIndex()
    }

    /**
     * @param {number} index
     * @returns {MR_HostControlRoomChannelMonitorByIndex}
     */
    getMonitorChannelByIndex(index: number): MR_HostControlRoomChannelMonitorByIndex {
        return new MR_HostControlRoomChannelMonitorByIndex()
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectSourceExternalInputValueByIndex}
     */
    getSelectSourceExternalInputValueByIndex(
        index: number
    ): MR_HostControlRoomSelectSourceExternalInputValueByIndex {
        return new MR_HostControlRoomSelectSourceExternalInputValueByIndex()
    }

    /**
     * Represents a continuous value state of a [HostObject](#hostobject).
     * @param {number} index
     * @returns {MR_HostControlRoomSelectTargetMonitorValueByIndex}
     */
    getSelectTargetMonitorValueByIndex(
        index: number
    ): MR_HostControlRoomSelectTargetMonitorValueByIndex {
        return new MR_HostControlRoomSelectTargetMonitorValueByIndex()
    }

    /**
     * @returns {number}
     */
    getMaxTalkbackChannels(): number {
        return 2
    }

    /**
     * @returns {number}
     */
    getMaxExternalInputChannels(): number {
        return 8
    }

    /**
     * @returns {number}
     */
    getMaxCueChannels(): number {
        return 4
    }

    /**
     * @returns {number}
     */
    getMaxPhonesChannels(): number {
        return 2
    }

    /**
     * @returns {number}
     */
    getMaxMonitorChannels(): number {
        return 4
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
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {string} name
     * @returns {MR_MixerBankZone}
     */
    makeMixerBankZone(name = ''): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }
}

/**
 * @class MR_TransportValues
 * @augments MR_HostObject
 */
export class MR_TransportValues extends MR_HostObject {
    mStart: MR_StartValue
    mStop: MR_StopValue
    mRecord: MR_RecordValue
    mRewind: MR_RewindValue
    mForward: MR_ForwardValue
    mCycleActive: MR_CycleActiveValue
    mMetronomeActive: MR_MetronomeActiveValue
    mMetronomeClickLevel: MR_MetronomeClickLevel
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mStart = new MR_StartValue()
        /**
         * @property
         */
        this.mStop = new MR_StopValue()
        /**
         * @property
         */
        this.mRecord = new MR_RecordValue()
        /**
         * @property
         */
        this.mRewind = new MR_RewindValue()
        /**
         * @property
         */
        this.mForward = new MR_ForwardValue()
        /**
         * @property
         */
        this.mCycleActive = new MR_CycleActiveValue()
        /**
         * @property
         */
        this.mMetronomeActive = new MR_MetronomeActiveValue()
        /**
         * @property
         */
        this.mMetronomeClickLevel = new MR_MetronomeClickLevel()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_PreFilter
 * @augments MR_HostObject
 */
export class MR_PreFilter extends MR_HostObject {
    mBypass: MR_PreFilterBypassValue
    mGain: MR_PreFilterGainValue
    mPhaseSwitch: MR_PreFilterPhaseSwitchValue
    mHighCutOn: MR_PreFilterHighCutOnValue
    mHighCutFreq: MR_PreFilterHighCutFrequencyValue
    mHighCutSlope: MR_PreFilterHighCutSlopeValue
    mLowCutOn: MR_PreFilterLowCutOnValue
    mLowCutFreq: MR_PreFilterLowCutFrequencyValue
    mLowCutSlope: MR_PreFilterLowCutSlopeValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mBypass = new MR_PreFilterBypassValue()
        /**
         * @property
         */
        this.mGain = new MR_PreFilterGainValue()
        /**
         * @property
         */
        this.mPhaseSwitch = new MR_PreFilterPhaseSwitchValue()
        /**
         * @property
         */
        this.mHighCutOn = new MR_PreFilterHighCutOnValue()
        /**
         * @property
         */
        this.mHighCutFreq = new MR_PreFilterHighCutFrequencyValue()
        /**
         * @property
         */
        this.mHighCutSlope = new MR_PreFilterHighCutSlopeValue()
        /**
         * @property
         */
        this.mLowCutOn = new MR_PreFilterLowCutOnValue()
        /**
         * @property
         */
        this.mLowCutFreq = new MR_PreFilterLowCutFrequencyValue()
        /**
         * @property
         */
        this.mLowCutSlope = new MR_PreFilterLowCutSlopeValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_ChannelEQBand
 * @augments MR_HostObject
 */
export class MR_ChannelEQBand extends MR_HostObject {
    mGain: MR_EQBandGainValue
    mFreq: MR_EQBandFrequencyValue
    mQ: MR_EQBandQualityValue
    mOn: MR_EQBandOnValue
    mFilterType: MR_EQBandFilterTypeValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mGain = new MR_EQBandGainValue()
        /**
         * @property
         */
        this.mFreq = new MR_EQBandFrequencyValue()
        /**
         * @property
         */
        this.mQ = new MR_EQBandQualityValue()
        /**
         * @property
         */
        this.mOn = new MR_EQBandOnValue()
        /**
         * @property
         */
        this.mFilterType = new MR_EQBandFilterTypeValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_ChannelEQ
 * @augments MR_HostObject
 */
export class MR_ChannelEQ extends MR_HostObject {
    mBand1: MR_ChannelEQBand
    mBand2: MR_ChannelEQBand
    mBand3: MR_ChannelEQBand
    mBand4: MR_ChannelEQBand
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mBand1 = new MR_ChannelEQBand()
        /**
         * @property
         */
        this.mBand2 = new MR_ChannelEQBand()
        /**
         * @property
         */
        this.mBand3 = new MR_ChannelEQBand()
        /**
         * @property
         */
        this.mBand4 = new MR_ChannelEQBand()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostInstrumentPluginSlot
 * @augments MR_HostObject
 */
export class MR_HostInstrumentPluginSlot extends MR_HostObject {
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostStripEffectSlotGate
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotGate extends MR_HostObject {
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostStripEffectSlotCompressor
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotCompressor extends MR_HostObject {
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostStripEffectSlotLimiter
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotLimiter extends MR_HostObject {
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostStripEffectSlotSaturator
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotSaturator extends MR_HostObject {
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostStripEffectSlotTools
 * @augments MR_HostObject
 */
export class MR_HostStripEffectSlotTools extends MR_HostObject {
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_HostInsertEffectViewer
 * @augments MR_HostObject
 */
export class MR_HostInsertEffectViewer extends MR_HostObject {
    mAction: MR_HostInsertEffectViewerActions
    mOn: MR_PluginOnValue
    mBypass: MR_PluginBypassValue
    mEdit: MR_PluginEditValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mParameterBankZone: MR_HostPluginParameterBankZone
    mOnChangePluginIdentity: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        pluginName: string,
        pluginVendor: string,
        pluginVersion: string,
        formatVersion: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_PluginOnValue()
        /**
         * @property
         */
        this.mBypass = new MR_PluginBypassValue()
        /**
         * @property
         */
        this.mEdit = new MR_PluginEditValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mParameterBankZone = new MR_HostPluginParameterBankZone()
        /**
         * @property
         */
        this.mOnChangePluginIdentity = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ pluginName,
            /** @type {string} */ pluginVendor,
            /** @type {string} */ pluginVersion,
            /** @type {string} */ formatVersion
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @returns {MR_HostInsertEffectViewer}
     */
    includeEmptySlotsOnly(): MR_HostInsertEffectViewer {
        return new MR_HostInsertEffectViewer()
    }

    /**
     * @returns {MR_HostInsertEffectViewer}
     */
    excludeEmptySlots(): MR_HostInsertEffectViewer {
        return new MR_HostInsertEffectViewer()
    }

    /**
     * @returns {MR_HostInsertEffectViewer}
     */
    followPluginWindowInFocus(): MR_HostInsertEffectViewer {
        return new MR_HostInsertEffectViewer()
    }
}

/**
 * @class MR_HostInsertAndStripEffects
 * @augments MR_HostObject
 */
export class MR_HostInsertAndStripEffects extends MR_HostObject {
    mStripEffects: MR_HostStripEffectSlotFolder
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mStripEffects = new MR_HostStripEffectSlotFolder()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {string} name
     * @returns {MR_HostInsertEffectViewer}
     */
    makeInsertEffectViewer(name: string): MR_HostInsertEffectViewer {
        return new MR_HostInsertEffectViewer()
    }
}

/**
 * @class MR_SendSlot
 * @augments MR_HostObject
 */
export class MR_SendSlot extends MR_HostObject {
    mOn: MR_SendOn
    mPrePost: MR_SendPrePost
    mLevel: MR_SendLevel
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_SendOn()
        /**
         * @property
         */
        this.mPrePost = new MR_SendPrePost()
        /**
         * @property
         */
        this.mLevel = new MR_SendLevel()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_ControlRoomCueSendSlot
 * @augments MR_HostObject
 */
export class MR_ControlRoomCueSendSlot extends MR_HostObject {
    mOn: MR_ControlRoomCueSendOnValue
    mPrePost: MR_ControlRoomCueSendPrePostValue
    mLevel: MR_ControlRoomCueSendLevelValue
    mPan: MR_ControlRoomCueSendPanValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOn = new MR_SendOn()
        /**
         * @property
         */
        this.mPrePost = new MR_SendPrePost()
        /**
         * @property
         */
        this.mLevel = new MR_SendLevel()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_MixerChannelValues
 * @augments MR_HostObject
 */
export class MR_MixerChannelValues extends MR_HostObject {
    mVolume: MR_VolumeValue
    mPan: MR_PanValue
    mMute: MR_MuteValue
    mSolo: MR_SoloValue
    mMonitorEnable: MR_MonitorEnableValue
    mRecordEnable: MR_RecordEnableValue
    mEditorOpen: MR_EditorOpenValue
    mInstrumentOpen: MR_InstrumentOpenValue
    mSelected: MR_SelectedValue
    mAutomationRead: MR_AutomationReadValue
    mAutomationWrite: MR_AutomationWriteValue
    mVUMeter: MR_VUMeterValue
    mVUMeterMax: MR_VUMeterMaxValue
    mVUMeterClip: MR_VUMeterClipValue
    mVUMeterPeak: MR_VUMeterPeakValue
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mVolume = new MR_VolumeValue()
        /**
         * @property
         */
        this.mPan = new MR_PanValue()
        /**
         * @property
         */
        this.mMute = new MR_MuteValue()
        /**
         * @property
         */
        this.mSolo = new MR_SoloValue()
        /**
         * @property
         */
        this.mMonitorEnable = new MR_MonitorEnableValue()
        /**
         * @property
         */
        this.mRecordEnable = new MR_RecordEnableValue()
        /**
         * @property
         */
        this.mEditorOpen = new MR_EditorOpenValue()
        /**
         * @property
         */
        this.mInstrumentOpen = new MR_InstrumentOpenValue()
        /**
         * @property
         */
        this.mSelected = new MR_SelectedValue()
        /**
         * @property
         */
        this.mAutomationRead = new MR_AutomationReadValue()
        /**
         * @property
         */
        this.mAutomationWrite = new MR_AutomationWriteValue()
        /**
         * @property
         */
        this.mVUMeter = new MR_VUMeterValue()
        /**
         * @property
         */
        this.mVUMeterMax = new MR_VUMeterMaxValue()
        /**
         * @property
         */
        this.mVUMeterClip = new MR_VUMeterClipValue()
        /**
         * @property
         */
        this.mVUMeterPeak = new MR_VUMeterPeakValue()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }
}

/**
 * @class MR_MixerBankZone
 * @augments MR_HostObject
 */
export class MR_MixerBankZone extends MR_HostObject {
    mAction: MR_MixerBankZoneActions
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mAction = new MR_MixerBankZoneActions()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeAudioChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeInstrumentChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeSamplerChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeMIDIChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeFXChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeGroupChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeVCAChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeInputChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeOutputChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeWindowZoneLeftChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    includeWindowZoneRightChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeAudioChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeInstrumentChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeSamplerChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeMIDIChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeFXChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeGroupChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeVCAChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeInputChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeOutputChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeWindowZoneLeftChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @returns {MR_MixerBankZone}
     */
    excludeWindowZoneRightChannels(): MR_MixerBankZone {
        return new MR_MixerBankZone()
    }

    /**
     * @param {boolean} followVisibility
     * @returns {MR_MixerBankZone}
     */
    setFollowVisibility(followVisibility: boolean): MR_MixerBankZone {
        return this
    }

    /**
     * @returns {MR_MixerBankChannel}
     */
    makeMixerBankChannel(): MR_MixerBankChannel {
        return new MR_MixerBankChannel()
    }
}

/**
 * @class MR_TrackSelection
 * @augments MR_HostObject
 */
export class MR_TrackSelection extends MR_HostObject {
    mMixerChannel: MR_SelectedTrackChannel
    mAction: MR_TrackSelectionActions
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        title: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mMixerChannel = new MR_SelectedTrackChannel()
        /**
         * @property
         */
        this.mAction = new MR_TrackSelectionActions()

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
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
    constructor() {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
    ) => void
    mOnDisplayValueChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        value: string,
        units: string
    ) => void
    mOnTitleChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        objectTitle: string,
        valueTitle: string
    ) => void
    mOnColorChange: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        r: number,
        g: number,
        b: number,
        a: number,
        isActive: boolean
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnProcessValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ value
        ) {}
        /**
         * @property
         */
        this.mOnDisplayValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ value,
            /** @type {string} */ units
        ) {}

        /**
         * @property
         */
        this.mOnTitleChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ title
        ) {}

        /**
         * @property
         */
        this.mOnColorChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ r,
            /** @type {number} */ g,
            /** @type {number} */ b,
            /** @type {number} */ a,
            /** @type {boolean} */ isActive
        ) {}
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    increment(activeMapping: MR_ActiveMapping): void {}

    /**
     * @param {MR_ActiveMapping} activeMapping
     */
    decrement(activeMapping: MR_ActiveMapping): void {}
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
        console.log('Mock MR_TransportTimeDisplayDetails: constructor was called')
    }
}

/**
 * @class MR_TransportTimeDisplayDetailsPrimary
 * @augments MR_TransportTimeDisplayDetails
 */
export class MR_TransportTimeDisplayDetailsPrimary extends MR_TransportTimeDisplayDetails {
    mCycleLocatorLeft: MR_TransportTime
    mCycleLocatorRight: MR_TransportTime
    mTransportLocator: MR_TransportTime

    constructor() {
        super()

        /**
         * @property
         */
        this.mCycleLocatorLeft = new MR_TransportTime()
        /**
         * @property
         */
        this.mCycleLocatorRight = new MR_TransportTime()
        /**
         * @property
         */
        this.mTransportLocator = new MR_TransportTime()
    }
}

/**
 * @class MR_TransportTimeDisplayDetailsSecondary
 * @augments MR_TransportTimeDisplayDetails
 */
export class MR_TransportTimeDisplayDetailsSecondary extends MR_TransportTimeDisplayDetails {
    mCycleLocatorLeft: MR_TransportTime
    mCycleLocatorRight: MR_TransportTime
    mTransportLocator: MR_TransportTime

    constructor() {
        super()

        /**
         * @property
         */
        this.mCycleLocatorLeft = new MR_TransportTime()
        /**
         * @property
         */
        this.mCycleLocatorRight = new MR_TransportTime()
        /**
         * @property
         */
        this.mTransportLocator = new MR_TransportTime()
    }
}

/**
 * @class MR_TransportTimeDisplay
 */
export class MR_TransportTimeDisplay {
    mPrimary: MR_TransportTimeDisplayDetailsPrimary
    mSecondary: MR_TransportTimeDisplayDetailsSecondary
    mOnChangeTempoBPM: (
        activeDevice: MR_ActiveDevice,
        activeMapping: MR_ActiveMapping,
        tempoBPM: number
    ) => void

    constructor() {
        /**
         * @property
         */
        this.mPrimary = new MR_TransportTimeDisplayDetailsPrimary()
        /**
         * @property
         */
        this.mSecondary = new MR_TransportTimeDisplayDetailsSecondary()
        /**
         * @property
         */
        this.mOnChangeTempoBPM = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ tempoBPM
        ) {}

        console.log('Mock MR_TransportTimeDisplay: constructor was called')
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     * @param {number} tempoBPM
     */
    setTempoBPM(activeMapping: MR_ActiveMapping, tempoBPM: number): void {}
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
    ) => void

    constructor() {
        /**
         * @property
         */
        this.mOnChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {string} */ time,
            /** @type {string} */ format
        ) {}

        console.log('Mock MR_TransportTime: constructor was called')
    }

    /**
     * @param {MR_ActiveMapping} activeMapping
     * @param {string} timeString
     */
    setTime(activeMapping: MR_ActiveMapping, timeString: string): void {}
}

/**
 * @class MR_HostPluginParameterBankZoneActions
 */
export class MR_HostPluginParameterBankZoneActions {
    mPrevBank: MR_HostPluginParameterBankZoneAction
    mNextBank: MR_HostPluginParameterBankZoneAction
    mResetBank: MR_HostPluginParameterBankZoneAction

    constructor() {
        /**
         * @property
         */
        this.mPrevBank = new MR_HostPluginParameterBankZoneAction()
        /**
         * @property
         */
        this.mNextBank = new MR_HostPluginParameterBankZoneAction()
        /**
         * @property
         */
        this.mResetBank = new MR_HostPluginParameterBankZoneAction()

        console.log('Mock MR_HostPluginParameterBankZoneActions: constructor was called')
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
    constructor() {
        console.log('Mock MR_HostInsertEffectFilter: constructor was called')
    }
}

/**
 * @class MR_HostInsertEffectFilterIncludeEmptySlotsOnly
 * @augments MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilterIncludeEmptySlotsOnly extends MR_HostInsertEffectFilter {
    constructor() {
        super()
    }
}

/**
 * @class MR_HostInsertEffectFilterExcludeEmptySlots
 * @augments MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilterExcludeEmptySlots extends MR_HostInsertEffectFilter {
    constructor() {
        super()
    }
}

/**
 * @class MR_HostInsertEffectFilterFollowPluginWindowInFocus
 * @augments MR_HostInsertEffectFilter
 */
export class MR_HostInsertEffectFilterFollowPluginWindowInFocus extends MR_HostInsertEffectFilter {
    constructor() {
        super()
    }
}

/**
 * @class MR_HostInsertEffectViewerActions
 */
export class MR_HostInsertEffectViewerActions {
    mPrev: MR_HostInsertEffectViewerAction
    mNext: MR_HostInsertEffectViewerAction
    mReset: MR_HostInsertEffectViewerAction

    constructor() {
        /**
         * @property
         */
        this.mPrev = new MR_HostInsertEffectViewerAction()
        /**
         * @property
         */
        this.mNext = new MR_HostInsertEffectViewerAction()
        /**
         * @property
         */
        this.mReset = new MR_HostInsertEffectViewerAction()

        console.log('Mock MR_HostInsertEffectViewerActions: constructor was called')
    }
}

/**
 * @class MR_MixerBankZoneActions
 */
export class MR_MixerBankZoneActions {
    mPrevBank: MR_MixerBankZoneAction
    mNextBank: MR_MixerBankZoneAction
    mShiftLeft: MR_MixerBankZoneAction
    mShiftRight: MR_MixerBankZoneAction
    mResetBank: MR_MixerBankZoneAction

    constructor() {
        /**
         * @property
         */
        this.mPrevBank = new MR_MixerBankZoneAction()
        /**
         * @property
         */
        this.mNextBank = new MR_MixerBankZoneAction()
        /**
         * @property
         */
        this.mShiftLeft = new MR_MixerBankZoneAction()
        /**
         * @property
         */
        this.mShiftRight = new MR_MixerBankZoneAction()
        /**
         * @property
         */
        this.mResetBank = new MR_MixerBankZoneAction()

        console.log('Mock MR_MixerBankZoneActions: constructor was called')
    }
}

/**
 * @class MR_TrackSelectionActions
 */
export class MR_TrackSelectionActions {
    mPrevTrack: MR_TrackSelectionAction
    mNextTrack: MR_TrackSelectionAction

    constructor() {
        /**
         * @property
         */
        this.mPrevTrack = new MR_TrackSelectionAction()
        /**
         * @property
         */
        this.mNextTrack = new MR_TrackSelectionAction()

        console.log('Mock MR_TrackSelectionActions: constructor was called')
    }
}

/**
 * @class MR_HostBinding
 */
export class MR_HostBinding {
    constructor() {
        console.log('Mock MR_HostBinding: constructor was called')
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_HostBinding}
     */
    setSubPage(subPage: MR_SubPage): MR_HostBinding {
        return this
    }

    /**
     * @param {number} filterValue
     * @returns {MR_HostBinding}
     */
    filterByValue(filterValue: number): MR_HostBinding {
        return null
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_HostBinding}
     */
    filterByValueRange(from: number, to: number): MR_HostBinding {
        return null
    }

    /**
     * @param {number} mapValue
     * @returns {MR_HostBinding}
     */
    mapToValue(mapValue: number): MR_HostBinding {
        return null
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_HostBinding}
     */
    mapToValueRange(from: number, to: number): MR_HostBinding {
        return null
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
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ currValue,
            /** @type {number} */ valueDiff
        ) {}
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setTypeDefault(): MR_ValueBinding {
        return this
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setTypeToggle(): MR_ValueBinding {
        return this
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setValueTakeOverModeJump(): MR_ValueBinding {
        return this
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setValueTakeOverModePickup(): MR_ValueBinding {
        return this
    }

    /**
     * @returns {MR_ValueBinding}
     */
    setValueTakeOverModeScaled(): MR_ValueBinding {
        return this
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_ValueBinding}
     */
    setSubPage(subPage: MR_SubPage): MR_ValueBinding {
        return this
    }

    /**
     * @param {number} filterValue
     * @returns {MR_ValueBinding}
     */
    filterByValue(filterValue: number): MR_ValueBinding {
        return new MR_ValueBinding()
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ValueBinding}
     */
    filterByValueRange(from: number, to: number): MR_ValueBinding {
        return new MR_ValueBinding()
    }

    /**
     * @param {number} mapValue
     * @returns {MR_ValueBinding}
     */
    mapToValue(mapValue: number): MR_ValueBinding {
        return new MR_ValueBinding()
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ValueBinding}
     */
    mapToValueRange(from: number, to: number): MR_ValueBinding {
        return new MR_ValueBinding()
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
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ currValue,
            /** @type {number} */ valueDiff
        ) {}
    }

    /**
     * @param {number} delaySeconds
     * @param {number} rateHz
     * @returns {MR_Repeating}
     */
    makeRepeating(delaySeconds: number, rateHz: number): MR_Repeating {
        return new MR_Repeating()
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_CommandBinding}
     */
    setSubPage(subPage: MR_SubPage): MR_CommandBinding {
        return this
    }

    /**
     * @param {number} filterValue
     * @returns {MR_CommandBinding}
     */
    filterByValue(filterValue: number): MR_CommandBinding {
        return new MR_CommandBinding()
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_CommandBinding}
     */
    filterByValueRange(from: number, to: number): MR_CommandBinding {
        return new MR_CommandBinding()
    }

    /**
     * @param {number} mapValue
     * @returns {MR_CommandBinding}
     */
    mapToValue(mapValue: number): MR_CommandBinding {
        return new MR_CommandBinding()
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_CommandBinding}
     */
    mapToValueRange(from: number, to: number): MR_CommandBinding {
        return new MR_CommandBinding()
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
    ) => void

    constructor() {
        super()

        /**
         * @property
         */
        this.mOnValueChange = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping,
            /** @type {number} */ currValue,
            /** @type {number} */ valueDiff
        ) {}
    }

    /**
     * @param {number} delaySeconds
     * @param {number} rateHz
     * @returns {MR_Repeating}
     */
    makeRepeating(delaySeconds: number, rateHz: number): MR_Repeating {
        return new MR_Repeating()
    }

    /**
     * @param {MR_SubPage} subPage
     * @returns {MR_ActionBinding}
     */
    setSubPage(subPage: MR_SubPage): MR_ActionBinding {
        return this
    }

    /**
     * @param {number} filterValue
     * @returns {MR_ActionBinding}
     */
    filterByValue(filterValue: number): MR_ActionBinding {
        return new MR_ActionBinding()
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ActionBinding}
     */
    filterByValueRange(from: number, to: number): MR_ActionBinding {
        return new MR_ActionBinding()
    }

    /**
     * @param {number} mapValue
     * @returns {MR_ActionBinding}
     */
    mapToValue(mapValue: number): MR_ActionBinding {
        return new MR_ActionBinding()
    }

    /**
     * @param {number} from
     * @param {number} to
     * @returns {MR_ActionBinding}
     */
    mapToValueRange(from: number, to: number): MR_ActionBinding {
        return new MR_ActionBinding()
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
    mAction: MR_SubPageAreaActions

    constructor() {
        /**
         * @property
         */
        this.mAction = new MR_SubPageAreaActions()

        console.log('Mock MR_SubPageArea: constructor was called')
    }

    /**
     * @param {string} name
     * @returns {MR_SubPage}
     */
    makeSubPage(name: string): MR_SubPage {
        return new MR_SubPage()
    }
}

/**
 * @class MR_SubPageAreaActions
 */
export class MR_SubPageAreaActions {
    mPrev: MR_SubPageAreaAction
    mNext: MR_SubPageAreaAction
    mReset: MR_SubPageAreaAction

    constructor() {
        /**
         * @property
         */
        this.mPrev = new MR_SubPageAreaAction()
        /**
         * @property
         */
        this.mNext = new MR_SubPageAreaAction()
        /**
         * @property
         */
        this.mReset = new MR_SubPageAreaAction()

        console.log('Mock MR_SubPageAreaActions: constructor was called')
    }
}

/**
 * @class MR_SubPage
 */
export class MR_SubPage {
    mAction: MR_SubPageActions
    mOnActivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void
    mOnDeactivate: (activeDevice: MR_ActiveDevice, activeMapping: MR_ActiveMapping) => void

    constructor() {
        /**
         * @property
         */
        this.mAction = new MR_SubPageActions()
        /**
         * @property
         */
        this.mOnActivate = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping
        ) {}
        /**
         * @property
         */
        this.mOnDeactivate = function (
            /** @type {MR_ActiveDevice} */ activeDevice,
            /** @type {MR_ActiveMapping} */ activeMapping
        ) {}

        console.log('Mock MR_SubPage: constructor was called')
    }
}

/**
 * @class MR_SubPageActions
 */
export class MR_SubPageActions {
    mActivate: MR_SubPageActionActivate

    constructor() {
        /**
         * @property
         */
        this.mActivate = new MR_SubPageActionActivate()

        console.log('Mock MR_SubPageActions: constructor was called')
    }
}

/**
 * @class MR_Repeating
 */
export class MR_Repeating {
    constructor() {
        console.log('Mock MR_Repeating: constructor was called')
    }
}

/**
 * @class MR_MappingPageActions
 */
export class MR_MappingPageActions {
    mActivate: MR_MappingPageActionActivate

    constructor() {
        /**
         * @property
         */
        this.mActivate = new MR_MappingPageActionActivate()

        console.log('Mock MR_SubPageActions: constructor was called')
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
    constructor() {
        console.log('Mock MR_DeviceDetectionUnit: constructor was called')
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
        return new MR_DetectionPortPair()
    }

    /**
     * @param {MR_DeviceMidiInput} inputPort
     * @returns {MR_DetectionSingleInput}
     */
    detectSingleInput(inputPort: MR_DeviceMidiInput): MR_DetectionSingleInput {
        return new MR_DetectionSingleInput()
    }
}

/**
 * @class MR_DetectionEntry
 */
export class MR_DetectionEntry {
    constructor() {
        console.log('Mock MR_DetectionEntry: constructor was called')
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
        super()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameContains(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameEquals(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameStartsWith(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectInputNameEndsWith(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameContains(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameEquals(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameStartsWith(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionPortPair}
     */
    expectOutputNameEndsWith(filterValue: string): MR_DetectionPortPair {
        return new MR_DetectionPortPair()
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
        return new MR_DetectionPortPair()
    }
}

/**
 * @class MR_DetectionSingleInput
 * @augments MR_DetectionEntry
 */
export class MR_DetectionSingleInput extends MR_DetectionEntry {
    constructor() {
        super()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameContains(filterValue: string): MR_DetectionSingleInput {
        return new MR_DetectionSingleInput()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameEquals(filterValue: string): MR_DetectionSingleInput {
        return new MR_DetectionSingleInput()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameStartsWith(filterValue: string): MR_DetectionSingleInput {
        return new MR_DetectionSingleInput()
    }

    /**
     * @param {string} filterValue
     * @returns {MR_DetectionSingleInput}
     */
    expectInputNameEndsWith(filterValue: string): MR_DetectionSingleInput {
        return new MR_DetectionSingleInput()
    }
}

/**
 * @class MR_DeviceDriverActions
 */
export class MR_DeviceDriverActions {
    mPrevPage: MR_DeviceDriverAction
    mNextPage: MR_DeviceDriverAction
    mResetPage: MR_DeviceDriverAction

    constructor() {
        /**
         * @property
         */
        this.mPrevPage = new MR_DeviceDriverAction()
        /**
         * @property
         */
        this.mNextPage = new MR_DeviceDriverAction()
        /**
         * @property
         */
        this.mResetPage = new MR_DeviceDriverAction()

        console.log('Mock MR_DeviceDriverActions: constructor was called')
    }
}

/**
 * @class MR_InitialSysexFile
 */
export class MR_InitialSysexFile {
    constructor() {
        console.log('Mock MR_InitialSysexFile: constructor was called')
    }
}

/**
 * @class MR_UserGuide
 */
export class MR_UserGuide {
    constructor() {
        console.log('Mock MR_UserGuide: constructor was called')
    }
}
