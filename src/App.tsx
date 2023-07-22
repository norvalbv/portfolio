import React, { ReactElement } from 'react';
import Portfolio from 'pages/Portfolio';
import './styles/index.css';
import useTheme from 'hooks/useTheme';
import classNames from 'utils/classNames';
import useScrollToTop from 'hooks/useScrollToTop';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  useScrollToTop();
  return (
    <div className={classNames('relative scroll-smooth', isDarkMode ? 'dark' : '')}>
      <Portfolio />
    </div>
  );
};

export default App;
