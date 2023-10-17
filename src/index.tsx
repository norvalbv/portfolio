import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from 'context/theme';
import router from 'routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
);

export * from './assets/blogs';
