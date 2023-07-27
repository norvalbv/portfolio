import React from 'react';
import MainLayout from 'layout/MainLayout';
import { AnalyticsEvent } from 'types/analytics';
import Landing from 'pages/Landing';
import AboutMe from 'pages/AboutMe';
import MyWork from 'pages/MyWork';
import ContactMe from 'pages/ContactMe';

export const routes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Landing />,
      name: AnalyticsEvent.LandingPage,
    },
    {
      path: '/about-me',
      element: <AboutMe />,
      name: AnalyticsEvent.About,
    },
    {
      path: '/my-work',
      element: <MyWork />,
      name: AnalyticsEvent.MyWork,
    },
    {
      path: '/contact',
      element: <ContactMe />,
      name: AnalyticsEvent.Contact,
    },
  ],
};
