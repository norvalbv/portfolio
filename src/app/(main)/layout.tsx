'use client';

import Background from 'components/Background';
import GranularIcon from 'components/SVG/Granular';
import { ThemeContextProvider } from 'context/theme';
import Footer from 'layout/MainLayout/Footer';
import NavBar from 'layout/MainLayout/NavBar';
import { ReactElement } from 'react';
import ThemedContent from './theme-content';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props): ReactElement => {
  return (
    <ThemeContextProvider>
      <ThemedContent>
        <div className="relative min-h-screen bg-gradient-to-br from-white to-[#e0dce6] text-light-text dark:from-dark-neutral dark:to-[#130926] dark:text-dark-text">
          <Background />
          <NavBar />
          <div className="absolute top-0 z-0 h-full w-screen overflow-hidden">
            <GranularIcon />
          </div>
          <main className="z-10 mx-auto flex h-full min-h-[calc(100vh-10.25rem)] max-w-screen-2xl flex-col leading-6">
            {children}
          </main>
          <Footer />
        </div>
      </ThemedContent>
    </ThemeContextProvider>
  );
};

export default MainLayout;
