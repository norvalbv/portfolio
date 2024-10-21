import { useEffect } from 'react';
import { AsInitialize, AsPageLoadProps, AsTrack } from '@/src/services/AnalyticsService';
import useGenerateUUID from './useGenerateUUID';
import { usePathname } from 'next/navigation';

const useTrackUser = (): void => {
  const location = usePathname();

  const userId = useGenerateUUID();

  useEffect(() => {
    AsInitialize({ userId });
  }, [userId]);

  useEffect(() => {
    const props: AsPageLoadProps = {
      Path: location,
    };
    AsTrack(location, props);
  }, [location]);
};

export default useTrackUser;
