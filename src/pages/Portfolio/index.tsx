import React, { ReactElement } from 'react';
import Intro from 'components/Hero';
import MainLayout from 'layout/MainLayout';
import AboutMe from 'components/AboutMe';
import ContactMe from 'components/ContactMe';
import MyWork from 'components/mywork/featuredprojects/mywork';
import MoreProjects from 'components/mywork/moreprojects/moreprojects';
import Skills from 'components/skills';
import Background from 'components/Background';

const PortfolioPage = (): ReactElement => {
  return (
    <MainLayout>
      <Background />
      <Intro />
      {/* <AboutMe /> */}
      {/* <MyWork /> */}
      {/* <MoreProjects /> */}
      {/* <Skills /> */}
      <ContactMe />
    </MainLayout>
  );
};

export default PortfolioPage;
