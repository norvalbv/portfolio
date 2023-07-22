import React, { ReactElement } from 'react';
import Portfolio from 'pages/Portfolio';
import './styles/index.css';
import useTheme from 'hooks/useTheme';
import classNames from 'utils/classNames';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <div className={classNames('relative', isDarkMode ? 'dark' : '')}>
      <Portfolio />;
    </div>
  );
};

export default App;
