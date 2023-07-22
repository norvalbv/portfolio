import { useEffect } from 'react';

const useScrollToTop = (): void => {
  useEffect(() => {
    /* 

    setTimeout to make sure this run after components have rendered. 
    This will help fixing bugs for some views where scroll to top not working properly. 
    
    */
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, []);
};

export default useScrollToTop;
