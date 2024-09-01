'use client';

import React, { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import '../../styles/global.css';

// import { ThemeContextProvider } from 'context/theme';

const App = dynamic(() => import('../../App'), { ssr: false });

export const ClientOnly = (): ReactElement => {
  return (
    // <ThemeContextProvider>
    <App />
    // </ThemeContextProvider>
  );
};
