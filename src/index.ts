// Polyfills
import './polyfill/arrayFlatMap'
import './polyfill/arrayFrom'
import './polyfill/stringPadStart'
import './polyfill/mathLog10'
import './polyfill/objectAssign'

// to easily be able to cleanup webpack output afterwards, use ES5 require method and not from
import midiremote_api = require('midiremote_api_v1')

import { decoratePage } from './decorators/page'
import { decorateSurface } from './decorators/surface'
import { Devices } from './Devices'
import { makeHostMapping } from './mapping'
import { bindDeviceToMidi, makeGlobalBooleanVariables } from './midi'
import { setupDeviceConnection } from './midi/connection'
import { makeTimerUtils } from './util'

const driver = midiremote_api.makeDeviceDriver('Icon', 'QCon Pro G2', 'Nerseth')

const surface = decorateSurface(driver.mSurface)

// Create devices, i.e., midi ports and surface elements for each physical device
const devices = new Devices(driver, surface)

const { activationCallbacks, segmentDisplayManager } = setupDeviceConnection(driver, devices)
activationCallbacks.addCallback(() => {
    // @ts-expect-error The script version is filled in by postinstall
    console.log('Activating cubase-icon_qcon_pro_g2-midiremote v' + SCRIPT_VERSION)
    console.log(
        'A newer version may be available at https://github.com/perivar/cubase-icon_qcon_pro_g2-midiremote'
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
