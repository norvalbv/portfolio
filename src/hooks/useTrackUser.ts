import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AsInitialize, AsPageLoadProps, AsTrack } from 'services/AnalyticsService';
import useGenerateUUID from './useGenerateUUID';

const useTrackUser = (): void => {
  const location = useLocation();

  const userId = useGenerateUUID();

  useEffect(() => {
    AsInitialize({ userId });
  }, [userId]);

  useEffect(() => {
    const props: AsPageLoadProps = {
      Path: location.pathname,
    };
    AsTrack(location.pathname, props);
  }, [location.pathname]);
};

export default useTrackUser;
