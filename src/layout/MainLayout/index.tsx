import React, { ReactElement } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Background from 'components/Background';
import NavBar from './NavBar';
import Footer from './Footer';

const MainLayout = (): ReactElement => {
  return (
    <div className="relative min-h-screen bg-light-neutral text-light-text dark:bg-dark-neutral dark:text-dark-text">
      <ScrollRestoration />
      <NavBar />
      <Background />
      <div className="mx-auto max-w-screen-2xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
