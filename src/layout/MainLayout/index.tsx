import React, { ReactElement } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Background from 'components/Background';
import NavBar from './NavBar';
import Footer from './Footer';

const MainLayout = (): ReactElement => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-light-neutral to-[#d9cced] text-light-text dark:from-dark-neutral dark:to-[#180c3a] dark:text-dark-text">
      <ScrollRestoration />
      <Background />
      <NavBar />
      <div className="mx-auto max-w-screen-2xl">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
