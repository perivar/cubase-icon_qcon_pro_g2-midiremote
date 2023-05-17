/******/ ;(function () {
    // PIN Array.flatMap polyfill
    Array.prototype.flatMap = function (mapper) {
        var result = []

        for (var i = 0; i < this.length; ++i) {
            var item = mapper(this[i], i, this)

            if (!Array.isArray(item)) {
                item = [item]
            }

            for (var j = 0; j < item.length; ++j) {
                result.push(item[j])
            }
        }

        return result
    }

    // PIN Object.entries polyfill
    Object.prototype.entries = function (obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i) // preallocate the Array
        while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]

        return resArray
    }

    // PIN String.padStart polyfill
    String.prototype.padStart = function (length, padString) {
        var str = this
        while (str.length < length) str = padString + str
        return str
    }

    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ 554: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            var __extends =
                (this && this.__extends) ||
                (function () {
                    var extendStatics = function (d, b) {
                        extendStatics =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (d, b) {
                                    d.__proto__ = b
                                }) ||
                            function (d, b) {
                                for (var p in b)
                                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
                            }
                        return extendStatics(d, b)
                    }
                    return function (d, b) {
                        if (typeof b !== 'function' && b !== null)
                            throw new TypeError(
                                'Class extends value ' + String(b) + ' is not a constructor or null'
                            )
                        extendStatics(d, b)
                        function __() {
                            this.constructor = d
                        }
                        d.prototype =
                            b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
                    }
                })()

            exports.Devices = exports.ExtenderDevice = exports.MainDevice = exports.Device = void 0
            var config_1 = __webpack_require__(913)
            var LcdManager_1 = __webpack_require__(105)
            var PortPair_1 = __webpack_require__(435)
            var surface_1 = __webpack_require__(562)
            /**
             * A `Device` represents a physical device and manages its MIDI ports and surface elements
             */
            var Device = /** @class */ (function () {
                function Device(_a, isExtender, panelWidth) {
                    var driver = _a.driver,
                        firstChannelIndex = _a.firstChannelIndex,
                        surface = _a.surface,
                        surfaceXPosition = _a.surfaceXPosition
                    this.firstChannelIndex = firstChannelIndex
                    this.ports = (0, PortPair_1.makePortPair)(driver, isExtender)
                    this.lcdManager = new LcdManager_1.LcdManager(this)
                    // Draw device frame
                    surface.makeBlindPanel(surfaceXPosition, 0, panelWidth, surface_1.surfaceHeight)
                    this.channelElements = (0, surface_1.createChannelSurfaceElements)(
                        surface,
                        surfaceXPosition
                    )
                }
                return Device
            })()
            exports.Device = Device
            var MainDevice = (exports.MainDevice = /** @class */ (function (_super) {
                __extends(MainDevice, _super)
                function MainDevice(properties) {
                    var _this =
                        _super.call(this, properties, false, MainDevice.surfaceWidth) || this
                    _this.controlSectionElements = (0,
                    surface_1.createControlSectionSurfaceElements)(
                        properties.surface,
                        properties.surfaceXPosition + surface_1.channelElementsWidth
                    )
                    return _this
                }
                MainDevice.surfaceWidth =
                    surface_1.channelElementsWidth + surface_1.controlSectionElementsWidth
                return MainDevice
            })(Device))
            var ExtenderDevice = (exports.ExtenderDevice = /** @class */ (function (_super) {
                __extends(ExtenderDevice, _super)
                function ExtenderDevice(properties) {
                    return _super.call(this, properties, true, ExtenderDevice.surfaceWidth) || this
                }
                ExtenderDevice.surfaceWidth = surface_1.channelElementsWidth + 1
                return ExtenderDevice
            })(Device))
            var Devices = /** @class */ (function () {
                function Devices(driver, surface) {
                    this.devices = []
                    this.forEach = this.devices.forEach.bind(this.devices)
                    this.map = this.devices.map.bind(this.devices)
                    this.flatMap = this.devices.flatMap.bind(this.devices)
                    this.filter = this.devices.filter.bind(this.devices)
                    var deviceClasses = config_1.config.devices.map(function (deviceType) {
                        return deviceType === 'main' ? MainDevice : ExtenderDevice
                    })
                    var nextDeviceXPosition = 0
                    for (var i = 0; i < deviceClasses.length; i++) {
                        var deviceIndex = i
                        var deviceClass = deviceClasses[i]
                        var device = new deviceClass({
                            firstChannelIndex: deviceIndex * 8,
                            driver: driver,
                            surface: surface,
                            surfaceXPosition: nextDeviceXPosition,
                        })
                        nextDeviceXPosition += deviceClass.surfaceWidth
                        this.devices.push(device)
                    }
                    if (this.devices.length === 1) {
                        driver
                            .makeDetectionUnit()
                            .detectPortPair(
                                this.devices[0].ports.input,
                                this.devices[0].ports.output
                            )
                            .expectInputNameContains('iCON QCON Pro G2')
                            .expectOutputNameContains('iCON QCON Pro G2')
                    }
                }
                Devices.prototype.getDeviceByChannelIndex = function (channelIndex) {
                    return this.devices[Math.floor(channelIndex / 8)]
                }
                return Devices
            })()
            exports.Devices = Devices

            /***/
        },

        /***/ 362: /***/ function (__unused_webpack_module, exports) {
            // Abbreviate strings in style of R: Abbreviate
            // Copyright (c) 2015 Paul Pflugradt Licensed under the MIT license.
            // https://github.com/paulpflug/abbreviate/blob/master/src/index.coffee

            exports.abbreviate = void 0
            var regexes = [/[\s\-_,]/, /[\W]/, /[aieouäöü]/, /[a-z]/, /[AIEOUÄÖÜ]/, /[A-Z0-9]/]
            var digraphs = ['ch', 'gh', 'gn', 'kn', 'ph', 'qu', 'sh', 'th', 'wh', 'wr']
            var diblends = [
                'bl',
                'br',
                'cl',
                'cr',
                'fl',
                'fr',
                'gl',
                'gr',
                'pl',
                'pr',
                'sc',
                'sl',
                'sm',
                'sn',
                'sp',
                'st',
            ]
            var trigraphs = ['chr', 'sch']
            var triblends = ['shr', 'spl', 'spr', 'squ', 'str', 'thr']
            var abbreviate = function (str, arg) {
                var length = arg.length
                var keepSeparators = arg.keepSeparators
                var strict = arg.strict
                if (length == null) {
                    length = 3
                }
                if (keepSeparators == null) {
                    keepSeparators = false
                }
                if (strict == null) {
                    strict = true
                }
                if (length <= 0 && strict) {
                    return ''
                }
                if (length >= str.length) {
                    return str
                }
                str = str.replace(/^[\s\-_,]+/, '').replace(/[\s\-_,]+$/, '')
                if (length >= str.length) {
                    return str
                }
                var chars = str.split('')
                var pos = 1
                var order = [pos]
                var orderedCount = 1
                var word = 1
                var words = [1]
                var sep = 0
                var newWord = false
                var found = false
                // forward search for word beginnings
                var i = 1
                while (i < chars.length) {
                    order.push(0)
                    if (chars[i].search(regexes[0]) > -1) {
                        words.push(0)
                        newWord = true
                        sep++
                    } else {
                        if (newWord) {
                            newWord = false
                            word++
                            pos++
                            order[i] = pos
                            orderedCount++
                            // search for trigraphs/triblends
                            // modified from original +2 to -2
                            if (i < chars.length - 2) {
                                var ref = trigraphs.concat(triblends)
                                for (var k = 0, len = ref.length; k < len; k++) {
                                    var tri = ref[k]
                                    if (
                                        tri[0] === chars[i].toLowerCase() &&
                                        tri[1] === chars[i + 1].toLowerCase() &&
                                        tri[2] === chars[i + 2].toLowerCase()
                                    ) {
                                        found = true
                                        break
                                    }
                                }
                            }
                            if (found) {
                                found = false
                                pos++
                                order.push(pos)
                                orderedCount++
                                pos++
                                order.push(pos)
                                orderedCount++
                                words.push(word)
                                words.push(word)
                                i++
                                i++
                                // search for digraphs/diblends
                                // modified from original +1 to -1
                            } else if (i < chars.length - 1) {
                                var ref1 = digraphs.concat(diblends)
                                for (var l = 0, len1 = ref1.length; l < len1; l++) {
                                    var di = ref1[l]
                                    if (
                                        di[0] === chars[i].toLowerCase() &&
                                        di[1] === chars[i + 1].toLowerCase()
                                    ) {
                                        found = true
                                        break
                                    }
                                }
                                if (found) {
                                    found = false
                                    pos++
                                    order.push(pos)
                                    orderedCount++
                                    words.push(word)
                                    i++
                                }
                            }
                        }
                        words.push(word)
                    }
                    i++
                }
                if (!strict) {
                    var should = word
                    if (keepSeparators) {
                        should += sep
                    }
                    if (length < should) {
                        length = should
                    }
                }
                // backward search for seperators
                if (keepSeparators) {
                    i = 0
                    while (i < chars.length) {
                        if (words[i] === 0) {
                            order[i] = pos
                            orderedCount++
                            pos++
                        }
                        i++
                    }
                    pos = chars.length
                } else {
                    pos = chars.length
                    i = chars.length
                    while (i > 0) {
                        i--
                        if (words[i] === 0) {
                            order[i] = pos
                            orderedCount++
                            pos--
                        }
                    }
                }
                // backward search for remaining chars
                var j = 1
                var unfinished = true
                while (j < regexes.length && unfinished) {
                    i = chars.length
                    while (i > 0) {
                        i--
                        if (!(order[i] > 0)) {
                            if (chars[i].search(regexes[j]) > -1) {
                                order[i] = pos
                                orderedCount++
                                pos--
                                if (orderedCount === chars.length) {
                                    unfinished = false
                                    break
                                }
                            }
                        }
                    }
                    j++
                }
                // map selected chars
                chars = chars.map(function (val, i2) {
                    if (length && order[i2] <= length) {
                        return val
                    } else {
                        return ''
                    }
                })
                return chars.join('')
            }
            exports.abbreviate = abbreviate

            /***/
        },

        /***/ 913: /***/ function (__unused_webpack_module, exports) {
            exports.config = void 0
            // set some default values
            exports.config = {
                devices: ['main'],
                enableAutoSelect: true,
                mapMainFaderToControlRoom: true,
            }
            // AT ts-expect-error allow 'CONFIGURATION is used before definition' since we are copying the below text
            // export const config = CONFIGURATION as ScriptConfiguration
            // Everything below "BEGIN JS" is copied directly to the top of the build file (with some values
            // being replaced).
            // BEGIN JS
            /**
             * Script configuration – edit the following options to match your preferences
             */
            // eslint-disable-next-line
            var CONFIGURATION = {
                /**
                 * If you have an extender unit, change this option to either `["extender", "main"]` (if your
                 * extender is placed on the left side of the main unit) or `["main", "extender"]` (if the
                 * extender is on the right side).
                 *
                 * You can also specify an arbitrary combination of "main" and "extender" devices here, including
                 * multiple X-Touch ("main") and multiple X-Touch Extender ("extender") devices. The order of the
                 * list below should match the order of the devices on your desk from left to right. The port
                 * setup in the "Add MIDI Controller Surface" dialog reflects this order for input and output
                 * ports, i.e., the first input and the first output port belong to the leftmost device while the
                 * last input and the last output port belong to the rightmost device.
                 */
                devices: ['main'],
                /**
                 * Whether touching a channel's fader will select the channel ("Auto Select"). Replace `true` with
                 * `false` below to disable auto selection.
                 */
                enableAutoSelect: true,
                /**
                 * If you don't use the Control Room or your version of Cubase doesn't have it, you'll likely want
                 * the main fader to control the first output channel like in the default Mackie Control mapping.
                 * You can achieve this by replacing `true` with `false` below.
                 */
                mapMainFaderToControlRoom: true,
            }

            /***/
        },

        /***/ 508: /***/ function (__unused_webpack_module, exports) {
            exports.decoratePage = void 0
            var decoratePage = function (page, surface) {
                var enhancedPage = page
                enhancedPage.mCustom.makeSettableHostValueVariable = function (name) {
                    var hostValue = page.mCustom.makeHostValueVariable(name)
                    var surfaceValue = surface.makeCustomValueVariable(
                        ''.concat(name, 'SurfaceValue')
                    )
                    page.makeValueBinding(surfaceValue, hostValue)
                    hostValue.setProcessValue = function (activeDevice, value) {
                        return surfaceValue.setProcessValue(activeDevice, value)
                    }
                    return hostValue
                }
                return enhancedPage
            }
            exports.decoratePage = decoratePage

            /***/
        },

        /***/ 414: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.decorateSurface = void 0
            var util_1 = __webpack_require__(882)
            var decorateSurface = function (surface) {
                var decoratedSurface = surface
                decoratedSurface.makeLedButton = function (x, y, w, h) {
                    var button = surface.makeButton(x, y, w, h)
                    button.onSurfaceValueChange = (0, util_1.makeCallbackCollection)(
                        button.mSurfaceValue,
                        'mOnProcessValueChange'
                    )
                    button.mLedValue = surface.makeCustomValueVariable('LedButtonLed')
                    var shadowValue = surface.makeCustomValueVariable('LedButtonProxy')
                    button.bindToNote = function (ports, note, isChannelButton) {
                        if (isChannelButton === void 0) {
                            isChannelButton = false
                        }
                        var currentSurfaceValue = new util_1.ContextStateVariable(0)
                        button.mSurfaceValue.mMidiBinding
                            .setInputPort(ports.input)
                            .bindToNote(0, note)
                        button.onSurfaceValueChange.addCallback(function (context, newValue) {
                            currentSurfaceValue.set(context, newValue)
                            ports.output.sendNoteOn(
                                context,
                                note,
                                newValue || currentLedValue.get(context)
                            )
                        })
                        var currentLedValue = new util_1.ContextStateVariable(0)
                        button.mLedValue.mOnProcessValueChange = function (context, newValue) {
                            currentLedValue.set(context, newValue)
                            ports.output.sendNoteOn(context, note, newValue)
                        }
                        // Binding the button's mSurfaceValue to a host function may alter it to not change when the
                        // button is pressed. Hence, `shadowValue` is used to make the button light up while it's
                        // pressed.
                        shadowValue.mMidiBinding.setInputPort(ports.input).bindToNote(0, note)
                        shadowValue.mOnProcessValueChange = function (context, newValue) {
                            ports.output.sendNoteOn(
                                context,
                                note,
                                newValue ||
                                    currentSurfaceValue.get(context) ||
                                    currentLedValue.get(context)
                            )
                        }
                        if (isChannelButton) {
                            // Turn the button's LED off when it becomes unassigned
                            button.mSurfaceValue.mOnTitleChange = function (context, title) {
                                if (title === '') {
                                    ports.output.sendNoteOn(context, note, 0)
                                }
                            }
                        }
                    }
                    return button
                }
                decoratedSurface.makeLedPushEncoder = function (x, y, w, h) {
                    var encoder = surface.makePushEncoder(x, y, w, h)
                    encoder.mDisplayModeValue =
                        surface.makeCustomValueVariable('encoderDisplayMode')
                    return encoder
                }
                decoratedSurface.makeTouchSensitiveFader = function (x, y, w, h) {
                    var fader = surface.makeFader(x, y, w, h)
                    fader.mTouchedValue = surface.makeCustomValueVariable('faderTouched')
                    // Workaround because `filterByValue` in the encoder bindings hides zero values from
                    // `mOnProcessValueChange`
                    fader.mTouchedValueInternal =
                        surface.makeCustomValueVariable('faderTouchedInternal')
                    return fader
                }
                decoratedSurface.makeJogWheel = function (x, y, w, h) {
                    var jogWheel = surface.makeKnob(x, y, w, h)
                    var mProxyValue = surface.makeCustomValueVariable('jogWheelProxy')
                    jogWheel.mKnobModeEnabledValue =
                        surface.makeCustomValueVariable('jogWheelKnobModeEnabled')
                    jogWheel.mJogRightValue = surface.makeCustomValueVariable('jogWheelJogRight')
                    jogWheel.mJogLeftValue = surface.makeCustomValueVariable('jogWheelJogLeft')
                    jogWheel.bindToControlChange = function (input, controlChangeNumber) {
                        mProxyValue.mMidiBinding
                            .setInputPort(input)
                            .bindToControlChange(0, controlChangeNumber)
                            .setTypeRelativeSignedBit()
                        mProxyValue.mOnProcessValueChange = function (context, value, difference) {
                            var jumpOffset = 0.4
                            // Prevent value from reaching its limits
                            if (value < 0.5 - jumpOffset) {
                                mProxyValue.setProcessValue(context, value + jumpOffset)
                            } else if (value > 0.5 + jumpOffset) {
                                mProxyValue.setProcessValue(context, value - jumpOffset)
                            }
                            // Compensate for the difference value offsets introduced above
                            if (Math.abs(difference) >= jumpOffset - 0.1) {
                                if (difference > 0) {
                                    difference -= jumpOffset
                                } else {
                                    difference += jumpOffset
                                }
                            }
                            if (jogWheel.mKnobModeEnabledValue.getProcessValue(context)) {
                                jogWheel.mSurfaceValue.setProcessValue(
                                    context,
                                    Math.max(
                                        0,
                                        Math.min(
                                            1,
                                            jogWheel.mSurfaceValue.getProcessValue(context) +
                                                difference
                                        )
                                    )
                                )
                            } else {
                                // Handle jog events
                                if (difference !== 0) {
                                    if (difference < 0) {
                                        jogWheel.mJogLeftValue.setProcessValue(context, 1)
                                    } else {
                                        jogWheel.mJogRightValue.setProcessValue(context, 1)
                                    }
                                }
                            }
                        }
                    }
                    return jogWheel
                }
                decoratedSurface.makeDecoratedLamp = function (x, y, w, h) {
                    var lamp = decoratedSurface.makeLamp(x, y, w, h)
                    lamp.bindToNote = function (output, note) {
                        lamp.mSurfaceValue.mOnProcessValueChange = function (context, value) {
                            output.sendNoteOn(context, note, value)
                        }
                    }
                    return lamp
                }
                return decoratedSurface
            }
            exports.decorateSurface = decorateSurface

            /***/
        },

        /***/ 952: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.bindFootControl =
                exports.bindDirectionButtons =
                exports.bindSegmentDisplaySection =
                exports.bindJogWheelSection =
                exports.bindControlButtons =
                    void 0
            var midi_1 = __webpack_require__(208)
            var setShiftableButtonsLedValues = function (controlSectionElements, context, value) {
                var buttons = controlSectionElements.buttons
                // PIN: converted for-of-multi loop to ES5
                for (
                    var i = 0,
                        arr = [
                            buttons.edit,
                            buttons.modify[0],
                            buttons.modify[2],
                            buttons.utility[2],
                            buttons.transport[0],
                            buttons.transport[1],
                        ];
                    i < arr.length;
                    i++
                ) {
                    var button = arr[i]
                    button.mLedValue.setProcessValue(context, value)
                }
            }
            var bindCursorValueControlButton = function (page, button, encoder, jogWheel) {
                var subPageArea = page.makeSubPageArea('Cursor Value Control')
                var inactiveSubpage = subPageArea.makeSubPage('Cursor Value Control Inactive')
                var activeSubpage = subPageArea.makeSubPage('Cursor Value Control Active')
                var encoderDisplayMode = page.mCustom.makeSettableHostValueVariable(
                    'cursorValueControlEncoderDisplayMode'
                )
                activeSubpage.mOnActivate = function (context) {
                    encoderDisplayMode.setProcessValue(context, midi_1.EncoderDisplayMode.SingleDot)
                    button.mLedValue.setProcessValue(context, 1)
                    jogWheel.mKnobModeEnabledValue.setProcessValue(context, 1)
                }
                inactiveSubpage.mOnActivate = function (context) {
                    button.mLedValue.setProcessValue(context, 0)
                    jogWheel.mKnobModeEnabledValue.setProcessValue(context, 0)
                }
                page.makeActionBinding(
                    button.mSurfaceValue,
                    activeSubpage.mAction.mActivate
                ).setSubPage(inactiveSubpage)
                page.makeActionBinding(
                    button.mSurfaceValue,
                    inactiveSubpage.mAction.mActivate
                ).setSubPage(activeSubpage)
                page.makeValueBinding(
                    encoder.mEncoderValue,
                    page.mHostAccess.mMouseCursor.mValueUnderMouse
                ).setSubPage(activeSubpage)
                page.makeValueBinding(encoder.mDisplayModeValue, encoderDisplayMode).setSubPage(
                    activeSubpage
                )
                var dummyHostVariable = page.mCustom.makeHostValueVariable('dummy')
                page.makeValueBinding(jogWheel.mSurfaceValue, dummyHostVariable).setSubPage(
                    inactiveSubpage
                )
                page.makeValueBinding(
                    jogWheel.mSurfaceValue,
                    page.mHostAccess.mMouseCursor.mValueUnderMouse
                ).setSubPage(activeSubpage)
            }
            var bindControlButtons = function (
                page,
                controlSectionElements,
                channelElements,
                mixerBankZone
            ) {
                var host = page.mHostAccess
                var buttons = controlSectionElements.buttons
                var buttonsSubPageArea = page.makeSubPageArea('Control Buttons')
                var regularSubPage = buttonsSubPageArea.makeSubPage('Regular')
                var shiftSubPage = buttonsSubPageArea.makeSubPage('Shift')
                // 1-8
                buttons.number.forEach(function (button, buttonIndex) {
                    page.makeCommandBinding(
                        button.mSurfaceValue,
                        'Channel & Track Visibility',
                        'Channel and Rack Configuration '.concat(buttonIndex + 1)
                    )
                })
                // Free buttons
                // PIN: converted for-of loop to ES5
                for (var i = 0; i < buttons.function.length; i++) {
                    var button = buttons.function[i]
                    page.makeCommandBinding(
                        button.mSurfaceValue,
                        'MIDI Remote',
                        'Open MIDI Remote Mapping Assistant'
                    )
                }
                // Edit
                page.makeCommandBinding(
                    buttons.edit.mSurfaceValue,
                    'Edit',
                    'Edit Channel Settings'
                ).setSubPage(regularSubPage)
                page.makeCommandBinding(
                    buttons.edit.mSurfaceValue,
                    'Windows',
                    'Close All Plug-in Windows'
                ).setSubPage(shiftSubPage)
                // Undo
                page.makeCommandBinding(buttons.modify[0].mSurfaceValue, 'Edit', 'Undo').setSubPage(
                    regularSubPage
                )
                page.makeCommandBinding(
                    buttons.modify[0].mSurfaceValue,
                    'Edit',
                    'History'
                ).setSubPage(shiftSubPage)
                // Redo
                page.makeCommandBinding(buttons.modify[1].mSurfaceValue, 'Edit', 'Redo')
                // Save
                page.makeCommandBinding(buttons.modify[2].mSurfaceValue, 'File', 'Save').setSubPage(
                    regularSubPage
                )
                page.makeCommandBinding(
                    buttons.modify[2].mSurfaceValue,
                    'File',
                    'Save New Version'
                ).setSubPage(shiftSubPage)
                // Revert
                page.makeCommandBinding(buttons.modify[3].mSurfaceValue, 'File', 'Revert')
                // Read/Off
                page.makeValueBinding(
                    buttons.automation[0].mSurfaceValue,
                    host.mTrackSelection.mMixerChannel.mValue.mAutomationRead
                ).setTypeToggle()
                // Write
                page.makeValueBinding(
                    buttons.automation[1].mSurfaceValue,
                    host.mTrackSelection.mMixerChannel.mValue.mAutomationWrite
                ).setTypeToggle()
                // Sends (Control value under cursor)
                bindCursorValueControlButton(
                    page,
                    buttons.automation[2],
                    channelElements[7].encoder,
                    controlSectionElements.jogWheel
                )
                // Project
                page.makeCommandBinding(
                    buttons.automation[3].mSurfaceValue,
                    'Project',
                    'Bring To Front'
                )
                // Mixer
                page.makeCommandBinding(buttons.automation[4].mSurfaceValue, 'Devices', 'Mixer')
                // Instrument
                page.makeCommandBinding(
                    buttons.utility[0].mSurfaceValue,
                    'MixConsole History',
                    'Undo MixConsole Step'
                )
                // Main
                page.makeCommandBinding(
                    buttons.utility[1].mSurfaceValue,
                    'MixConsole History',
                    'Redo MixConsole Step'
                )
                // Solo Defeat
                page.makeCommandBinding(
                    buttons.utility[2].mSurfaceValue,
                    'Edit',
                    'Deactivate All Solo'
                ).setSubPage(regularSubPage)
                page.makeCommandBinding(
                    buttons.utility[2].mSurfaceValue,
                    'Edit',
                    'Unmute All'
                ).setSubPage(shiftSubPage)
                // Shift button
                page.makeActionBinding(
                    buttons.utility[3].mSurfaceValue,
                    shiftSubPage.mAction.mActivate
                ).mOnValueChange = function (context, mapping, value) {
                    if (value) {
                        shiftSubPage.mAction.mActivate.trigger(mapping)
                        setShiftableButtonsLedValues(controlSectionElements, context, 1)
                    } else {
                        regularSubPage.mAction.mActivate.trigger(mapping)
                        setShiftableButtonsLedValues(controlSectionElements, context, 0)
                    }
                }
                // Transport buttons
                var mTransport = host.mTransport
                page.makeCommandBinding(
                    buttons.transport[0].mSurfaceValue,
                    'Transport',
                    'To Left Locator'
                ).setSubPage(regularSubPage)
                page.makeCommandBinding(
                    buttons.transport[0].mSurfaceValue,
                    'Transport',
                    'Set Left Locator'
                ).setSubPage(shiftSubPage)
                page.makeCommandBinding(
                    buttons.transport[1].mSurfaceValue,
                    'Transport',
                    'To Right Locator'
                ).setSubPage(regularSubPage)
                page.makeCommandBinding(
                    buttons.transport[1].mSurfaceValue,
                    'Transport',
                    'Set Right Locator'
                ).setSubPage(shiftSubPage)
                page.makeValueBinding(
                    buttons.transport[2].mSurfaceValue,
                    mTransport.mValue.mCycleActive
                ).setTypeToggle()
                page.makeCommandBinding(
                    buttons.transport[3].mSurfaceValue,
                    'Transport',
                    'Auto Punch In'
                )
                page.makeCommandBinding(
                    buttons.transport[4].mSurfaceValue,
                    'Transport',
                    'Locate Previous Marker'
                )
                page.makeCommandBinding(
                    buttons.transport[5].mSurfaceValue,
                    'Transport',
                    'Insert Marker'
                )
                page.makeCommandBinding(
                    buttons.transport[6].mSurfaceValue,
                    'Transport',
                    'Locate Next Marker'
                )
                page.makeValueBinding(buttons.transport[7].mSurfaceValue, mTransport.mValue.mRewind)
                page.makeValueBinding(
                    buttons.transport[8].mSurfaceValue,
                    mTransport.mValue.mForward
                )
                page.makeValueBinding(
                    buttons.transport[9].mSurfaceValue,
                    mTransport.mValue.mStop
                ).setTypeToggle()
                page.makeValueBinding(
                    buttons.transport[10].mSurfaceValue,
                    mTransport.mValue.mStart
                ).setTypeToggle()
                page.makeValueBinding(
                    buttons.transport[11].mSurfaceValue,
                    mTransport.mValue.mRecord
                ).setTypeToggle()
                // Navigation Buttons
                var _a = buttons.navigation,
                    bank = _a.bank,
                    channel = _a.channel
                page.makeActionBinding(bank.left.mSurfaceValue, mixerBankZone.mAction.mPrevBank)
                page.makeActionBinding(bank.right.mSurfaceValue, mixerBankZone.mAction.mNextBank)
                page.makeActionBinding(channel.left.mSurfaceValue, mixerBankZone.mAction.mShiftLeft)
                page.makeActionBinding(
                    channel.right.mSurfaceValue,
                    mixerBankZone.mAction.mShiftRight
                )
            }
            exports.bindControlButtons = bindControlButtons
            var bindJogWheelSection = function (page, controlSectionElements) {
                var jogWheelSubPageArea = page.makeSubPageArea('jogWeel')
                var scrubSubPage = jogWheelSubPageArea.makeSubPage('scrub')
                var jogSubPage = jogWheelSubPageArea.makeSubPage('jog')
                var scrubButton = controlSectionElements.buttons.scrub
                page.makeActionBinding(scrubButton.mSurfaceValue, jogWheelSubPageArea.mAction.mNext)
                jogSubPage.mOnActivate = function (context) {
                    scrubButton.mLedValue.setProcessValue(context, 1)
                }
                scrubSubPage.mOnActivate = function (context) {
                    scrubButton.mLedValue.setProcessValue(context, 0)
                }
                var _a = controlSectionElements.jogWheel,
                    jogLeft = _a.mJogLeftValue,
                    jogRight = _a.mJogRightValue
                page.makeCommandBinding(jogLeft, 'Transport', 'Jog Left').setSubPage(jogSubPage)
                page.makeCommandBinding(jogRight, 'Transport', 'Jog Right').setSubPage(jogSubPage)
                page.makeCommandBinding(jogLeft, 'Transport', 'Nudge Cursor Left').setSubPage(
                    scrubSubPage
                )
                page.makeCommandBinding(jogRight, 'Transport', 'Nudge Cursor Right').setSubPage(
                    scrubSubPage
                )
            }
            exports.bindJogWheelSection = bindJogWheelSection
            var bindSegmentDisplaySection = function (page, controlSectionElements) {
                page.makeCommandBinding(
                    controlSectionElements.buttons.timeMode.mSurfaceValue,
                    'Transport',
                    'Exchange Time Formats'
                )
            }
            exports.bindSegmentDisplaySection = bindSegmentDisplaySection
            var bindDirectionButtons = function (page, controlSectionElements) {
                var buttons = controlSectionElements.buttons
                var subPageArea = page.makeSubPageArea('Direction Buttons')
                var navigateSubPage = subPageArea.makeSubPage('Navigate')
                var zoomSubPage = subPageArea.makeSubPage('Zoom')
                zoomSubPage.mOnActivate = function (context) {
                    buttons.navigation.directions.center.mLedValue.setProcessValue(context, 1)
                }
                navigateSubPage.mOnActivate = function (context) {
                    buttons.navigation.directions.center.mLedValue.setProcessValue(context, 0)
                }
                var directions = buttons.navigation.directions
                page.makeCommandBinding(directions.up.mSurfaceValue, 'Navigate', 'Up').setSubPage(
                    navigateSubPage
                )
                page.makeCommandBinding(
                    directions.up.mSurfaceValue,
                    'Zoom',
                    'Zoom Out Vertically'
                ).setSubPage(zoomSubPage)
                page.makeCommandBinding(
                    directions.down.mSurfaceValue,
                    'Navigate',
                    'Down'
                ).setSubPage(navigateSubPage)
                page.makeCommandBinding(
                    directions.down.mSurfaceValue,
                    'Zoom',
                    'Zoom In Vertically'
                ).setSubPage(zoomSubPage)
                page.makeCommandBinding(
                    directions.left.mSurfaceValue,
                    'Navigate',
                    'Left'
                ).setSubPage(navigateSubPage)
                page.makeCommandBinding(
                    directions.left.mSurfaceValue,
                    'Zoom',
                    'Zoom Out'
                ).setSubPage(zoomSubPage)
                page.makeCommandBinding(
                    directions.right.mSurfaceValue,
                    'Navigate',
                    'Right'
                ).setSubPage(navigateSubPage)
                page.makeCommandBinding(
                    directions.right.mSurfaceValue,
                    'Zoom',
                    'Zoom In'
                ).setSubPage(zoomSubPage)
                page.makeActionBinding(directions.center.mSurfaceValue, subPageArea.mAction.mNext)
            }
            exports.bindDirectionButtons = bindDirectionButtons
            var bindFootControl = function (page, controlSectionElements) {
                // PIN: converted for-of loop to ES5
                for (var i = 0; i < controlSectionElements.footSwitches.length; i++) {
                    var footSwitch = controlSectionElements.footSwitches[i]
                    page.makeCommandBinding(
                        footSwitch.mSurfaceValue,
                        'MIDI Remote',
                        'Open MIDI Remote Mapping Assistant'
                    )
                }
            }
            exports.bindFootControl = bindFootControl

            /***/
        },

        /***/ 775: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.bindEncoders = void 0

            // PIN require('midiremote_api_v1')
            // var midiremote_api_v1_1 = __webpack_require__(419)
            var midiremote_api_v1_1 = require('midiremote_api_v1')

            var config_1 = __webpack_require__(913)
            var Devices_1 = __webpack_require__(554)
            var midi_1 = __webpack_require__(208)
            var util_1 = __webpack_require__(882)
            var bindEncoders = function (
                page,
                devices,
                mixerBankChannels,
                segmentDisplayManager,
                globalBooleanVariables
            ) {
                var channelElements = devices.flatMap(function (device) {
                    return device.channelElements
                })
                /** An array containing the control buttons of each main device */
                var deviceButtons = devices
                    .filter(function (device) {
                        return device instanceof Devices_1.MainDevice
                    })
                    .flatMap(function (device) {
                        return device.controlSectionElements.buttons
                    })
                // Bind encoder display modes to custom host values
                // const channelEncoderDisplayModeHostValues = channelElements.map((channel, channelIndex) => {
                //     const hostValue = page.mCustom.makeSettableHostValueVariable(
                //         `encoderDisplayMode${channelIndex}`
                //     );
                //     page.makeValueBinding(channel.encoder.mDisplayModeValue, hostValue);
                //     return hostValue;
                // });
                var subPageArea = page.makeSubPageArea('Encoders')
                var bindEncoderAssignments = function (assignmentButtonId, pages) {
                    var encoderPageSize = channelElements.length
                    // Split each encoder page with more encoder assignments than physical encoders into multiple
                    // pages
                    pages = pages.flatMap(function (page) {
                        var assignments = page.assignments
                        if (Array.isArray(assignments) && assignments.length > encoderPageSize) {
                            var chunks = []
                            for (var i = 0; i < assignments.length / encoderPageSize; i++) {
                                chunks.push(
                                    assignments.slice(
                                        i * encoderPageSize,
                                        (i + 1) * encoderPageSize
                                    )
                                )
                            }
                            return chunks.map(function (chunk) {
                                // PIN: converted spread-to-object to ES5
                                return Object.assign(page, { assignments: chunk })
                            })
                        }
                        return page
                    })
                    // Create the corresponding sub pages and bindings for each encoder page
                    var createdSubPages = pages.map(function (_a, encoderPageIndex) {
                        var pageName = _a.name,
                            assignmentsConfig = _a.assignments,
                            areAssignmentsChannelRelated = _a.areAssignmentsChannelRelated
                        var subPageName = ''.concat(pageName, ' ').concat(encoderPageIndex + 1)
                        var subPage = subPageArea.makeSubPage(subPageName)
                        var flipSubPage = subPageArea.makeSubPage(''.concat(subPageName, ' Flip'))
                        // PIN: converted for-of loop to ES5
                        for (var i = 0; i < deviceButtons.length; i++) {
                            var buttons = deviceButtons[i]
                            var flipButton = buttons.flip
                            page.makeActionBinding(
                                flipButton.mSurfaceValue,
                                flipSubPage.mAction.mActivate
                            ).setSubPage(subPage)
                            page.makeActionBinding(
                                flipButton.mSurfaceValue,
                                subPage.mAction.mActivate
                            ).setSubPage(flipSubPage)
                        }
                        var onSubPageActivate = (0, util_1.makeCallbackCollection)(
                            subPage,
                            'mOnActivate'
                        )
                        onSubPageActivate.addCallback(function (context) {
                            segmentDisplayManager.setAssignment(
                                context,
                                pages.length === 1
                                    ? '  '
                                    : ''.concat(encoderPageIndex + 1, '.').concat(pages.length)
                            )
                            // PIN: converted for-of entries() loop to ES5
                            for (
                                var i = 0;
                                i < globalBooleanVariables.isEncoderAssignmentActive.length;
                                i++
                            ) {
                                var assignmentId = i
                                var isActive = globalBooleanVariables.isEncoderAssignmentActive[i]
                                // `runCallbacksInstantly=true` to update the LED(s) right away:
                                isActive.set(context, assignmentButtonId === assignmentId, true)
                            }
                            globalBooleanVariables.isFlipModeActive.set(context, false)
                            globalBooleanVariables.isValueDisplayModeActive.set(context, false)
                        })
                        flipSubPage.mOnActivate = function (context) {
                            // `runCallbacksInstantly=true` to update the LED(s) right away:
                            globalBooleanVariables.isFlipModeActive.set(context, true, true)
                        }
                        var assignments =
                            typeof assignmentsConfig === 'function'
                                ? mixerBankChannels.map(function (channel, channelIndex) {
                                      return assignmentsConfig(channel, channelIndex)
                                  })
                                : assignmentsConfig
                        var _loop_1 = function (i) {
                            var channelIndex = i
                            var element = channelElements[i]
                            var encoder = element.encoder
                            var fader = element.fader
                            var assignment =
                                // PIN: converted spread-to-object to ES5
                                Object.assign(
                                    { displayMode: midi_1.EncoderDisplayMode.SingleDot },
                                    {
                                        encoderValue:
                                            page.mCustom.makeHostValueVariable(
                                                'unassignedEncoderValue'
                                            ),
                                    },
                                    {
                                        pushToggleValue: page.mCustom.makeHostValueVariable(
                                            'unassignedEncoderPushValue'
                                        ),
                                    },
                                    assignments[channelIndex]
                                )
                            // Non-flipped encoder page sub page bindings
                            page.makeValueBinding(
                                encoder.mEncoderValue,
                                assignment.encoderValue
                            ).setSubPage(subPage)
                            if (config_1.config.enableAutoSelect) {
                                page.makeValueBinding(
                                    fader.mTouchedValue,
                                    mixerBankChannels[channelIndex].mValue.mSelected
                                )
                                    .filterByValue(1)
                                    .setSubPage(subPage)
                            }
                            if (assignment.pushToggleValue) {
                                page.makeValueBinding(
                                    encoder.mPushValue,
                                    assignment.pushToggleValue
                                )
                                    .setTypeToggle()
                                    .setSubPage(subPage)
                            }
                            // Flipped encoder page sub page bindings
                            page.makeValueBinding(
                                fader.mSurfaceValue,
                                assignment.encoderValue
                            ).setSubPage(flipSubPage)
                            if (config_1.config.enableAutoSelect) {
                                page.makeValueBinding(
                                    fader.mTouchedValue,
                                    mixerBankChannels[channelIndex].mValue.mSelected
                                )
                                    // Don't select mixer channels on touch when a fader's value does not belong to its
                                    // mixer channel
                                    .filterByValue(+areAssignmentsChannelRelated)
                                    .setSubPage(flipSubPage)
                            }
                            onSubPageActivate.addCallback(function (context) {
                                encoder.mDisplayModeValue.setProcessValue(
                                    context,
                                    assignment.displayMode
                                )
                                // TODO https://forums.steinberg.net/t/831123
                                // channelEncoderDisplayModeHostValues[channelIndex].setProcessValue(
                                //   context,
                                //   assignment.displayMode
                                // );
                            })
                        }
                        // PIN: converted for-of entries() loop to ES5
                        for (var i = 0; i < channelElements.length; i++) {
                            _loop_1(i)
                        }
                        return { subPage: subPage, flipSubPage: flipSubPage }
                    })
                    // Bind encoder assign buttons to cycle through sub pages in a round-robin fashion
                    // PIN: converted for-of loop to ES5
                    for (var i = 0; i < deviceButtons.length; i++) {
                        var buttons = deviceButtons[i]
                        var encoderAssignButtonValue =
                            buttons.encoderAssign[assignmentButtonId].mSurfaceValue
                        page.makeActionBinding(
                            encoderAssignButtonValue,
                            createdSubPages[0].subPage.mAction.mActivate
                        )
                        var previousSubPages = createdSubPages[0]
                        // PIN: converted for-of loop to ES5
                        for (var i_1 = 0; i_1 < createdSubPages.length; i_1++) {
                            var currentSubPages = createdSubPages[i_1]
                            page.makeActionBinding(
                                encoderAssignButtonValue,
                                currentSubPages.subPage.mAction.mActivate
                            ).setSubPage(previousSubPages.subPage)
                            page.makeActionBinding(
                                encoderAssignButtonValue,
                                currentSubPages.subPage.mAction.mActivate
                            ).setSubPage(previousSubPages.flipSubPage)
                            previousSubPages = currentSubPages
                        }
                    }
                    return createdSubPages
                }
                // Defining Pan first so it is activated by default
                bindEncoderAssignments(1, [
                    {
                        name: 'Pan',
                        assignments: function (mixerBankChannel) {
                            return {
                                displayMode: midi_1.EncoderDisplayMode.BoostOrCut,
                                encoderValue: mixerBankChannel.mValue.mPan,
                                pushToggleValue: mixerBankChannel.mValue.mMonitorEnable,
                            }
                        },
                        areAssignmentsChannelRelated: true,
                    },
                ])
                bindEncoderAssignments(0, [
                    {
                        name: 'Monitor',
                        assignments: function (mixerBankChannel) {
                            return {
                                displayMode: midi_1.EncoderDisplayMode.Wrap,
                                encoderValue: mixerBankChannel.mValue.mMonitorEnable,
                                pushToggleValue: mixerBankChannel.mValue.mMonitorEnable,
                            }
                        },
                        areAssignmentsChannelRelated: true,
                    },
                    {
                        name: 'Input Gain',
                        assignments: function (mixerBankChannel) {
                            return {
                                displayMode: midi_1.EncoderDisplayMode.BoostOrCut,
                                encoderValue: mixerBankChannel.mPreFilter.mGain,
                            }
                        },
                        areAssignmentsChannelRelated: true,
                    },
                    {
                        name: 'Input Phase',
                        assignments: function (mixerBankChannel) {
                            return {
                                displayMode: midi_1.EncoderDisplayMode.Wrap,
                                encoderValue: mixerBankChannel.mPreFilter.mPhaseSwitch,
                            }
                        },
                        areAssignmentsChannelRelated: true,
                    },
                ])
                var mChannelEQ = page.mHostAccess.mTrackSelection.mMixerChannel.mChannelEQ
                bindEncoderAssignments(2, [
                    {
                        name: 'EQ',
                        assignments: [
                            mChannelEQ.mBand1,
                            mChannelEQ.mBand2,
                            mChannelEQ.mBand3,
                            mChannelEQ.mBand4,
                        ].flatMap(function (band) {
                            return [
                                {
                                    displayMode: midi_1.EncoderDisplayMode.SingleDot,
                                    encoderValue: band.mFreq,
                                    pushToggleValue: band.mOn,
                                },
                                {
                                    displayMode: midi_1.EncoderDisplayMode.BoostOrCut,
                                    encoderValue: band.mGain,
                                    pushToggleValue: band.mOn,
                                },
                                {
                                    displayMode: midi_1.EncoderDisplayMode.SingleDot,
                                    encoderValue: band.mQ,
                                    pushToggleValue: band.mOn,
                                },
                                {
                                    displayMode: midi_1.EncoderDisplayMode.SingleDot,
                                    encoderValue: band.mFilterType,
                                    pushToggleValue: band.mOn,
                                },
                            ]
                        }),
                        areAssignmentsChannelRelated: false,
                    },
                ])
                var mSends = page.mHostAccess.mTrackSelection.mMixerChannel.mSends
                var sendSlotsCount = midiremote_api_v1_1.mDefaults.getNumberOfSendSlots()
                bindEncoderAssignments(3, [
                    {
                        name: 'Sends',
                        // PIN: converted spread-to-array to ES5 with concat and typehint
                        assignments: [].concat(
                            // concat two arrays
                            (0, util_1.createElements)(sendSlotsCount, function (slotIndex) {
                                var sendSlot = mSends.getByIndex(slotIndex)
                                return {
                                    encoderValue: sendSlot.mLevel,
                                    displayMode: midi_1.EncoderDisplayMode.SingleDot,
                                    pushToggleValue: sendSlot.mOn,
                                }
                            }),
                            (0, util_1.createElements)(sendSlotsCount, function (slotIndex) {
                                var sendSlot = mSends.getByIndex(slotIndex)
                                return {
                                    encoderValue: sendSlot.mPrePost,
                                    displayMode: midi_1.EncoderDisplayMode.Wrap,
                                    pushToggleValue: sendSlot.mPrePost,
                                }
                            })
                        ),
                        areAssignmentsChannelRelated: false,
                    },
                ])
                var effectsViewer =
                    page.mHostAccess.mTrackSelection.mMixerChannel.mInsertAndStripEffects
                        .makeInsertEffectViewer('Inserts')
                        .followPluginWindowInFocus()
                var parameterBankZone = effectsViewer.mParameterBankZone
                var pluginSubPages = bindEncoderAssignments(4, [
                    {
                        name: 'Plugin',
                        assignments: function () {
                            var parameterValue = parameterBankZone.makeParameterValue()
                            return {
                                encoderValue: parameterValue,
                                displayMode: midi_1.EncoderDisplayMode.SingleDot,
                            }
                        },
                        areAssignmentsChannelRelated: false,
                    },
                ])[0]
                // PIN: converted for-of loop to ES5
                for (var i = 0; i < deviceButtons.length; i++) {
                    var buttons = deviceButtons[i]
                    // PIN: converted for-of-multi loop to ES5
                    for (
                        var i_2 = 0, arr = [pluginSubPages.subPage, pluginSubPages.flipSubPage];
                        i_2 < arr.length;
                        i_2++
                    ) {
                        var subPage = arr[i_2]
                        page.makeActionBinding(
                            buttons.encoderAssign[4].mSurfaceValue,
                            parameterBankZone.mAction.mNextBank
                        ).setSubPage(subPage)
                    }
                }
                var mQuickControls = page.mHostAccess.mTrackSelection.mMixerChannel.mQuickControls
                var mStripEffects =
                    page.mHostAccess.mTrackSelection.mMixerChannel.mInsertAndStripEffects
                        .mStripEffects
                bindEncoderAssignments(5, [
                    {
                        name: 'Quick Controls',
                        assignments: function (mixerBankChannel, channelIndex) {
                            return {
                                encoderValue: mQuickControls.getByIndex(channelIndex),
                                displayMode: midi_1.EncoderDisplayMode.SingleDot,
                            }
                        },
                        areAssignmentsChannelRelated: false,
                    },
                    {
                        name: 'Channel Strip',
                        assignments: [
                            mStripEffects.mGate,
                            mStripEffects.mCompressor,
                            mStripEffects.mTools,
                            mStripEffects.mSaturator,
                            mStripEffects.mLimiter,
                        ].flatMap(function (stripEffect) {
                            return (0, util_1.createElements)(8, function () {
                                var parameterValue =
                                    stripEffect.mParameterBankZone.makeParameterValue()
                                return {
                                    encoderValue: parameterValue,
                                    displayMode: midi_1.EncoderDisplayMode.SingleDot,
                                    pushToggleValue: stripEffect.mBypass,
                                }
                            })
                        }),
                        areAssignmentsChannelRelated: false,
                    },
                ])
            }
            exports.bindEncoders = bindEncoders

            /***/
        },

        /***/ 354: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.makeHostMapping = void 0
            var config_1 = __webpack_require__(913)
            var Devices_1 = __webpack_require__(554)
            var util_1 = __webpack_require__(882)
            var control_1 = __webpack_require__(952)
            var encoders_1 = __webpack_require__(775)
            var makeHostMapping = function (
                page,
                devices,
                segmentDisplayManager,
                globalBooleanVariables,
                activationCallbacks
            ) {
                // Mixer channels
                var mixerBankZone = page.mHostAccess.mMixConsole
                    .makeMixerBankZone()
                    .excludeInputChannels()
                    .excludeOutputChannels()
                    .setFollowVisibility(true) // TODO MixConsole Visibility Presets are not taken into account here
                var mixerBankChannels = devices
                    .flatMap(function (device) {
                        return device.channelElements
                    })
                    .map(function (channelElements) {
                        var channel = mixerBankZone.makeMixerBankChannel()
                        // Scribble strips
                        page.makeValueBinding(
                            channelElements.scribbleStrip.trackTitle,
                            channel.mValue.mSelected
                        )
                        // VU Meter
                        page.makeValueBinding(channelElements.vuMeter, channel.mValue.mVUMeter)
                        // Buttons
                        var buttons = channelElements.buttons
                        page.makeValueBinding(
                            buttons.record.mSurfaceValue,
                            channel.mValue.mRecordEnable
                        ).setTypeToggle()
                        page.makeValueBinding(
                            buttons.solo.mSurfaceValue,
                            channel.mValue.mSolo
                        ).setTypeToggle()
                        page.makeValueBinding(
                            buttons.mute.mSurfaceValue,
                            channel.mValue.mMute
                        ).setTypeToggle()
                        page.makeValueBinding(
                            buttons.select.mSurfaceValue,
                            channel.mValue.mSelected
                        ).setTypeToggle()
                        // Fader
                        page.makeValueBinding(
                            channelElements.fader.mSurfaceValue,
                            channel.mValue.mVolume
                        )
                        return channel
                    })
                ;(0, encoders_1.bindEncoders)(
                    page,
                    devices,
                    mixerBankChannels,
                    segmentDisplayManager,
                    globalBooleanVariables
                )
                devices.forEach(function (device) {
                    if (device instanceof Devices_1.MainDevice) {
                        var controlSectionElements = device.controlSectionElements
                        // 7-segment display
                        ;(0, control_1.bindSegmentDisplaySection)(page, controlSectionElements)
                        // Main fader
                        page.makeValueBinding(
                            controlSectionElements.mainFader.mSurfaceValue,
                            config_1.config.mapMainFaderToControlRoom
                                ? page.mHostAccess.mControlRoom.mMainChannel.mLevelValue
                                : page.mHostAccess.mMixConsole
                                      .makeMixerBankZone()
                                      .includeOutputChannels()
                                      .makeMixerBankChannel().mValue.mVolume
                        )
                        // 1-8, F1-F8, Modify, Automation, Utility, Transport, Navigation
                        ;(0, control_1.bindControlButtons)(
                            page,
                            controlSectionElements,
                            device.channelElements,
                            mixerBankZone
                        )
                        // Directions
                        ;(0, control_1.bindDirectionButtons)(page, controlSectionElements)
                        // Jog wheel
                        ;(0, control_1.bindJogWheelSection)(page, controlSectionElements)
                        // Foot Control
                        ;(0, control_1.bindFootControl)(page, controlSectionElements)
                    }
                })
                // The `mTransportLocator.mOnChange` callback is first invoked before the device driver is
                // activated. The workaround below defers the first time display update until the driver is
                // activated.
                var isDriverActivated = new util_1.ContextStateVariable(false)
                var initialTransportLocatorPosition = new util_1.ContextStateVariable({
                    time: '',
                    timeFormat: '',
                })
                activationCallbacks.addCallback(function (context) {
                    isDriverActivated.set(context, true)
                    var _a = initialTransportLocatorPosition.get(context),
                        time = _a.time,
                        timeFormat = _a.timeFormat
                    segmentDisplayManager.updateTime(context, time, timeFormat)
                    // TODO: This is a workaround forcing the Beats/SMPTE LEDs to be set. It is required since
                    // calling `myHostValue.setProcessValue()` doesn't trigger `mOnProcessValueChange` when called
                    // on device driver activation.
                    devices.forEach(function (device) {
                        if (device instanceof Devices_1.MainDevice) {
                            var output = device.ports.output
                            output.sendNoteOn(context, 0x71, +/^(?:[\d]+\:){3}[\d]+$/.test(time)) // SMPTE LED
                            output.sendNoteOn(
                                context,
                                0x72,
                                +/^(?:[ \d]+\.){2} \d\.[\d ]+$/.test(time)
                            ) // Beats LED
                        }
                    })
                })
                // Time display – once for all devices; individual devices are handled by the
                // SegmentDisplayManager
                page.mHostAccess.mTransport.mTimeDisplay.mPrimary.mTransportLocator.mOnChange =
                    function (context, mapping, time, timeFormat) {
                        if (!isDriverActivated.get(context)) {
                            initialTransportLocatorPosition.set(context, {
                                time: time,
                                timeFormat: timeFormat,
                            })
                        } else {
                            segmentDisplayManager.updateTime(context, time, timeFormat)
                        }
                    }
            }
            exports.makeHostMapping = makeHostMapping

            /***/
        },

        /***/ 435: /***/ function (__unused_webpack_module, exports) {
            exports.makePortPair = void 0
            var nextPortPairIndex = 1
            var makePortPair = function (driver, isExtender) {
                var name = isExtender ? 'Extender' : 'Main'
                var portPairIndex = nextPortPairIndex++
                var input = driver.mPorts.makeMidiInput(
                    'Input '.concat(portPairIndex, ' - ').concat(name)
                )
                var output = driver.mPorts.makeMidiOutput(
                    'Output '.concat(portPairIndex, ' - ').concat(name)
                )
                output.sendSysex = function (context, messageBody) {
                    output.sendMidi(
                        context,
                        // PIN: converted spread-to-array to ES5 with concat and typehint
                        [].concat(0xf0, 0x00, 0x00, 0x66, 0x14 + +isExtender, messageBody, 0xf7)
                    )
                }
                output.sendNoteOn = function (context, pitch, velocity) {
                    output.sendMidi(context, [0x90, pitch, +Boolean(velocity) * 0xff])
                }
                return { input: input, output: output }
            }
            exports.makePortPair = makePortPair

            /***/
        },

        /***/ 89: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.setupDeviceConnection = void 0
            var util_1 = __webpack_require__(882)
            var SegmentDisplayManager_1 = __webpack_require__(369)
            var setupDeviceConnection = function (driver, devices) {
                var activationCallbacks = (0, util_1.makeCallbackCollection)(driver, 'mOnActivate')
                var segmentDisplayManager = new SegmentDisplayManager_1.SegmentDisplayManager(
                    devices
                )
                driver.mOnDeactivate = function (context) {
                    segmentDisplayManager.clearAssignment(context)
                    segmentDisplayManager.clearTime(context)
                    devices.forEach(function (device) {
                        device.lcdManager.clearDisplays(context)
                        var output = device.ports.output
                        // Reset via `output.sendSysex(context, [0x63])` is not recognized by the X-Touch :(
                        // Reset faders
                        for (var faderIndex = 0; faderIndex < 9; faderIndex++) {
                            output.sendMidi(context, [0xe0 + faderIndex, 0, 0])
                        }
                        // Reset LEDs
                        for (var note = 0; note < 0x76; note++) {
                            output.sendNoteOn(context, note, 0)
                        }
                        // Reset encoder LED rings
                        for (var encoderIndex = 0; encoderIndex < 8; encoderIndex++) {
                            output.sendMidi(context, [0xb0, 0x30 + encoderIndex, 0])
                        }
                    })
                }
                return {
                    activationCallbacks: activationCallbacks,
                    segmentDisplayManager: segmentDisplayManager,
                }
            }
            exports.setupDeviceConnection = setupDeviceConnection

            /***/
        },

        /***/ 208: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.bindDeviceToMidi =
                exports.makeGlobalBooleanVariables =
                exports.EncoderDisplayMode =
                    void 0
            var Devices_1 = __webpack_require__(554)
            var util_1 = __webpack_require__(882)
            var LcdManager_1 = __webpack_require__(105)
            var EncoderDisplayMode
            ;(function (EncoderDisplayMode) {
                EncoderDisplayMode[(EncoderDisplayMode['SingleDot'] = 0)] = 'SingleDot'
                EncoderDisplayMode[(EncoderDisplayMode['BoostOrCut'] = 1)] = 'BoostOrCut'
                EncoderDisplayMode[(EncoderDisplayMode['Wrap'] = 2)] = 'Wrap'
                EncoderDisplayMode[(EncoderDisplayMode['Spread'] = 3)] = 'Spread'
            })(
                (EncoderDisplayMode =
                    exports.EncoderDisplayMode || (exports.EncoderDisplayMode = {}))
            )
            /** Declares some global context-dependent variables that (may) affect multiple devices */
            var makeGlobalBooleanVariables = function (surface) {
                return {
                    areMotorsActive: new util_1.GlobalBooleanVariable(surface),
                    isValueDisplayModeActive: new util_1.GlobalBooleanVariable(surface),
                    isEncoderAssignmentActive: (0, util_1.createElements)(6, function () {
                        return new util_1.GlobalBooleanVariable(surface)
                    }),
                    isFlipModeActive: new util_1.GlobalBooleanVariable(surface),
                }
            }
            exports.makeGlobalBooleanVariables = makeGlobalBooleanVariables
            var bindDeviceToMidi = function (
                device,
                globalBooleanVariables,
                activationCallbacks,
                _a
            ) {
                var setTimeout = _a.setTimeout
                var ports = device.ports
                function bindFader(ports, fader, faderIndex) {
                    fader.mSurfaceValue.mMidiBinding
                        .setInputPort(ports.input)
                        .bindToPitchBend(faderIndex)
                    fader.mTouchedValue.mMidiBinding
                        .setInputPort(ports.input)
                        .bindToNote(0, 104 + faderIndex)
                    fader.mTouchedValueInternal.mMidiBinding
                        .setInputPort(ports.input)
                        .bindToNote(0, 104 + faderIndex)
                    var sendValue = function (context, value) {
                        value *= 0x3fff
                        ports.output.sendMidi(context, [
                            0xe0 + faderIndex,
                            value & 0x7f,
                            value >> 7,
                        ])
                    }
                    var isFaderTouched = new util_1.ContextStateVariable(false)
                    fader.mTouchedValueInternal.mOnProcessValueChange = function (context, value) {
                        var isFaderTouchedValue = Boolean(value)
                        isFaderTouched.set(context, isFaderTouchedValue)
                        if (!isFaderTouchedValue) {
                            sendValue(context, lastFaderValue.get(context))
                        }
                    }
                    var forceUpdate = new util_1.ContextStateVariable(true)
                    var lastFaderValue = new util_1.ContextStateVariable(0)
                    fader.mSurfaceValue.mOnProcessValueChange = function (
                        context,
                        newValue,
                        difference
                    ) {
                        // Prevent identical messages to reduce fader noise
                        if (
                            globalBooleanVariables.areMotorsActive.get(context) &&
                            !isFaderTouched.get(context) &&
                            (difference !== 0 ||
                                lastFaderValue.get(context) === 0 ||
                                forceUpdate.get(context))
                        ) {
                            forceUpdate.set(context, false)
                            sendValue(context, newValue)
                        }
                        lastFaderValue.set(context, newValue)
                    }
                    // Set fader to `0` when unassigned
                    fader.mSurfaceValue.mOnTitleChange = function (context, title) {
                        if (title === '') {
                            forceUpdate.set(context, true)
                            fader.mSurfaceValue.setProcessValue(context, 0)
                            // `mOnProcessValueChange` somehow isn't run here on `setProcessValue()`, hence:
                            lastFaderValue.set(context, 0)
                            if (globalBooleanVariables.areMotorsActive.get(context)) {
                                forceUpdate.set(context, false)
                                sendValue(context, 0)
                            }
                        }
                    }
                    globalBooleanVariables.areMotorsActive.addOnChangeCallback(function (
                        context,
                        areMotorsActive
                    ) {
                        if (areMotorsActive) {
                            sendValue(context, lastFaderValue.get(context))
                        }
                    })
                }
                var _loop_1 = function (i) {
                    var channelIndex = i
                    var channel = device.channelElements[i]
                    // Push Encoder
                    channel.encoder.mEncoderValue.mMidiBinding
                        .setInputPort(ports.input)
                        .bindToControlChange(0, 16 + channelIndex)
                        .setTypeRelativeSignedBit()
                    channel.encoder.mPushValue.mMidiBinding
                        .setInputPort(ports.input)
                        .bindToNote(0, 32 + channelIndex)
                    channel.encoder.mEncoderValue.mOnProcessValueChange = function (
                        context,
                        newValue
                    ) {
                        var displayMode = channel.encoder.mDisplayModeValue.getProcessValue(context)
                        var isCenterLedOn =
                            newValue === (displayMode === EncoderDisplayMode.Spread ? 0 : 0.5)
                        var position =
                            1 +
                            Math.round(
                                newValue * (displayMode === EncoderDisplayMode.Spread ? 5 : 10)
                            )
                        ports.output.sendMidi(context, [
                            0xb0,
                            0x30 + channelIndex,
                            (+isCenterLedOn << 6) + (displayMode << 4) + position,
                        ])
                    }
                    // Scribble Strip
                    var currentParameterName = new util_1.ContextStateVariable('')
                    var currentDisplayValue = new util_1.ContextStateVariable('')
                    var isLocalValueModeActive = new util_1.ContextStateVariable(false)
                    var updateDisplay = function (context) {
                        device.lcdManager.setChannelText(
                            context,
                            0,
                            channelIndex,
                            isLocalValueModeActive.get(context) ||
                                globalBooleanVariables.isValueDisplayModeActive.get(context)
                                ? currentDisplayValue.get(context)
                                : currentParameterName.get(context)
                        )
                    }
                    channel.encoder.mEncoderValue.mOnDisplayValueChange = function (
                        context,
                        value
                    ) {
                        var _a
                        value =
                            (_a = {
                                // French
                                Éteint: 'Eteint',
                                // Japanese
                                オン: 'On',
                                オフ: 'Off',
                                // Russian
                                'Вкл.': 'On',
                                'Выкл.': 'Off',
                                // Chinese
                                开: 'On',
                                关: 'Off',
                            }[value]) !== null && _a !== void 0
                                ? _a
                                : value
                        currentDisplayValue.set(
                            context,
                            LcdManager_1.LcdManager.centerString(
                                LcdManager_1.LcdManager.abbreviateString(
                                    LcdManager_1.LcdManager.stripNonAsciiCharacters(value)
                                )
                            )
                        )
                        isLocalValueModeActive.set(context, true)
                        updateDisplay(context)
                        setTimeout(
                            context,
                            'updateDisplay'.concat(channelIndex),
                            function (context) {
                                isLocalValueModeActive.set(context, false)
                                updateDisplay(context)
                            },
                            1
                        )
                    }
                    channel.encoder.mEncoderValue.mOnTitleChange = function (
                        context,
                        title1,
                        title2
                    ) {
                        var _a
                        // Reset encoder LED ring when channel becomes unassigned
                        if (title1 === '') {
                            ports.output.sendMidi(context, [0xb0, 0x30 + channelIndex, 0])
                        }
                        // Luckily, `mOnTitleChange` runs after `mOnDisplayValueChange`, so setting
                        // `isLocalValueModeActive` to `false` here overwrites the `true` that `mOnDisplayValueChange`
                        // sets
                        isLocalValueModeActive.set(context, false)
                        title2 =
                            (_a = {
                                // English
                                'Pan Left-Right': 'Pan',
                                // German
                                'Pan links/rechts': 'Pan',
                                // Spanish
                                'Pan izquierda-derecha': 'Pan',
                                // French
                                'Pan gauche-droit': 'Pan',
                                'Pré/Post': 'PrePost',
                                // Italian
                                'Pan sinistra-destra': 'Pan',
                                Monitoraggio: 'Monitor',
                                // Japanese
                                左右パン: 'Pan',
                                モニタリング: 'Monitor',
                                レベル: 'Level',
                                // Portuguese
                                'Pan Esquerda-Direita': 'Pan',
                                Nível: 'Nivel',
                                'Pré/Pós': 'PrePost',
                                // Russian
                                'Панорама Лево-Право': 'Pan',
                                Монитор: 'Monitor',
                                Уровень: 'Level',
                                'Пре/Пост': 'PrePost',
                                // Chinese
                                '声像 左-右': 'Pan',
                                监听: 'Monitor',
                                电平: 'Level',
                                '前置/后置': 'PrePost',
                            }[title2]) !== null && _a !== void 0
                                ? _a
                                : title2
                        currentParameterName.set(
                            context,
                            LcdManager_1.LcdManager.centerString(
                                LcdManager_1.LcdManager.abbreviateString(
                                    LcdManager_1.LcdManager.stripNonAsciiCharacters(title2)
                                )
                            )
                        )
                        updateDisplay(context)
                    }
                    globalBooleanVariables.isValueDisplayModeActive.addOnChangeCallback(
                        updateDisplay
                    )
                    channel.scribbleStrip.trackTitle.mOnTitleChange = function (context, title) {
                        device.lcdManager.setChannelText(
                            context,
                            1,
                            channelIndex,
                            LcdManager_1.LcdManager.abbreviateString(
                                LcdManager_1.LcdManager.stripNonAsciiCharacters(title)
                            )
                        )
                    }
                    // VU Meter
                    var lastMeterUpdateTime = 0
                    channel.vuMeter.mOnProcessValueChange = function (context, newValue) {
                        var now = performance.now() // ms
                        if (now - lastMeterUpdateTime > 125) {
                            // Apply a log scale twice to make the meters look more like Cubase's MixConsole meters
                            newValue =
                                1 + Math.log10(0.1 + 0.9 * (1 + Math.log10(0.1 + 0.9 * newValue)))
                            lastMeterUpdateTime = now
                            ports.output.sendMidi(context, [
                                0xd0,
                                (channelIndex << 4) + Math.ceil(newValue * 14 - 0.25),
                            ])
                        }
                    }
                    // Channel Buttons
                    var buttons = channel.buttons
                    // PIN: converted for-of entries() loop to ES5
                    buttons.record.bindToNote(ports, 0 * 8 + channelIndex, true)
                    buttons.solo.bindToNote(ports, 1 * 8 + channelIndex, true)
                    buttons.mute.bindToNote(ports, 2 * 8 + channelIndex, true)
                    buttons.select.bindToNote(ports, 3 * 8 + channelIndex, true)
                    // Fader
                    bindFader(ports, channel.fader, channelIndex)
                }
                // PIN: converted for-of entries() loop to ES5
                for (var i = 0; i < device.channelElements.length; i++) {
                    _loop_1(i)
                }
                // Control Section (X-Touch only)
                if (device instanceof Devices_1.MainDevice) {
                    var elements = device.controlSectionElements
                    var buttons_1 = elements.buttons
                    var motorButton_1 = buttons_1.automation[5]
                    motorButton_1.onSurfaceValueChange.addCallback(function (context, value) {
                        if (value === 1) {
                            globalBooleanVariables.areMotorsActive.toggle(context)
                        }
                    })
                    globalBooleanVariables.areMotorsActive.addOnChangeCallback(function (
                        context,
                        value
                    ) {
                        motorButton_1.mLedValue.setProcessValue(context, +value)
                    })
                    activationCallbacks.addCallback(function (context) {
                        // Workaround for https://forums.steinberg.net/t/831123:
                        ports.output.sendNoteOn(context, 0x4f, 1)
                        // Workaround for encoder assign buttons not being enabled on activation
                        // (https://forums.steinberg.net/t/831123):
                        ports.output.sendNoteOn(context, 0x2a, 1)
                        // PIN: converted for-of-multi loop to ES5
                        for (var i = 0, arr = [0x28, 0x29, 0x2b, 0x2c, 0x2d]; i < arr.length; i++) {
                            var note = arr[i]
                            ports.output.sendNoteOn(context, note, 0)
                        }
                    })
                    bindFader(ports, elements.mainFader, 8)
                    buttons_1.display.onSurfaceValueChange.addCallback(function (context, value) {
                        if (value === 1) {
                            globalBooleanVariables.isValueDisplayModeActive.toggle(context)
                        }
                    })
                    globalBooleanVariables.isFlipModeActive.addOnChangeCallback(function (
                        context,
                        value
                    ) {
                        buttons_1.flip.mLedValue.setProcessValue(context, +value)
                    })
                    var _loop_2 = function (i) {
                        var buttonIndex = i
                        var isActive = globalBooleanVariables.isEncoderAssignmentActive[i]
                        isActive.addOnChangeCallback(function (context, value) {
                            buttons_1.encoderAssign[buttonIndex].mLedValue.setProcessValue(
                                context,
                                +value
                            )
                        })
                    }
                    // PIN: converted for-of entries() loop to ES5
                    for (
                        var i = 0;
                        i < globalBooleanVariables.isEncoderAssignmentActive.length;
                        i++
                    ) {
                        _loop_2(i)
                    }
                    // PIN: converted a large for-of entries() loop to ES5
                    // assignment: 6 = (40 - 45) - page up/down, pan, inserts, eq, fx send
                    ;[0, 3, 1, 4, 2, 5].map(function (index) {
                        return buttons_1.encoderAssign[index].bindToNote(ports, 40 + index)
                    })
                    // buttons: 8 = (46 - 53)
                    buttons_1.navigation.bank.left.bindToNote(ports, 40 + 6)
                    buttons_1.navigation.bank.right.bindToNote(ports, 40 + 7)
                    buttons_1.navigation.channel.left.bindToNote(ports, 40 + 8)
                    buttons_1.navigation.channel.right.bindToNote(ports, 40 + 9)
                    buttons_1.flip.bindToNote(ports, 40 + 10)
                    buttons_1.edit.bindToNote(ports, 40 + 11)
                    buttons_1.display.bindToNote(ports, 40 + 12)
                    buttons_1.timeMode.bindToNote(ports, 40 + 13)
                    // function: 8 = (54 - 61) - F1 - F8
                    for (var i = 0; i < buttons_1.function.length; i++) {
                        buttons_1.function[i].bindToNote(ports, 40 + 14 + i)
                    }
                    // number: 8 = (62 - 69) - Layer2F1 - Layer2F8
                    for (var i = 0; i < buttons_1.number.length; i++) {
                        buttons_1.number[i].bindToNote(ports, 40 + 22 + i)
                    }
                    // modify: 4 = (70 - 73) [0, 1, 7, 8] - Undo, Redo, Save, Revert
                    for (var i = 0; i < buttons_1.modify.length; i++) {
                        buttons_1.modify[i].bindToNote(ports, 40 + 30 + i)
                    }
                    // automation: 6 = (74 - 79) [2, 3, 4, 9, 10, 11] - Read, Write, Sends, Project, Mixer, Motors
                    for (var i = 0; i < buttons_1.utility.length; i++) {
                        buttons_1.utility[i].bindToNote(ports, 40 + 34 + i)
                    }
                    // utility: 4 = (80 - 83) [5, 6, 12, 13] - VST, Master, Solo Defeat, Shift
                    for (var i = 0; i < buttons_1.utility.length; i++) {
                        buttons_1.utility[i].bindToNote(ports, 40 + 40 + i)
                    }
                    // transport: 7 + 5 = (84 - 90 and 91 - 95) - Left, Right, Cycle, Punch, Previous, Add, Next, Rewind, FastFwd, Stop, Play, Record
                    for (var i = 0; i < buttons_1.transport.length; i++) {
                        buttons_1.transport[i].bindToNote(ports, 40 + 44 + i)
                    }
                    // buttons: 6 = (96 - 101) - CursorUp, CursorDown, CursorLeft, CursorRight, Zoom, Scrub,
                    buttons_1.navigation.directions.up.bindToNote(ports, 40 + 56)
                    buttons_1.navigation.directions.down.bindToNote(ports, 40 + 57)
                    buttons_1.navigation.directions.left.bindToNote(ports, 40 + 58)
                    buttons_1.navigation.directions.right.bindToNote(ports, 40 + 59)
                    buttons_1.navigation.directions.center.bindToNote(ports, 40 + 60)
                    buttons_1.scrub.bindToNote(ports, 40 + 61)
                    // Segment Display - handled by the SegmentDisplayManager, except for:
                    var _b = elements.displayLeds,
                        smpte = _b.smpte,
                        beats = _b.beats,
                        solo = _b.solo
                    ;[smpte, beats, solo].forEach(function (lamp, index) {
                        lamp.bindToNote(ports.output, 0x71 + index)
                    })
                    // Jog wheel
                    elements.jogWheel.bindToControlChange(ports.input, 0x3c)
                    // Foot control
                    // PIN: converted for-of entries() loop to ES5
                    for (var i = 0; i < elements.footSwitches.length; i++) {
                        var index = i
                        var footSwitch = elements.footSwitches[i]
                        footSwitch.mSurfaceValue.mMidiBinding
                            .setInputPort(ports.input)
                            .bindToNote(0, 0x66 + index)
                    }
                    elements.expressionPedal.mSurfaceValue.mMidiBinding
                        .setInputPort(ports.input)
                        .bindToControlChange(0, 0x2e)
                        .setTypeAbsolute()
                }
            }
            exports.bindDeviceToMidi = bindDeviceToMidi

            /***/
        },

        /***/ 105: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.LcdManager = void 0
            var abbreviate_1 = __webpack_require__(362)
            var LcdManager = /** @class */ (function () {
                function LcdManager(device) {
                    this.device = device
                }
                /**
                 * Strips any non-ASCII character from the provided string, since devices only support ASCII.
                 **/
                LcdManager.stripNonAsciiCharacters = function (input) {
                    return input.replace(/[^\x00-\x7F]/g, '')
                }
                /**
                 * Given a <= 7 characters long string, returns a left-padded version of it that appears
                 * centered on a 7-character display.
                 */
                LcdManager.centerString = function (input) {
                    if (input.length >= 7) {
                        return input
                    }
                    return LcdManager.makeSpaces(Math.floor((7 - input.length) / 2)) + input
                }
                /**
                 * Given a string, returns an abbreviated version of it consisting of at most 7 characters.
                 */
                LcdManager.abbreviateString = function (input) {
                    if (input.length < 7) {
                        return input
                    }
                    return (0, abbreviate_1.abbreviate)(input, { length: 7 })
                }
                LcdManager.asciiStringToCharArray = function (input) {
                    var chars = []
                    for (var i = 0; i < input.length; i++) {
                        chars.push(input.charCodeAt(i))
                    }
                    return chars
                }
                LcdManager.makeSpaces = function (length) {
                    return Array(length + 1).join(' ')
                }
                LcdManager.prototype.sendText = function (context, startIndex, text) {
                    var chars = LcdManager.asciiStringToCharArray(text.slice(0, 112))
                    this.device.ports.output.sendSysex(
                        context,
                        // PIN: converted spread-to-array to ES5 with concat and typehint
                        [].concat(0x12, startIndex, chars)
                    )
                }
                LcdManager.prototype.setChannelText = function (context, row, channelIndex, text) {
                    while (text.length < 7) {
                        text += ' '
                    }
                    this.sendText(context, row * 56 + (channelIndex % 8) * 7, text)
                }
                LcdManager.prototype.clearDisplays = function (context) {
                    this.sendText(context, 0, LcdManager.makeSpaces(112))
                }
                return LcdManager
            })()
            exports.LcdManager = LcdManager

            /***/
        },

        /***/ 369: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.SegmentDisplayManager = void 0
            var Devices_1 = __webpack_require__(554)
            var util_1 = __webpack_require__(882)
            var SegmentDisplayManager = /** @class */ (function () {
                function SegmentDisplayManager(devices) {
                    this.devices = devices
                    this.segmentValues = (0, util_1.createElements)(12, function () {
                        return new util_1.ContextStateVariable(0x00)
                    })
                    this.lastTimeFormat = new util_1.ContextStateVariable('')
                }
                SegmentDisplayManager.prototype.updateSegment = function (
                    context,
                    segmentId,
                    digit,
                    hasDot
                ) {
                    if (hasDot === void 0) {
                        hasDot = false
                    }
                    var value = 0x30 + (digit !== null && digit !== void 0 ? digit : -0x10)
                    if (hasDot) {
                        value += 0x40
                    }
                    if (value !== this.segmentValues[segmentId].get(context)) {
                        this.segmentValues[segmentId].set(context, value)
                        this.devices.forEach(function (device) {
                            if (device instanceof Devices_1.MainDevice) {
                                device.ports.output.sendMidi(context, [
                                    0xb0,
                                    0x40 + segmentId,
                                    value,
                                ])
                            }
                        })
                    }
                }
                SegmentDisplayManager.prototype.updateSegmentsByString = function (
                    context,
                    lastSegmentId,
                    string
                ) {
                    var currentSegmentId = lastSegmentId
                    var hasCurrentSegmentDot = false
                    // PIN Array.from(string).reverse()
                    var reversedArray = []
                    for (var i = string.length - 1; i >= 0; i--) {
                        reversedArray.push(string.charAt(i))
                    }
                    for (var _i = 0, _a = reversedArray; _i < _a.length; _i++) {
                        var char = _a[_i]
                        if (char === '.' || char === ':') {
                            hasCurrentSegmentDot = true
                        } else {
                            this.updateSegment(
                                context,
                                currentSegmentId,
                                char === ' ' ? null : parseInt(char, 10),
                                hasCurrentSegmentDot
                            )
                            currentSegmentId++
                            hasCurrentSegmentDot = false
                        }
                    }
                }
                /**
                 * Update the 7-segment displays to show the provided `time` string – a string consisting of
                 * numbers, spaces, dots, and colons.
                 */
                SegmentDisplayManager.prototype.updateTime = function (context, time, timeFormat) {
                    if (timeFormat !== this.lastTimeFormat.get(context)) {
                        this.lastTimeFormat.set(context, timeFormat)
                        this.devices.forEach(function (device) {
                            if (device instanceof Devices_1.MainDevice) {
                                var _a = device.controlSectionElements.displayLeds,
                                    smpteLed = _a.smpte,
                                    beatsLed = _a.beats
                                smpteLed.mSurfaceValue.setProcessValue(
                                    context,
                                    +/^(?:[\d]+\:){3}[\d]+$/.test(time)
                                )
                                beatsLed.mSurfaceValue.setProcessValue(
                                    context,
                                    +/^(?:[ \d]+\.){2} \d\.[\d ]+$/.test(time)
                                )
                            }
                        })
                    }
                    // If `time` is separated three times by `.` or `:`, fill it with spaces to match the way digits
                    // are grouped on the device
                    var match = /^([\d ]+[\.\:])([\d ]+)([\.\:])([\d ]+)([\.\:])([\d ]+)$/.exec(
                        time
                    )
                    if (match) {
                        time =
                            match[1] +
                            match[2].padStart(2, ' ') +
                            match[3] +
                            match[4].padStart(2, ' ') +
                            match[5] +
                            match[6].padStart(3, ' ')
                    }
                    this.updateSegmentsByString(
                        context,
                        0,
                        time.padStart(10 + time.replace(/[^\.\:]/g, '').length, ' ')
                    )
                }
                SegmentDisplayManager.prototype.setAssignment = function (context, assignment) {
                    this.updateSegmentsByString(context, 10, assignment)
                }
                SegmentDisplayManager.prototype.clearAssignment = function (context) {
                    for (
                        var i = this.segmentValues.length - 2;
                        i < this.segmentValues.length;
                        i++
                    ) {
                        this.updateSegment(context, i, null)
                    }
                }
                SegmentDisplayManager.prototype.clearTime = function (context) {
                    for (var i = 0; i < this.segmentValues.length - 2; i++) {
                        this.updateSegment(context, i, null)
                    }
                }
                return SegmentDisplayManager
            })()
            exports.SegmentDisplayManager = SegmentDisplayManager

            /***/
        },

        /***/ 562: /***/ function (__unused_webpack_module, exports, __webpack_require__) {
            exports.createControlSectionSurfaceElements =
                exports.createChannelSurfaceElements =
                exports.surfaceHeight =
                exports.controlSectionElementsWidth =
                exports.channelElementsWidth =
                    void 0
            var util_1 = __webpack_require__(882)
            var channelWidth = 5
            exports.channelElementsWidth = 8 * channelWidth
            exports.controlSectionElementsWidth = 25.5
            exports.surfaceHeight = 40
            var makeSquareButton = function (surface, x, y) {
                return surface.makeLedButton(x + 0.25, y, 1.5, 1.5)
            }
            /**
             * Creates and returns the elements for eight channels, starting at the provided x position
             */
            var createChannelSurfaceElements = function (surface, x) {
                return (0, util_1.createElements)(8, function (index) {
                    var currentChannelXPosition = x + index * channelWidth
                    var encoder = surface.makeLedPushEncoder(currentChannelXPosition + 1, 3, 4, 4)
                    return {
                        index: index,
                        encoder: encoder,
                        scribbleStrip: {
                            encoderLabel: surface
                                .makeLabelField(currentChannelXPosition + 1, 7, 4, 2)
                                .relateTo(encoder),
                            trackTitle: surface.makeCustomValueVariable('scribbleStripTrackTitle'),
                        },
                        vuMeter: surface.makeCustomValueVariable('vuMeter'),
                        buttons: {
                            record: makeSquareButton(surface, 2 + currentChannelXPosition, 10),
                            solo: makeSquareButton(surface, 2 + currentChannelXPosition, 12),
                            mute: makeSquareButton(surface, 2 + currentChannelXPosition, 14),
                            select: surface.makeLedButton(2 + currentChannelXPosition, 16, 2, 1.5),
                        },
                        fader: surface.makeTouchSensitiveFader(
                            2 + currentChannelXPosition,
                            20,
                            2,
                            16
                        ),
                    }
                })
            }
            exports.createChannelSurfaceElements = createChannelSurfaceElements
            /**
             * Creates and returns control section elements, starting at the provided x position. "Control
             * section" means everything on an X-Touch that does not belong to one of the eight channels.
             */
            var createControlSectionSurfaceElements = function (surface, x) {
                surface.makeBlindPanel(x + 1, 6, 23.25, 4) // Time display
                var miscControlButtons = (0, util_1.createElements)(21, function (index) {
                    return makeSquareButton(
                        surface,
                        x + 6 + (index % 7) * 2.625,
                        17 + Math.floor(index / 7) * 2.5 + (index < 14 ? 0 : 0.5)
                    )
                })
                var getMiscControlButtons = function (indices) {
                    return indices.map(function (index) {
                        return miscControlButtons[index]
                    })
                }
                return {
                    mainFader: surface.makeTouchSensitiveFader(x + 2, 20, 2, 16),
                    jogWheel: surface.makeJogWheel(x + 13, 29.25, 8.5, 8.5),
                    buttons: {
                        display: makeSquareButton(surface, x + 2, 7.25),
                        timeMode: makeSquareButton(surface, x + 21.75, 7.25),
                        edit: surface.makeLedButton(x + 2, 10.5, 2, 1.5),
                        flip: surface.makeLedButton(x + 2, 16, 2, 1.5),
                        scrub: makeSquareButton(surface, x + 21.75, 28),
                        encoderAssign: (0, util_1.createElements)(6, function (index) {
                            return makeSquareButton(surface, x + 2 + index * 2.25, 3.5)
                        }),
                        number: (0, util_1.createElements)(8, function (index) {
                            return makeSquareButton(surface, x + 6 + index * 2.25, 10.5)
                        }),
                        function: (0, util_1.createElements)(8, function (index) {
                            return makeSquareButton(surface, x + 6 + index * 2.25, 14)
                        }),
                        modify: getMiscControlButtons([0, 1, 7, 8]),
                        automation: getMiscControlButtons([2, 3, 4, 9, 10, 11]),
                        utility: getMiscControlButtons([5, 6, 12, 13]),
                        // PIN: converted spread-to-array to ES5 with concat and typehint
                        transport: [].concat(
                            miscControlButtons.slice(14),
                            (0, util_1.createElements)(5, function (index) {
                                return surface.makeLedButton(x + 6.25 + index * 3.56, 25, 3, 2)
                            })
                        ),
                        navigation: {
                            bank: {
                                left: makeSquareButton(surface, x + 6.75, 28),
                                right: makeSquareButton(surface, x + 9.25, 28),
                            },
                            channel: {
                                left: makeSquareButton(surface, x + 6.75, 30),
                                right: makeSquareButton(surface, x + 9.25, 30),
                            },
                            directions: {
                                left: makeSquareButton(surface, x + 6.25, 34),
                                right: makeSquareButton(surface, x + 9.75, 34),
                                up: makeSquareButton(surface, x + 8, 32.25),
                                center: makeSquareButton(surface, x + 8, 34),
                                down: makeSquareButton(surface, x + 8, 35.75),
                            },
                        },
                    },
                    displayLeds: {
                        smpte: surface.makeDecoratedLamp(x + 21.25, 6.5, 0.75, 0.5),
                        beats: surface.makeDecoratedLamp(x + 21.25, 9, 0.75, 0.5),
                        solo: surface.makeDecoratedLamp(x + 7.75, 7.75, 0.75, 0.5),
                    },
                    expressionPedal: surface.makeKnob(x + 18, 3.5, 1.5, 1.9),
                    footSwitches: (0, util_1.createElements)(2, function (index) {
                        return surface
                            .makeButton(x + 20 + index * 2, 3.5, 1.5, 1.5)
                            .setShapeCircle()
                    }),
                }
            }
            exports.createControlSectionSurfaceElements = createControlSectionSurfaceElements

            /***/
        },

        /***/ 882: /***/ function (__unused_webpack_module, exports) {
            exports.GlobalBooleanVariable =
                exports.ContextStateVariable =
                exports.makeTimerUtils =
                exports.makeCallbackCollection =
                exports.createElements =
                    void 0
            var createElements = function (count, factoryFunction) {
                var elements = []
                for (var index = 0; index < count; index++) {
                    elements.push(factoryFunction(index))
                }
                return elements
            }
            exports.createElements = createElements
            var makeCallbackCollection = function (object, callbackName) {
                var callbacks = []
                var callbackCollection = function () {
                    var args = []
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i]
                    }
                    for (var _a = 0, callbacks_1 = callbacks; _a < callbacks_1.length; _a++) {
                        var callback = callbacks_1[_a]
                        callback.apply(void 0, args)
                    }
                }
                callbackCollection.addCallback = function (callback) {
                    callbacks.push(callback)
                }
                // @ts-expect-error Is not assignable error
                object[callbackName] = callbackCollection
                return callbackCollection
            }
            exports.makeCallbackCollection = makeCallbackCollection
            var isTimerTicking = false
            var timeouts = {}
            /**
             * This is one **hell** of a hack: It resembles the functionality of a global `setTimeout` function
             * by combining a surface variable, a sub page, and an action binding's `makeRepeating()` xD
             */
            var makeTimerUtils = function (page, surface) {
                var timerPage = page.makeSubPageArea('Timer').makeSubPage('Timer Page')
                var triggerVariable = surface.makeCustomValueVariable('timerTrigger')
                page.makeActionBinding(triggerVariable, timerPage.mAction.mActivate).makeRepeating(
                    1,
                    1
                )
                /**
                 * Registers a given callback function (identified by `timeoutId`) to be executed after `timeout`
                 * seconds. Calling `setTimeout` again with the same `intervalId` resets the previously registered
                 * timeout and overrides its callback.
                 */
                var setTimeout = function (context, timeoutId, callback, timeout) {
                    if (!isTimerTicking) {
                        triggerVariable.setProcessValue(context, 1)
                    }
                    timeouts[timeoutId] = {
                        scheduledExecutionTime: performance.now() + timeout * 1000,
                        callback: callback,
                    }
                }
                timerPage.mOnActivate = function (context) {
                    for (var _i = 0, _a = Object.entries(timeouts); _i < _a.length; _i++) {
                        var _b = _a[_i],
                            timeoutId = _b[0],
                            _c = _b[1],
                            scheduledExecutionTime = _c.scheduledExecutionTime,
                            callback = _c.callback
                        if (performance.now() >= scheduledExecutionTime) {
                            callback(context)
                            delete timeouts[timeoutId]
                        }
                    }
                    if (Object.keys(timeouts).length === 0) {
                        isTimerTicking = false
                        triggerVariable.setProcessValue(context, 0)
                    }
                }
                return { setTimeout: setTimeout }
            }
            exports.makeTimerUtils = makeTimerUtils
            var ContextStateVariable = (exports.ContextStateVariable = /** @class */ (function () {
                function ContextStateVariable(initialValue, name) {
                    if (name === void 0) {
                        name = 'contextStateVariable'.concat(ContextStateVariable.nextVariableId++)
                    }
                    this.initialValue = initialValue
                    this.name = name
                }
                ContextStateVariable.prototype.set = function (context, value) {
                    context.setState(this.name, JSON.stringify(value))
                }
                ContextStateVariable.prototype.get = function (context) {
                    var state = context.getState(this.name)
                    return state === '' ? this.initialValue : JSON.parse(state)
                }
                ContextStateVariable.nextVariableId = 0
                return ContextStateVariable
            })())
            var GlobalBooleanVariable = (exports.GlobalBooleanVariable =
                /** @class */ (function () {
                    function GlobalBooleanVariable(surface) {
                        var _this = this
                        this.onChangeCallbacks = []
                        this.surfaceVariable = surface.makeCustomValueVariable(
                            'globalBooleanVariable'.concat(GlobalBooleanVariable.nextVariableId++)
                        )
                        this.surfaceVariable.mOnProcessValueChange = function (context, value) {
                            _this.invokeCallbacks(context, Boolean(value))
                        }
                    }
                    GlobalBooleanVariable.prototype.invokeCallbacks = function (context, value) {
                        for (var _i = 0, _a = this.onChangeCallbacks; _i < _a.length; _i++) {
                            var callback = _a[_i]
                            callback(context, value)
                        }
                    }
                    GlobalBooleanVariable.prototype.addOnChangeCallback = function (callback) {
                        this.onChangeCallbacks.push(callback)
                    }
                    GlobalBooleanVariable.prototype.set = function (
                        context,
                        value,
                        runCallbacksInstantly
                    ) {
                        if (runCallbacksInstantly === void 0) {
                            runCallbacksInstantly = false
                        }
                        this.surfaceVariable.setProcessValue(context, +value)
                        if (runCallbacksInstantly) {
                            this.invokeCallbacks(context, value)
                        }
                    }
                    GlobalBooleanVariable.prototype.get = function (context) {
                        return Boolean(this.surfaceVariable.getProcessValue(context))
                    }
                    GlobalBooleanVariable.prototype.toggle = function (
                        context,
                        runCallbacksInstantly
                    ) {
                        if (runCallbacksInstantly === void 0) {
                            runCallbacksInstantly = false
                        }
                        this.set(context, !this.get(context), runCallbacksInstantly)
                    }
                    GlobalBooleanVariable.nextVariableId = 0
                    return GlobalBooleanVariable
                })())

            /***/
        },

        /***/ 419: /***/ function (module) {
            module.exports = (function () {
                return this['midiremote_api_v1']
            })()

            /***/
        },

        /******/
    }
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {}
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId]
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        )
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
    }
    /******/
    /************************************************************************/
    var __webpack_exports__ = {}
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    !(function () {
        var exports = __webpack_exports__

        // PIN require('midiremote_api_v1')
        // var midiremote_api = __webpack_require__(419)
        var midiremote_api = require('midiremote_api_v1')

        var page_1 = __webpack_require__(508)
        var surface_1 = __webpack_require__(414)
        var Devices_1 = __webpack_require__(554)
        var mapping_1 = __webpack_require__(354)
        var midi_1 = __webpack_require__(208)
        var connection_1 = __webpack_require__(89)
        var util_1 = __webpack_require__(882)
        var driver = midiremote_api.makeDeviceDriver('Icon', 'QCon Pro G2', 'Nerseth')
        var surface = (0, surface_1.decorateSurface)(driver.mSurface)
        // Create devices, i.e., midi ports and surface elements for each physical device
        var devices = new Devices_1.Devices(driver, surface)
        var _a = (0, connection_1.setupDeviceConnection)(driver, devices),
            activationCallbacks = _a.activationCallbacks,
            segmentDisplayManager = _a.segmentDisplayManager
        activationCallbacks.addCallback(function () {
            // @ts-expect-error The script version is filled in by postinstall
            console.log('Activating cubase-icon_qcon_pro_g2-midiremote v' + '1.0.0')
            console.log(
                'A newer version may be available at https://github.com/perivar/cubase-icon_qcon_pro_g2-midiremote'
            )
        })
        var globalBooleanVariables = (0, midi_1.makeGlobalBooleanVariables)(surface)
        activationCallbacks.addCallback(function (context) {
            // Setting `runCallbacksInstantly` to `true` below is a workaround for
            // https://forums.steinberg.net/t/831123.
            globalBooleanVariables.areMotorsActive.set(context, true, true)
        })
        var page = (0, page_1.decoratePage)(driver.mMapping.makePage('Mixer'), surface)
        var timerUtils = (0, util_1.makeTimerUtils)(page, surface)
        // Bind elements to MIDI
        devices.forEach(function (device) {
            ;(0,
            midi_1.bindDeviceToMidi)(device, globalBooleanVariables, activationCallbacks, timerUtils)
        })
        // Map elements to host functions
        ;(0, mapping_1.makeHostMapping)(
            page,
            devices,
            segmentDisplayManager,
            globalBooleanVariables,
            activationCallbacks
        )
    })()
    this.icon_qcon_pro_g2 = __webpack_exports__
    /******/
})()
