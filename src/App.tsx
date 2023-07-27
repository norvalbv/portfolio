import React, { ReactElement, useEffect } from 'react';
import useTheme from 'hooks/useTheme';
import { classNames } from 'utils';
import { Outlet, useLocation } from 'react-router-dom';
import { AsPageLoadProps, AsTrack } from 'services/AnalyticsService';
import './styles/index.css';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  // useEffect(() => {
  //   const pageName = location.pathname;
  //   const props: AsPageLoadProps = {
  //     Path: location.pathname,
  //   };
  //   AsTrack(pageName, props);
  // }, [location]);

  return (
    <div className={classNames('relative scroll-smooth', isDarkMode ? 'dark' : '')}>
      <Outlet />
    </div>
  );
};

export default App;
