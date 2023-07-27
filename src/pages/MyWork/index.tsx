import React, { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';
import CodeLink from 'components/CodeLink';
import { PARISN_DESCRIPTION, PARISN_SKILLS, WEATHER_APP_SKILL } from 'constants/index';
import StyledLink from 'components/StyledLink';
import WeatherApp from 'assets/images/WeatherAppHomepage.webp';
import ParisnHomepage from 'assets/images/ParisnHomepage.webp';

type MyWorkCardProps = {
  title: string;
  subTitle?: string;
  link: string;
  description: string | JSX.Element | JSX.Element[];
  image: { alt: string; image: string };
  skills: string;
};

const MyWorkCard = ({
  title,
  subTitle,
  link,
  description,
  image,
  skills,
}: MyWorkCardProps): ReactElement => {
  return (
    <div className="relative mb-10 rounded-t-xl border-light-text bg-black/20 py-6 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:border-dark-text dark:bg-dark-dark/30 md:px-6">
      <h3 className="px-6 text-lg uppercase underline md:p-0 lg:text-xl">{title}</h3>
      {subTitle && <h2 className="mb-6 mt-2 text-sm uppercase underline lg:text-lg">{subTitle}</h2>}
      <CodeLink link={link} className="my-6 lg:absolute lg:right-12 lg:top-1" />
      <p className="px-6 text-sm md:p-0 lg:text-base">{description}</p>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img
          src={image.image}
          alt={image.alt}
          className="mx-auto my-6 max-h-[40rem] min-h-[14em]"
        />
      </a>
      <p className="px-6 text-sm md:p-0 lg:text-base">Built with: {skills}</p>
    </div>
  );
};

const MyWork = (): ReactElement => {
  return (
    <CardWrapper
      title="My Work"
      className="min-w-[20rem] md:w-10/12"
      titleClassName="md:ml-0 ml-6"
      margin
    >
      <MyWorkCard
        title="PARISN"
        subTitle="An e-commerce application with a twist"
        link="https://github.com/norvalbv/parisn"
        description={PARISN_DESCRIPTION}
        image={{ image: ParisnHomepage, alt: 'Parisn App Homepage - An ecommerce site.' }}
        skills={PARISN_SKILLS}
      />
      <MyWorkCard
        title="Weather App"
        link="https://github.com/norvalbv/cool-weather-app"
        description={
          <>
            A front end weather application built with the&nbsp;
            <StyledLink label="Open Weather Api" link="https://openweathermap.org/api" />
            &nbsp;that uses live data and the ability to search for weather worldwide.
          </>
        }
        image={{ image: WeatherApp, alt: 'Weather App Homepage.' }}
        skills={WEATHER_APP_SKILL}
      />
    </CardWrapper>
  );
};

export default MyWork;
