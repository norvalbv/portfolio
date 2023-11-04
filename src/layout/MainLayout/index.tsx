import Background from 'components/Background';
import GranularIcon from 'components/SVG/Granular';
import { ReactElement } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const MainLayout = (): ReactElement => {
  const { pathname } = useLocation();

  const regex = /^\/blogs(\/.*)?$/;
  const pageIsBlog = regex.test(pathname);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-[#e0dce6] text-light-text dark:from-dark-neutral dark:to-[#130926] dark:text-dark-text">
      <ScrollRestoration />
      {!pageIsBlog && <Background />}
      <NavBar />
      <div className="absolute top-0 z-0 h-full w-screen overflow-hidden">
        <GranularIcon />
      </div>
      <main className="z-10 mx-auto flex h-full min-h-[calc(100vh-10.25rem)] max-w-screen-2xl flex-col leading-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
