import React, { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';
import CodeLink from 'components/CodeLink';
import { PARISN_DESCRIPTION, PARISN_SKILLS, WEATHER_APP_SKILL } from 'constants';
import StyledLink from 'components/StyledLink';
import WeatherApp from '../../../public/WeatherAppHomepage.png';
import ParisnHomepage from '../../../public/ParisnHomepage.png';

const MyWork = (): ReactElement => {
  return (
    <CardWrapper title="My Work">
      <div className="relative mb-10 rounded-t-xl bg-dark-dark/20 p-6 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:bg-dark-dark/30">
        <h3 className="mb-6 text-xl uppercase underline">
          &apos;PARISN&apos; - An e-commerce application with a twist
        </h3>
        <CodeLink link="https://github.com/norvalbv/parisn" className="absolute right-12 top-12" />
        <p>{PARISN_DESCRIPTION}</p>
        <div>
          <img
            src={ParisnHomepage}
            alt="Parisn App Homepage - An ecommerce site."
            className="mx-auto my-6 max-h-[35rem]"
          />
          <p>Built with: {PARISN_SKILLS}</p>
        </div>
      </div>
      <div className="relative my-10 rounded-t-xl bg-dark-dark/20 p-6 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:bg-dark-dark/30">
        <h3 className="mb-6 text-xl uppercase underline">Weather App</h3>
        <CodeLink
          link="https://github.com/norvalbv/cool-weather-app"
          className="absolute right-12 top-12"
        />
        <p>
          A front end weather application built with the&nbsp;
          <StyledLink label="Open Weather Api" link="https://openweathermap.org/api" />
          &nbsp;that uses live data and the ability to search for weather worldwide.
        </p>
        <div>
          <img src={WeatherApp} alt="Weather App Homepage" className="mx-auto my-6 max-h-[35rem]" />
          <p>Built with: {WEATHER_APP_SKILL}</p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default MyWork;
