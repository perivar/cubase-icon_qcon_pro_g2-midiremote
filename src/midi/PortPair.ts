import {
    MR_ActiveDevice,
    MR_DeviceDriver,
    MR_DeviceMidiInput,
    MR_DeviceMidiOutput,
} from 'midiremote_api_v1'

export interface PortPair {
    input: MR_DeviceMidiInput
    output: EnhancedMidiOutput
}

export interface EnhancedMidiOutput extends MR_DeviceMidiOutput {
    sendSysex: (context: MR_ActiveDevice, messageBody: number[]) => void
    sendNoteOn: (context: MR_ActiveDevice, pitch: number, velocity: number | boolean) => void
}

let nextPortPairIndex = 1

export const makePortPair = (driver: MR_DeviceDriver, isExtender: boolean): PortPair => {
    const name = isExtender ? 'Extender' : 'Main'
    const portPairIndex = nextPortPairIndex++
    const input = driver.mPorts.makeMidiInput(`Input ${portPairIndex} - ${name}`)
    const output = driver.mPorts.makeMidiOutput(
        `Output ${portPairIndex} - ${name}`
    ) as EnhancedMidiOutput

    output.sendSysex = (context, messageBody) => {
        output.sendMidi(
            context,
            // PIN: converted spread-to-array to ES5 with concat and typehint
            ([] as number[]).concat(0xf0, 0x00, 0x00, 0x66, 0x14 + +isExtender, messageBody, 0xf7)
        )
    }

    output.sendNoteOn = (context: MR_ActiveDevice, pitch: number, velocity: number | boolean) => {
        output.sendMidi(context, [0x90, pitch, +Boolean(velocity) * 0xff])
    }

    return { input, output }
}
