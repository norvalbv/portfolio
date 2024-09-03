import { ReactElement } from 'react';
import { classNames } from 'utils';
import { Toaster } from 'react-hot-toast';

const App = (): ReactElement => {
  const isDarkMode = true;

  return (
    <div className={classNames('relative scroll-smooth', isDarkMode ? 'dark' : '')}>
      <Toaster />
      {/* <Outlet /> */}
      <div className="bg-red-500">Hello</div>
    </div>
  );
};

export default App;
