import midiremoteApi from 'midiremote_api_v1'

import { decoratePage } from './decorators/page'
import { decorateSurface } from './decorators/surface'
import { Devices } from './Devices'
import { makeHostMapping } from './mapping'
import { bindDeviceToMidi, makeGlobalBooleanVariables } from './midi'
import { setupDeviceConnection } from './midi/connection'
import { makeTimerUtils } from './util'

const driver = midiremoteApi.makeDeviceDriver('Behringer', 'X-Touch', 'github.com/bjoluc')

const surface = decorateSurface(driver.mSurface)

// Create devices, i.e., midi ports and surface elements for each physical device
const devices = new Devices(driver, surface)

const { activationCallbacks, segmentDisplayManager } = setupDeviceConnection(driver, devices)
activationCallbacks.addCallback(() => {
    // @ts-expect-error The script version is filled in by esbuild
    console.log('Activating cubase-xtouch-midiremote v' + SCRIPT_VERSION)
    console.log(
        'A newer version may be available at https://github.com/bjoluc/cubase-xtouch-midiremote/releases'
    )
})

const globalBooleanVariables = makeGlobalBooleanVariables(surface)

activationCallbacks.addCallback((context) => {
    // Setting `runCallbacksInstantly` to `true` below is a workaround for
    // https://forums.steinberg.net/t/831123.
    globalBooleanVariables.areMotorsActive.set(context, true, true)
})

const page = decoratePage(driver.mMapping.makePage('Mixer'), surface)
const timerUtils = makeTimerUtils(page, surface)

// Bind elements to MIDI
devices.forEach((device) => {
    bindDeviceToMidi(device, globalBooleanVariables, activationCallbacks, timerUtils)
})

// Map elements to host functions
makeHostMapping(page, devices, segmentDisplayManager, globalBooleanVariables, activationCallbacks)
