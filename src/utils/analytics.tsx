import mixpanel from 'mixpanel-browser';
import * as Analytics from '@/src/types/analytics';

// These functions are prefixed with As to namespace the AnalyticsService calls

type AsInitializeProps = {
  userId: string;
  debug?: boolean;
};

const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (!mixpanelToken) throw new Error('Invalid/missing MixpanelToken');

mixpanel.init(mixpanelToken);

/**
 * Initialises the connection to Mixpanel with the environment token
 */
export const AsInitialize = ({ userId }: AsInitializeProps): void => {
  mixpanel.identify(userId);
  mixpanel.people.set({
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
  console.log(event, props, 'event and props');
  mixpanel.track(event, props);
};
