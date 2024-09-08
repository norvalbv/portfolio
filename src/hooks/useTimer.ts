import { useEffect, useState } from 'react';

const useTimer = (delay: number): boolean => {
  const [state, setState] = useState(false);

  // Set up the timeout.
  useEffect(() => {
    const id = setTimeout(() => setState(true), delay);

    return () => clearTimeout(id);
  }, [delay]);

  return state;
};

export default useTimer;
