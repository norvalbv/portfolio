import React, { ReactElement } from 'react';
import Intro from 'components/Hero';
import MainLayout from 'layout/MainLayout';
import ContactMe from 'components/ContactMe';
import Background from 'components/Background';
import MyWork from 'components/MyWork';
import AboutMe from 'components/AboutMe';

const PortfolioPage = (): ReactElement => {
  return (
    <MainLayout>
      <Background />
      <div className="mx-auto max-w-screen-2xl">
        <Intro />
        <AboutMe />
        <MyWork />
        <ContactMe />
      </div>
    </MainLayout>
  );
};

export default PortfolioPage;
