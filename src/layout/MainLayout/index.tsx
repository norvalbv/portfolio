import React, { ReactElement } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return (
    <div className="relative min-h-screen bg-light-neutral text-light-text dark:bg-dark-neutral dark:text-dark-text">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
