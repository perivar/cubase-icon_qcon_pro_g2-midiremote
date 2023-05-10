import { mDefaults } from 'midiremote_api_v1'
import { SegmentDisplayManager } from 'src/midi/managers/SegmentDisplayManager'
import { ChannelSurfaceElements } from 'src/surface'

import { config } from '../config'
import { DecoratedFactoryMappingPage } from '../decorators/page'
import { Devices, MainDevice } from '../Devices'
import { EncoderDisplayMode, GlobalBooleanVariables } from '../midi'
import { createElements, makeCallbackCollection } from '../util'

export interface EncoderAssignment {
    encoderValue: MR_HostValue
    displayMode: EncoderDisplayMode
    pushToggleValue?: MR_HostValue
}

export type EncoderAssignments =
    | EncoderAssignment[]
    | ((channel: MR_MixerBankChannel, channelIndex: number) => EncoderAssignment)

export interface EncoderPage {
    name?: string
    assignments: EncoderAssignments
    areAssignmentsChannelRelated: boolean
}

export const bindEncoders = (
    page: DecoratedFactoryMappingPage,
    devices: Devices,
    mixerBankChannels: MR_MixerBankChannel[],
    segmentDisplayManager: SegmentDisplayManager,
    globalBooleanVariables: GlobalBooleanVariables
) => {
    const channelElements: ChannelSurfaceElements = devices.flatMap(
        (device) => device.channelElements
    )

    /** An array containing the control buttons of each main device */
    const deviceButtons = devices
        .filter((device) => device instanceof MainDevice)
        .flatMap((device) => (device as MainDevice).controlSectionElements.buttons)

    // Bind encoder display modes to custom host values
    // const channelEncoderDisplayModeHostValues = channelElements.map((channel, channelIndex) => {
    //     const hostValue = page.mCustom.makeSettableHostValueVariable(
    //         `encoderDisplayMode${channelIndex}`
    //     );
    //     page.makeValueBinding(channel.encoder.mDisplayModeValue, hostValue);
    //     return hostValue;
    // });

    const subPageArea = page.makeSubPageArea('Encoders')

    const bindEncoderAssignments = (assignmentButtonId: number, pages: EncoderPage[]) => {
        const encoderPageSize = channelElements.length

        // Split each encoder page with more encoder assignments than physical encoders into multiple
        // pages
        pages = pages.flatMap((page) => {
            const assignments = page.assignments
            if (Array.isArray(assignments) && assignments.length > encoderPageSize) {
                const chunks = []
                for (let i = 0; i < assignments.length / encoderPageSize; i++) {
                    chunks.push(assignments.slice(i * encoderPageSize, (i + 1) * encoderPageSize))
                }
                return chunks.map((chunk) => {
                    // PIN: converted spread-to-object to ES5
                    return Object.assign(page, { assignments: chunk })
                })
            }

            return page
        })

        // Create the corresponding sub pages and bindings for each encoder page
        const createdSubPages = pages.map(
            (
                { name: pageName, assignments: assignmentsConfig, areAssignmentsChannelRelated },
                encoderPageIndex
            ) => {
                const subPageName = `${pageName} ${encoderPageIndex + 1}`
                const subPage = subPageArea.makeSubPage(subPageName)
                const flipSubPage = subPageArea.makeSubPage(`${subPageName} Flip`)

                // PIN: converted for-of loop to ES5
                for (let i = 0; i < deviceButtons.length; i++) {
                    const buttons = deviceButtons[i]
                    const flipButton = buttons.flip

                    page.makeActionBinding(
                        flipButton.mSurfaceValue,
                        flipSubPage.mAction.mActivate
                    ).setSubPage(subPage)
                    page.makeActionBinding(
                        flipButton.mSurfaceValue,
                        subPage.mAction.mActivate
                    ).setSubPage(flipSubPage)
                }

                const onSubPageActivate = makeCallbackCollection(subPage, 'mOnActivate')
                onSubPageActivate.addCallback((context) => {
                    segmentDisplayManager.setAssignment(
                        context,
                        pages.length === 1 ? '  ' : `${encoderPageIndex + 1}.${pages.length}`
                    )

                    // PIN: converted for-of entries() loop to ES5
                    for (
                        let i = 0;
                        i < globalBooleanVariables.isEncoderAssignmentActive.length;
                        i++
                    ) {
                        const assignmentId = i
                        const isActive = globalBooleanVariables.isEncoderAssignmentActive[i]

                        // `runCallbacksInstantly=true` to update the LED(s) right away:
                        isActive.set(context, assignmentButtonId === assignmentId, true)
                    }
                    globalBooleanVariables.isFlipModeActive.set(context, false)
                    globalBooleanVariables.isValueDisplayModeActive.set(context, false)
                })

                flipSubPage.mOnActivate = (context) => {
                    // `runCallbacksInstantly=true` to update the LED(s) right away:
                    globalBooleanVariables.isFlipModeActive.set(context, true, true)
                }

                const assignments =
                    typeof assignmentsConfig === 'function'
                        ? mixerBankChannels.map((channel, channelIndex) =>
                              assignmentsConfig(channel, channelIndex)
                          )
                        : assignmentsConfig

                // PIN: converted for-of entries() loop to ES5
                for (let i = 0; i < channelElements.length; i++) {
                    const channelIndex = i
                    const element = channelElements[i]

                    const encoder = element.encoder
                    const fader = element.fader

                    const assignment: EncoderAssignment =
                        // PIN: converted spread-to-object to ES5
                        Object.assign(
                            { displayMode: EncoderDisplayMode.SingleDot },
                            {
                                encoderValue:
                                    page.mCustom.makeHostValueVariable('unassignedEncoderValue'),
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
                    if (config.enableAutoSelect) {
                        page.makeValueBinding(
                            fader.mTouchedValue,
                            mixerBankChannels[channelIndex].mValue.mSelected
                        )
                            .filterByValue(1)
                            .setSubPage(subPage)
                    }

                    if (assignment.pushToggleValue) {
                        page.makeValueBinding(encoder.mPushValue, assignment.pushToggleValue)
                            .setTypeToggle()
                            .setSubPage(subPage)
                    }

                    // Flipped encoder page sub page bindings
                    page.makeValueBinding(fader.mSurfaceValue, assignment.encoderValue).setSubPage(
                        flipSubPage
                    )
                    if (config.enableAutoSelect) {
                        page.makeValueBinding(
                            fader.mTouchedValue,
                            mixerBankChannels[channelIndex].mValue.mSelected
                        )
                            // Don't select mixer channels on touch when a fader's value does not belong to its
                            // mixer channel
                            .filterByValue(+areAssignmentsChannelRelated)
                            .setSubPage(flipSubPage)
                    }

                    onSubPageActivate.addCallback((context) => {
                        encoder.mDisplayModeValue.setProcessValue(context, assignment.displayMode)
                        // TODO https://forums.steinberg.net/t/831123
                        // channelEncoderDisplayModeHostValues[channelIndex].setProcessValue(
                        //   context,
                        //   assignment.displayMode
                        // );
                    })
                }

                return { subPage, flipSubPage }
            }
        )

        // Bind encoder assign buttons to cycle through sub pages in a round-robin fashion
        // PIN: converted for-of loop to ES5
        for (let i = 0; i < deviceButtons.length; i++) {
            const buttons = deviceButtons[i]
            const encoderAssignButtonValue = buttons.encoderAssign[assignmentButtonId].mSurfaceValue
            page.makeActionBinding(
                encoderAssignButtonValue,
                createdSubPages[0].subPage.mAction.mActivate
            )

            let previousSubPages = createdSubPages[0]
            // PIN: converted for-of loop to ES5
            for (let i = 0; i < createdSubPages.length; i++) {
                const currentSubPages = createdSubPages[i]
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
            assignments: (mixerBankChannel) => ({
                displayMode: EncoderDisplayMode.BoostOrCut,
                encoderValue: mixerBankChannel.mValue.mPan,
                pushToggleValue: mixerBankChannel.mValue.mMonitorEnable,
            }),
            areAssignmentsChannelRelated: true,
        },
    ])

    bindEncoderAssignments(0, [
        {
            name: 'Monitor',
            assignments: (mixerBankChannel) => ({
                displayMode: EncoderDisplayMode.Wrap,
                encoderValue: mixerBankChannel.mValue.mMonitorEnable,
                pushToggleValue: mixerBankChannel.mValue.mMonitorEnable,
            }),
            areAssignmentsChannelRelated: true,
        },
        {
            name: 'Input Gain',
            assignments: (mixerBankChannel) => ({
                displayMode: EncoderDisplayMode.BoostOrCut,
                encoderValue: mixerBankChannel.mPreFilter.mGain,
            }),
            areAssignmentsChannelRelated: true,
        },
        {
            name: 'Input Phase',
            assignments: (mixerBankChannel) => ({
                displayMode: EncoderDisplayMode.Wrap,
                encoderValue: mixerBankChannel.mPreFilter.mPhaseSwitch,
            }),
            areAssignmentsChannelRelated: true,
        },
    ])

    const mChannelEQ = page.mHostAccess.mTrackSelection.mMixerChannel.mChannelEQ
    bindEncoderAssignments(2, [
        {
            name: 'EQ',
            assignments: [
                mChannelEQ.mBand1,
                mChannelEQ.mBand2,
                mChannelEQ.mBand3,
                mChannelEQ.mBand4,
            ].flatMap((band) => [
                {
                    displayMode: EncoderDisplayMode.SingleDot,
                    encoderValue: band.mFreq,
                    pushToggleValue: band.mOn,
                },
                {
                    displayMode: EncoderDisplayMode.BoostOrCut,
                    encoderValue: band.mGain,
                    pushToggleValue: band.mOn,
                },
                {
                    displayMode: EncoderDisplayMode.SingleDot,
                    encoderValue: band.mQ,
                    pushToggleValue: band.mOn,
                },
                {
                    displayMode: EncoderDisplayMode.SingleDot,
                    encoderValue: band.mFilterType,
                    pushToggleValue: band.mOn,
                },
            ]),
            areAssignmentsChannelRelated: false,
        },
    ])

    const mSends = page.mHostAccess.mTrackSelection.mMixerChannel.mSends
    const sendSlotsCount = mDefaults.getNumberOfSendSlots()
    bindEncoderAssignments(3, [
        {
            name: 'Sends',
            // PIN: converted spread-to-array to ES5
            assignments: [].concat(
                // concat two arrays
                createElements(sendSlotsCount, (slotIndex) => {
                    const sendSlot = mSends.getByIndex(slotIndex)
                    return {
                        encoderValue: sendSlot.mLevel,
                        displayMode: EncoderDisplayMode.SingleDot,
                        pushToggleValue: sendSlot.mOn,
                    }
                }),
                createElements(sendSlotsCount, (slotIndex) => {
                    const sendSlot = mSends.getByIndex(slotIndex)
                    return {
                        encoderValue: sendSlot.mPrePost,
                        displayMode: EncoderDisplayMode.Wrap,
                        pushToggleValue: sendSlot.mPrePost,
                    }
                })
            ),

            areAssignmentsChannelRelated: false,
        },
    ])

    const effectsViewer = page.mHostAccess.mTrackSelection.mMixerChannel.mInsertAndStripEffects
        .makeInsertEffectViewer('Inserts')
        .followPluginWindowInFocus()
    const parameterBankZone = effectsViewer.mParameterBankZone
    const [pluginSubPages] = bindEncoderAssignments(4, [
        {
            name: 'Plugin',
            assignments: () => {
                const parameterValue = parameterBankZone.makeParameterValue()
                return {
                    encoderValue: parameterValue,
                    displayMode: EncoderDisplayMode.SingleDot,
                }
            },
            areAssignmentsChannelRelated: false,
        },
    ])

    // PIN: converted for-of loop to ES5
    for (let i = 0; i < deviceButtons.length; i++) {
        const buttons = deviceButtons[i]

        // PIN: converted for-of-multi loop to ES5
        for (
            let i = 0, arr = [pluginSubPages.subPage, pluginSubPages.flipSubPage];
            i < arr.length;
            i++
        ) {
            const subPage = arr[i]
            page.makeActionBinding(
                buttons.encoderAssign[4].mSurfaceValue,
                parameterBankZone.mAction.mNextBank
            ).setSubPage(subPage)
        }
    }

    const mQuickControls = page.mHostAccess.mTrackSelection.mMixerChannel.mQuickControls
    const mStripEffects =
        page.mHostAccess.mTrackSelection.mMixerChannel.mInsertAndStripEffects.mStripEffects

    bindEncoderAssignments(5, [
        {
            name: 'Quick Controls',
            assignments: (mixerBankChannel, channelIndex) => {
                return {
                    encoderValue: mQuickControls.getByIndex(channelIndex),
                    displayMode: EncoderDisplayMode.SingleDot,
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
            ].flatMap((stripEffect) => {
                return createElements(8, () => {
                    const parameterValue = stripEffect.mParameterBankZone.makeParameterValue()
                    return {
                        encoderValue: parameterValue,
                        displayMode: EncoderDisplayMode.SingleDot,
                        pushToggleValue: stripEffect.mBypass,
                    }
                })
            }),
            areAssignmentsChannelRelated: false,
        },
    ])
}
