'use client';

import ThemedContent from '@/src/components/Theme/ThemeContent';
import { ThemeContextProvider } from 'context/theme';
import Footer from 'app/Layout/Footer';
import NavBar from 'app/Layout/NavBar';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props): ReactElement => {
  return (
    <ThemeContextProvider>
      <ThemedContent>
        <div className="relative min-h-screen bg-gradient-to-br from-white to-[#e0dce6] text-light-text dark:from-dark-neutral dark:to-[#130926] dark:text-dark-text">
          <NavBar />
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
