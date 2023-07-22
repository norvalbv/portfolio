import React, { ReactElement } from 'react';
import useTheme from 'hooks/useTheme';
import { classNames } from 'utils';
import { router } from 'routes';
import { RouterProvider } from 'react-router-dom';
import './styles/index.css';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <div className={classNames('relative scroll-smooth', isDarkMode ? 'dark' : '')}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
