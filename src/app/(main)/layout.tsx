'use client';

// import GranularIcon from '@/src/components/SVG/Granular';
import ThemedContent from '@/src/components/Theme/ThemeContent';
import { ThemeContextProvider } from '@/src/context/theme';
import Footer from '@/src/app/Layout/Footer';
import NavBar from '@/src/app/Layout/NavBar';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTrackUser from '@/src/hooks/useTrackUser';

type Props = {
  children: ReactElement;
};

const Background = dynamic(() => import('@/src/components/Background'), {
  ssr: false,
});

const MainLayout = ({ children }: Props): ReactElement => {
  useTrackUser();

  return (
    <ThemeContextProvider>
      <ThemedContent>
        <div className="relative min-h-screen bg-gradient-to-br from-white to-[#e0dce6] text-light-text dark:from-dark-neutral dark:to-[#130926] dark:text-dark-text">
          <Background />
          <ToastContainer />
          <NavBar />
          {/* Not sure whether to keep this in for styling, so just removing it temporarily by commenting it out 😪 */}
          {/* <div className="absolute top-0 z-0 h-full w-screen overflow-hidden">
            <GranularIcon />
          </div> */}
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
