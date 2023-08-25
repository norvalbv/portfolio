import React, { ReactElement } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Background from 'components/Background';
import NavBar from './NavBar';
import Footer from './Footer';

const MainLayout = (): ReactElement => {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-[#e0dce6] text-light-text dark:from-dark-neutral dark:to-[#130926] dark:text-dark-text">
      <ScrollRestoration />
      {pathname !== '/blog' && <Background />}
      <NavBar />
      <div className="mx-auto max-w-screen-2xl text-base leading-6 lg:text-lg">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
