import Background from 'components/Background';
import GranularIcon from 'components/SVG/Granular';
import type { Metadata, Viewport } from 'next';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import '../styles/global.css';
import Footer from './Footer';
import NavBar from './NavBar';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Portfolio.',
};

export const viewport: Viewport = {
  themeColor: '#1A181E',
};

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props): ReactElement => {
  const pathname = usePathname();

  const regex = /^\/blogs(\/.*)?$/;
  const pageIsBlog = regex.test(pathname || '/');

  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <div className="relative min-h-screen bg-gradient-to-br from-white to-[#e0dce6] text-light-text dark:from-dark-neutral dark:to-[#130926] dark:text-dark-text">
          {!pageIsBlog && <Background />}
          <NavBar />
          <div className="absolute top-0 z-0 h-full w-screen overflow-hidden">
            <GranularIcon />
          </div>
          <main className="z-10 mx-auto flex h-full min-h-[calc(100vh-10.25rem)] max-w-screen-2xl flex-col leading-6">
            {children}
          </main>
          <Footer />
        </div>
        {/* <script type="module" src="/src/index.tsx"></script> */}
        {/* <script>
      var global = global || window;
      var Buffer = Buffer || [];
      var process = process || {
        env: { DEBUG: undefined },
        version: [],
      };
      </script> */}
      </body>
    </html>
  );
};

export default MainLayout;
