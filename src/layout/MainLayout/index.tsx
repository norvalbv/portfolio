import React, { ReactElement } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout = ({ children }: MainLayoutProps): ReactElement => {
  return (
    <div className="min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
