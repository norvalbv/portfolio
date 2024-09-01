import { ReactElement } from 'react';
// import useTheme from 'hooks/useTheme';
import { classNames } from 'utils';
// import { Outlet } from 'react-router-dom';
// import useTrackUser from 'hooks/useTrackUser';
import { Toaster } from 'react-hot-toast';

const App = (): ReactElement => {
  // const { isDarkMode } = useTheme();

  const isDarkMode = true;

  // useTrackUser();

  return (
    <div className={classNames('relative scroll-smooth', isDarkMode ? 'dark' : '')}>
      <Toaster />
      {/* <Outlet /> */}
      <div className="bg-red-500">Hello</div>
    </div>
  );
};

export default App;
