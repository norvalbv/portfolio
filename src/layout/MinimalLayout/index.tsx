import React, { ReactElement } from 'react';
import Background from 'components/Background';
import { Outlet } from 'react-router-dom';

const MinimalLayout = (): ReactElement => {
  return (
    <div className="relative min-h-screen bg-light-neutral text-light-text dark:bg-dark-neutral dark:text-dark-text">
      <Background />
      <Outlet />;
    </div>
  );
};

export default MinimalLayout;
