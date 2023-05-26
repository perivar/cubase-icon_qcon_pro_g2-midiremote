import { logger, MR_MixerBankChannel } from "midiremote_api_v1";

import { EncoderPage } from "./mapping/encoders";
import { mergeOptions } from "./utils-es5";

export let debugPageInformation = (
  _debugTitle: string,
  _assignmentButtonId: number,
  _pages: EncoderPage[],
  _mixerBankChannels: MR_MixerBankChannel[]
) => {};
export let debugCallMethod = (_fnName: string, _fn: any, _fnparams: any[]): void => {};

if (process.env["NODE_ENV"] === "development") {
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
        typeof assignmentsConfig === "function"
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

  debugCallMethod = (fnName: string, fn: any, fnparams: any[]): void => {
    const params = fnparams.slice(1);
    logger.info(`Calling ${fnName}(${JSON.stringify({ params: params })})`);

    // is object a function?
    if (typeof fn === "function") {
      fn.apply(null, fnparams);
    }
  };
}
