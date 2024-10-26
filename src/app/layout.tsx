import type { Metadata, Viewport } from 'next';
import { Victor_Mono } from 'next/font/google';
import { ReactElement } from 'react';
import '../styles/global.css';

const victor = Victor_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Benji Norval | Full Stack Developer',
  description:
    'Full stack developer specialising in modern web technologies. Explore my projects, skills, and professional journey.',
};

export const viewport: Viewport = {
  themeColor: '#1A181E',
};

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props): ReactElement => {
  return (
    <html lang="en" className={victor.className}>
      <body>
        <div id="root">{children}</div>
        <div id="backdrop" />
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
