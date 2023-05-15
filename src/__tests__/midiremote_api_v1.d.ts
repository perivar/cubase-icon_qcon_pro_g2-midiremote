import { MR_MidiRemoteAPI } from './midiremote_api_v1_impl'

const module_object = new MR_MidiRemoteAPI()

declare module 'midiremote_api_v1' {
    const makeDeviceDriver = module_object.makeDeviceDriver
    const mDefaults = new MR_HostDefaults()
}

// declare class console {
//     static log(msg: string): void {}
//     static error(msg: string): void {}
// }
