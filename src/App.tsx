import React, { ReactElement } from 'react';
import Portfolio from 'pages/Portfolio';
import './styles/index.css';
import useTheme from 'hooks/useTheme';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Portfolio />;
    </div>
  );
};

export default App;
