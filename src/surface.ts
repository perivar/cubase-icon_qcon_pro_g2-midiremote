import { DecoratedDeviceSurface, LedButton } from './decorators/surface';
import { createElements } from './util';

const channelWidth = 5;
export const channelElementsWidth = 8 * channelWidth;
export const controlSectionElementsWidth = 25.5;
export const surfaceHeight = 40;

const makeSquareButton = (surface: DecoratedDeviceSurface, x: number, y: number) => {
    return surface.makeLedButton(x + 0.25, y, 1.5, 1.5);
};

/**
 * Creates and returns the elements for eight channels, starting at the provided x position
 */
export const createChannelSurfaceElements = (surface: DecoratedDeviceSurface, x: number) => {
    return createElements(8, (index) => {
        const currentChannelXPosition = x + index * channelWidth;
        const encoder = surface.makeLedPushEncoder(currentChannelXPosition + 1, 3, 4, 4);

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

            fader: surface.makeTouchSensitiveFader(2 + currentChannelXPosition, 20, 2, 16),
        };
    });
};

export type ChannelSurfaceElements = ReturnType<typeof createChannelSurfaceElements>;

/**
 * Creates and returns control section elements, starting at the provided x position. "Control
 * section" means everything on an X-Touch that does not belong to one of the eight channels.
 */
export const createControlSectionSurfaceElements = (surface: DecoratedDeviceSurface, x: number) => {
    surface.makeBlindPanel(x + 1, 6, 23.25, 4); // Time display

    // create the 3 rows of 7 buttons (21 buttons) below the function buttons
    // modify, automation, utility, transport
    const miscControlButtons = createElements(21, (index) =>
        makeSquareButton(
            surface,
            x + 6 + (index % 7) * 2.625,
            17 + Math.floor(index / 7) * 2.5 + (index < 14 ? 0 : 0.5)
        )
    );
    const getMiscControlButtons = (indices: number[]) =>
        indices.map((index) => miscControlButtons[index]);

    return {
        mainFader: surface.makeTouchSensitiveFader(x + 2, 20, 2, 16),

        jogWheel: surface.makeJogWheel(x + 13, 29.25, 8.5, 8.5),

        buttons: {
            display: makeSquareButton(surface, x + 2, 7.25),
            timeMode: makeSquareButton(surface, x + 21.75, 7.25),
            edit: surface.makeLedButton(x + 2, 10.5, 2, 1.5),
            flip: surface.makeLedButton(x + 2, 16, 2, 1.5),
            scrub: makeSquareButton(surface, x + 21.75, 28),

            // assignment: 6 = (40 - 45) - page up/down, pan, inserts, eq, fx send
            // on x-touch the 6 buttons are labelled: track, pan/surround, eq, send, plug-in, inst
            encoderAssign: createElements(6, (index) =>
                makeSquareButton(surface, x + 2 + index * 2.25, 3.5)
            ),

            // number: 8 = (62 - 69) - Layer2F1 - Layer2F8
            number: createElements(8, (index) =>
                makeSquareButton(surface, x + 6 + index * 2.25, 10.5)
            ),

            // function: 8 = (54 - 61) - F1 - F8
            function: createElements(8, (index) =>
                makeSquareButton(surface, x + 6 + index * 2.25, 14)
            ),

            // modify: 4 = (70 - 73) [0, 1, 7, 8] - Undo, Redo, Save, Revert
            modify: getMiscControlButtons([0, 1, 7, 8]),

            // automation: 6 = (74 - 79) [2, 3, 4, 9, 10, 11] - Read, Write, Sends, Project, Mixer, Motors
            automation: getMiscControlButtons([2, 3, 4, 9, 10, 11]),

            // utility: 4 = (80 - 83) [5, 6, 12, 13] - VST, Master, Solo Defeat, Shift
            utility: getMiscControlButtons([5, 6, 12, 13]),

            // PIN: converted spread-to-array to ES5 with concat and typehint
            // transport: 7 + 5 = (84 - 90 and 91 - 95) - Left, Right, Cycle, Punch, Previous, Add, Next, Rewind, FastFwd, Stop, Play, Record
            transport: ([] as LedButton[]).concat(
                miscControlButtons.slice(14), // skip the first 14 buttons as they are already created
                createElements(5, (index) =>
                    surface.makeLedButton(x + 6.25 + index * 3.56, 25, 3, 2)
                )
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
        footSwitches: createElements(2, (index) =>
            surface.makeButton(x + 20 + index * 2, 3.5, 1.5, 1.5).setShapeCircle()
        ),
    };
};

export type ControlSectionSurfaceElements = ReturnType<typeof createControlSectionSurfaceElements>;
