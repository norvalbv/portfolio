import mixpanel from 'mixpanel-browser';
import * as Analytics from '@/src/types/analytics';

// These functions are prefixed with As to namespace the AnalyticsService calls

type AsInitializeProps = {
  userId: string;
  debug?: boolean;
  apiHost?: string;
};

const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (!mixpanelToken) throw new Error('Invalid/missing MixpanelToken');

/**
 * Initialises the connection to Mixpanel with the environment token from the
 */
export const AsInitialize = ({
  userId,
  debug = true,
  apiHost = 'https://api-eu.mixpanel.com',
}: AsInitializeProps): void => {
  mixpanel.init(mixpanelToken, {
    debug,
    api_host: apiHost,
    track_pageview: true,
    persistence: 'localStorage',
  });

  mixpanel.identify(userId);
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
  mixpanel.track(event, props);
};
