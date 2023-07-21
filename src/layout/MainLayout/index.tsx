/* eslint-disable tailwindcss/no-custom-classname */
import React, { ReactElement } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return (
    <div className="dark min-h-screen bg-[#1A181E]">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
