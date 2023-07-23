import React, { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';
import CodeLink from 'components/CodeLink';
import { PARISN_DESCRIPTION, PARISN_SKILLS, WEATHER_APP_SKILL } from 'constants/index';
import StyledLink from 'components/StyledLink';
import WeatherApp from '../../../public/WeatherAppHomepage.png';
import ParisnHomepage from '../../../public/ParisnHomepage.png';

const MyWork = (): ReactElement => {
  return (
    <CardWrapper
      title="My Work"
      className="top-[4rem] min-w-[20rem] md:w-10/12"
      titleClassName="md:ml-0 ml-6"
    >
      <div className="relative mb-10 rounded-t-xl bg-dark-dark/20 py-6 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:bg-dark-dark/30 md:px-6">
        <h3 className="mb-6 px-6 text-lg uppercase underline md:p-0 lg:text-xl">
          &apos;PARISN&apos; - An e-commerce application with a twist
        </h3>
        <CodeLink
          link="https://github.com/norvalbv/parisn"
          className="my-6 lg:absolute lg:right-12 lg:top-1"
        />
        <p className="px-6 text-sm md:p-0 lg:text-base">{PARISN_DESCRIPTION}</p>
        <a href="https://github.com/norvalbv/parisn" rel="noopener noreferrer" target="_blank">
          <img
            src={ParisnHomepage}
            alt="Parisn App Homepage - An ecommerce site."
            className="mx-auto my-6 max-h-[40rem] min-h-[14em]"
          />
        </a>
        <p className="px-6 text-sm md:p-0 lg:text-base">Built with: {PARISN_SKILLS}</p>
      </div>
      <div className="relative my-10 rounded-t-xl bg-dark-dark/20 py-6 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:bg-dark-dark/30 md:px-6">
        <h3 className="mb-6 px-6 text-lg uppercase underline md:p-0 lg:text-xl">Weather App</h3>
        <CodeLink
          link="https://github.com/norvalbv/cool-weather-app"
          className="my-6 lg:absolute lg:right-12 lg:top-1"
        />
        <p className="px-6 text-sm md:p-0 lg:text-base">
          A front end weather application built with the&nbsp;
          <StyledLink label="Open Weather Api" link="https://openweathermap.org/api" />
          &nbsp;that uses live data and the ability to search for weather worldwide.
        </p>
        <a
          href="https://github.com/norvalbv/cool-weather-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={WeatherApp}
            alt="Weather App Homepage"
            className="mx-auto my-6 max-h-[35rem] min-h-[14em]"
          />
        </a>
        <p className="px-6 text-sm md:p-0 lg:text-base">Built with: {WEATHER_APP_SKILL}</p>
      </div>
    </CardWrapper>
  );
};

export default MyWork;
