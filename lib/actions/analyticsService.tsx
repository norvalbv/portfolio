'use server';

import Mixpanel from 'mixpanel';
import * as Analytics from '@/src/types/analytics';

// These functions are prefixed with As to namespace the AnalyticsService calls

type AsInitializeProps = {
  userId: string;
  debug?: boolean;
};

const mixpanelToken = process.env.MIXPANEL_TOKEN;

if (!mixpanelToken) throw new Error('Invalid/missing MixpanelToken');

const mixpanel = Mixpanel.init(mixpanelToken);

/**
 * Initialises the connection to Mixpanel with the environment token
 */
export const AsInitialize = ({
  userId,
}: AsInitializeProps): void => {
  mixpanel.people.set(userId, {
    $created: new Date().toISOString(),
  });
};

export type AsPageLoadProps = {
  Path: string;
};

type AsGeneralProps = {
  Message?: string;
  Succeeded: boolean;
};

export const AsTrack = (
  event: Analytics.AnalyticsEvent | string,
  props?: AsGeneralProps | AsPageLoadProps
): void => {
  console.log(event, 'event');
  mixpanel.track(event);
};
