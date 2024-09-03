import type { Metadata, Viewport } from 'next';
import { ReactElement } from 'react';
import '../styles/global.css';

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
  return (
    <html lang="en">
      <body>
        <div id="root">

                    {children}
          
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
