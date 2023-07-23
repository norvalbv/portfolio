import React, { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from 'layout/MainLayout';
import Landing from 'pages/Landing';
import AboutMe from 'pages/AboutMe';
import ContactMe from 'pages/ContactMe';
import MyWork from 'pages/MyWork';
import MinimalLayout from 'layout/MinimalLayout';
import NotFound from 'pages/NotFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="my-work" element={<MyWork />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
      <Route path="/" element={<MinimalLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);
