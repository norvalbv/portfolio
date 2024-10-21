import { AsInitialize, AsTrack } from '@/lib/actions/analyticsService';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import useGenerateUUID from './useGenerateUUID';

const useTrackUser = (): void => {
  const location = usePathname();

  const userId = useGenerateUUID();

  useEffect(() => {
    AsInitialize({ userId });
  }, [userId]);

  useEffect(() => {
    AsTrack(location);
  }, [location]);
};

export default useTrackUser;
