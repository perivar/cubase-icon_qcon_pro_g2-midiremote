import { logger, MR_MixerBankChannel } from 'midiremote_api_v1';

import { EncoderPage } from './mapping/encoders';
import { mergeOptions } from './utils-es5';

export let debugPageInformation = (
  _debugTitle: string,
  _assignmentButtonId: number,
  _pages: EncoderPage[],
  _mixerBankChannels: MR_MixerBankChannel[]
) => {};
if (process.env['NODE_ENV'] === 'development') {
  debugPageInformation = (
    debugTitle: string,
    assignmentButtonId: number,
    pages: EncoderPage[],
    mixerBankChannels: MR_MixerBankChannel[]
  ) => {
    const pagesDebug = pages.map((pageInfo, encoderPageIndex) => {
      const pageName = pageInfo.name;
      const assignmentsConfig = pageInfo.assignments;
      const areAssignmentsChannelRelated = pageInfo.areAssignmentsChannelRelated;

      const assignments =
        typeof assignmentsConfig === 'function'
          ? mixerBankChannels.map((channel, channelIndex) => {
              const conf = assignmentsConfig(channel, channelIndex);
              return mergeOptions({ __chanIndex: channelIndex }, conf);
            })
          : assignmentsConfig;

      return {
        __pageIndex: encoderPageIndex,
        assignmentButtonId: assignmentButtonId,
        name: pageName,
        assignments: assignments,
        areAssignmentsChannelRelated: areAssignmentsChannelRelated,
      };
    });

    logger.warn(
      `${debugTitle}(${JSON.stringify(
        {
          pagesDebug: pagesDebug,
        },
        null,
        2
      )})`
    );
  };
}
