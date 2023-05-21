// https://dev.to/studio_m_song/testing-with-jest-and-typescript-the-tricky-parts-1gnc
// https://stackoverflow.com/questions/71698279/how-to-mock-an-api-call-with-jest-amplify-api
// https://formidable.com/blog/2022/debug-jest/
// https://chrisboakes.com/mocking-javascript-class-inner-functions-with-jest/
//
// jest.mock('midiremote_api_v1') // this happens automatically with automocking
// const mockAPI = jest.mocked(midiremote_api)
// mockAPI.makeDeviceDriver.mockImplementation()

import midiremote_api from 'midiremote_api_v1';

import { decorateSurface } from '../decorators/surface';

console.log('Starting midiremote test script ...');
const driver = midiremote_api.makeDeviceDriver('Icon', 'QCon Pro G2', 'Nerseth');
const surface = decorateSurface(driver.mSurface);

// console.log('Calls to method: ' + (midiremote_api.makeDeviceDriver as jest.Mock).mock.calls)

test('surface', () => {
  expect(surface.makeButton.length).toStrictEqual(4);
});
