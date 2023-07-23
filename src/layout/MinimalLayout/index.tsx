import Background from 'components/Background';
import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const MinimalLayout = (): ReactElement => {
  return (
    <>
      <Background />
      <Outlet />;
    </>
  );
};

export default MinimalLayout;
