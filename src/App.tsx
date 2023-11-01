import { ReactElement } from 'react';
import useTheme from 'hooks/useTheme';
import { classNames } from 'utils';
import { Outlet } from 'react-router-dom';
import './styles/index.css';
import useTrackUser from 'hooks/useTrackUser';
import { Toaster } from 'react-hot-toast';

const App = (): ReactElement => {
  const { isDarkMode } = useTheme();

  useTrackUser();

  return (
    <div className={classNames('relative scroll-smooth', isDarkMode ? 'dark' : '')}>
      <Toaster />
      <Outlet />
    </div>
  );
};

export default App;
