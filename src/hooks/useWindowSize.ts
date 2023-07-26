import { useEffect, useState } from 'react';

const getIsMobile = (): boolean => window.innerWidth <= 768;

type UseWindowSizeReturnType = { isMobile: boolean; windowSize: number };

const useWindowSize = (): UseWindowSizeReturnType => {
  const [windowData, setWindowData] = useState({
    isMobile: getIsMobile(),
    windowSize: window.innerWidth,
  });

  useEffect(() => {
    const onResize = (): void => {
      setWindowData({ isMobile: getIsMobile(), windowSize: window.innerWidth });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return windowData;
};

export default useWindowSize;
