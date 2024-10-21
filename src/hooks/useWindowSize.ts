'use client';

import { useEffect, useState } from 'react';

const getIsMobile = (): boolean => typeof window !== 'undefined' && window.innerWidth <= 768;

type UseWindowSizeReturnType = { isMobile: boolean; width: number; height: number };

const useWindowSize = (): UseWindowSizeReturnType => {
  const [windowData, setWindowData] = useState({
    isMobile: getIsMobile(),
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const onResize = (): void => {
      setWindowData({
        isMobile: getIsMobile(),
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return windowData;
};

export default useWindowSize;
