// https://dev.to/studio_m_song/testing-with-jest-and-typescript-the-tricky-parts-1gnc
// https://stackoverflow.com/questions/71698279/how-to-mock-an-api-call-with-jest-amplify-api
// https://formidable.com/blog/2022/debug-jest/
// https://chrisboakes.com/mocking-javascript-class-inner-functions-with-jest/

// jest.mock('midiremote_api_v1') // this happens automatically with automocking

import { jest } from '@jest/globals'
import midiremote_api from 'midiremote_api_v1'

import { decorateSurface } from '../decorators/surface'

const mockedAPI = jest.mocked(midiremote_api)

mockedAPI.makeDeviceDriver.mockImplementation(
    (vendorName: string, deviceName: string, createdBy: string): MR_DeviceDriver => {
        console.log('Mock MR_MidiRemoteAPI - makeDeviceDriver: constructor was called')

        return {
            mPorts: {
                makeMidiInput(name = ''): MR_DeviceMidiInput {
                    return new MR_DeviceMidiInput()
                },
                makeMidiOutput(name = ''): MR_DeviceMidiOutput {
                    return new MR_DeviceMidiOutput()
                },
            },
            mSurface: new MR_DeviceSurface(),
            mMapping: {
                makePage(name: string): MR_FactoryMappingPage {
                    return new MR_FactoryMappingPage()
                },
            },
            mAction: {
                mPrevPage: {
                    trigger(activeMapping: MR_ActiveMapping): void {},
                },
                mNextPage: {
                    trigger(activeMapping: MR_ActiveMapping): void {},
                },
                mResetPage: {
                    trigger(activeMapping: MR_ActiveMapping): void {},
                },
            },
            mOnActivate: (MR_ActiveDevice) => {},
            mOnDeactivate: (MR_ActiveDevice) => {},
            makeDetectionUnit: (): MR_DeviceDetectionUnit => {
                return new MR_DeviceDetectionUnit()
            },
            setInitialSysexFile(
                fileName: string,
                delayInMilliseconds: number
            ): MR_InitialSysexFile {
                return new MR_InitialSysexFile()
            },
            setUserGuide(fileName: string): MR_UserGuide {
                return new MR_UserGuide()
            },
        }
    }
)

// const mockAPI = jest.mocked(midiremote_api)

// const mockedSurface = jest.mocked(MR_DeviceSurface)

// const surfaceMap = new Map<string, object>()
// mockAPI.makeDeviceDriver.mockImplementation(
//     (vendorName: string, deviceName: string, createdBy: string): MR_DeviceDriver => {
//         surfaceMap.set('makeDeviceDriver', {
//             vendorName,
//             deviceName,
//             createdBy,
//         })
//         return {
//             mPorts: {
//                 makeMidiInput(name = ''): MR_DeviceMidiInput {
//                     return new MR_DeviceMidiInput()
//                 },
//                 makeMidiOutput(name = ''): MR_DeviceMidiOutput {
//                     return new MR_DeviceMidiOutput()
//                 },
//             },
//             mSurface: {
//                 makePushEncoder(x: number, y: number, w: number, h: number): MR_PushEncoder {
//                     surfaceMap.set('makePushEncoder', { x, y, w, h })
//                     return new MR_PushEncoder()
//                 },
//                 makeKnob(x: number, y: number, w: number, h: number): MR_Knob {
//                     surfaceMap.set('makeKnob', { x, y, w, h })
//                     return new MR_Knob()
//                 },
//                 makeFader(x: number, y: number, w: number, h: number): MR_Fader {
//                     surfaceMap.set('makeFader', { x, y, w, h })
//                     return new MR_Fader()
//                 },
//                 makeButton(x: number, y: number, w: number, h: number): MR_Button {
//                     surfaceMap.set('makeButton', { x, y, w, h })
//                     console.log('makeButton: ' + { x, y, w, h })
//                     return new MR_Button()
//                 },
//                 makeModWheel(x: number, y: number, w: number, h: number): MR_ModWheel {
//                     surfaceMap.set('makeModWheel', { x, y, w, h })
//                     return new MR_ModWheel()
//                 },
//                 makePitchBend(x: number, y: number, w: number, h: number): MR_PitchBend {
//                     surfaceMap.set('makePitchBend', { x, y, w, h })
//                     return new MR_PitchBend()
//                 },
//                 makeTriggerPad(x: number, y: number, w: number, h: number): MR_TriggerPad {
//                     surfaceMap.set('makeTriggerPad', { x, y, w, h })
//                     return new MR_TriggerPad()
//                 },
//                 makePadXY(x: number, y: number, w: number, h: number): MR_PadXY {
//                     surfaceMap.set('makePadXY', { x, y, w, h })
//                     return new MR_PadXY()
//                 },
//                 makeJoyStickXY(x: number, y: number, w: number, h: number): MR_JoyStickXY {
//                     surfaceMap.set('makeJoyStickXY', { x, y, w, h })
//                     return new MR_JoyStickXY()
//                 },
//                 makeLamp(x: number, y: number, w: number, h: number): MR_Lamp {
//                     surfaceMap.set('makeLamp', { x, y, w, h })
//                     return new MR_Lamp()
//                 },
//                 makeBlindPanel(x: number, y: number, w: number, h: number): MR_BlindPanel {
//                     surfaceMap.set('makeBlindPanel', { x, y, w, h })
//                     return new MR_BlindPanel()
//                 },
//                 makePianoKeys(
//                     x: number,
//                     y: number,
//                     w: number,
//                     h: number,
//                     firstKeyIndex: number,
//                     lastKeyIndex: number
//                 ): MR_PianoKeys {
//                     surfaceMap.set('makePianoKeys', { x, y, w, h, firstKeyIndex, lastKeyIndex })
//                     return new MR_PianoKeys()
//                 },
//                 makeLabelField(x: number, y: number, w: number, h: number): MR_SurfaceLabelField {
//                     surfaceMap.set('makeLabelField', { x, y, w, h })
//                     return new MR_SurfaceLabelField()
//                 },
//                 makeControlLayerZone(name: string): MR_ControlLayerZone {
//                     surfaceMap.set('makeControlLayerZone', { name })
//                     return new MR_ControlLayerZone()
//                 },
//                 makeCustomValueVariable(name: string): MR_SurfaceCustomValueVariable {
//                     surfaceMap.set('makeCustomValueVariable', { name })
//                     return new MR_SurfaceCustomValueVariable()
//                 },
//             },
//             mMapping: {
//                 makePage(name: string): MR_FactoryMappingPage {
//                     return new MR_FactoryMappingPage()
//                 },
//             },
//             mAction: {
//                 mPrevPage: {
//                     trigger(activeMapping: MR_ActiveMapping): void {},
//                 },
//                 mNextPage: {
//                     trigger(activeMapping: MR_ActiveMapping): void {},
//                 },
//                 mResetPage: {
//                     trigger(activeMapping: MR_ActiveMapping): void {},
//                 },
//             },
//             mOnActivate: (MR_ActiveDevice) => {},
//             mOnDeactivate: (MR_ActiveDevice) => {},
//             makeDetectionUnit: (): MR_DeviceDetectionUnit => {
//                 return new MR_DeviceDetectionUnit()
//             },
//             setInitialSysexFile(
//                 fileName: string,
//                 delayInMilliseconds: number
//             ): MR_InitialSysexFile {
//                 return new MR_InitialSysexFile()
//             },
//             setUserGuide(fileName: string): MR_UserGuide {
//                 return new MR_UserGuide()
//             },
//         }
//     }
// )

console.log('Starting midiremote test script ...')
const driver = midiremote_api.makeDeviceDriver('Icon', 'QCon Pro G2', 'Nerseth')

const surface = decorateSurface(driver.mSurface)

console.log('Calls to method: ' + (midiremote_api.makeDeviceDriver as jest.Mock).mock.calls)

test('surface', () => {
    // provide a mock implementation for the mocked midiremote_api:
    // expect(surfaceMap).toStrictEqual('SmImpStr')
})
