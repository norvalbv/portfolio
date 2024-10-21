import CardWrapper from 'components/CardWrapper';
import CodeLink from 'components/CodeLink';
import StyledLink from 'components/StyledLink';
import {
  PARISN_DESCRIPTION,
  PARISN_SKILLS,
  REACT_BLOGS_DESCRIPTION,
  REACT_BLOGS_SKILLS,
  WEATHER_APP_SKILL,
} from 'constants/index';
import { ReactElement } from 'react';
import { classNames } from 'utils';
import ParisnHomepage from '../../../assets/images/ParisnHomepage.webp';
import WeatherApp from '../../../assets/images/WeatherAppHomepage.webp';

type MyWorkCardProps = {
  title: string;
  subTitle?: string;
  link: { to: string; label?: string };
  description: string | JSX.Element | JSX.Element[];
  image?: { alt: string; image: string };
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
    <div className="before:linear-gradient-background-with-blue relative mb-6 rounded-t-xl border border-light-text bg-black/20 px-4 py-4 text-center before:absolute before:bottom-[-0.08rem] before:left-0 before:h-1 before:w-full dark:border-dark-text/50 dark:bg-dark-dark/30 sm:mb-8 sm:px-5 sm:py-5 md:mb-10 md:px-6 md:py-6">
      <h3
        className={classNames('text-base uppercase underline sm:text-lg md:text-xl lg:text-2xl', {
          'mb-2 sm:mb-3 md:mb-4': !subTitle,
        })}
      >
        {title}
      </h3>
      {subTitle && (
        <h2 className="mb-3 mt-2 text-xs uppercase underline sm:mb-4 sm:text-sm md:mb-5 md:text-base">
          {subTitle}
        </h2>
      )}
      <CodeLink link={link.to} className="my-3 sm:my-4 md:my-5 lg:absolute lg:right-6 lg:top-4" />
      <p className="text-xs sm:text-sm md:text-base">{description}</p>
      {image ? (
        <a
          href={link.to}
          rel="noopener noreferrer"
          target="_blank"
          className="my-4 block sm:my-5 md:my-6"
        >
          <img
            src={image.image}
            alt={image.alt}
            className="mx-auto max-h-[20rem] w-full object-cover sm:max-h-[30rem] md:max-h-[40rem]"
          />
        </a>
      ) : (
        <a
          href={link.to}
          rel="noopener noreferrer"
          target="_blank"
          className="my-3 inline-block rounded-lg bg-accent-primary px-3 py-2 text-xs text-white shadow shadow-accent-secondary transition-all duration-200 hover:bg-accent-secondary active:scale-95 sm:my-4 sm:px-4 sm:text-sm md:my-5 md:text-base"
        >
          {link.label}
        </a>
      )}
      <p className="text-xs sm:text-sm md:text-base">Built with: {skills}</p>
    </div>
  );
};

const MyWork = (): ReactElement => {
  return (
    <CardWrapper
      title="My Work"
      titleClassName="mb-6 sm:mb-8 md:mb-10 w-max border-b pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
    >
      <MyWorkCard
        title="React Blogs"
        link={{ to: 'https://github.com/norvalbv/react-blogs', label: 'View the Documentation' }}
        description={REACT_BLOGS_DESCRIPTION}
        skills={REACT_BLOGS_SKILLS}
      />
      <MyWorkCard
        title="PARISN"
        subTitle="An e-commerce application with a twist"
        link={{ to: 'https://github.com/norvalbv/parisn' }}
        description={PARISN_DESCRIPTION}
        image={{ image: ParisnHomepage.src, alt: 'Parisn App Homepage - An ecommerce site.' }}
        skills={PARISN_SKILLS}
      />
      <MyWorkCard
        title="Weather App"
        link={{ to: 'https://github.com/norvalbv/cool-weather-app' }}
        description={
          <>
            A front end weather application built with the&nbsp;
            <StyledLink label="Open Weather Api" link="https://openweathermap.org/api" />
            &nbsp;that uses live data and the ability to search for weather worldwide.
          </>
        }
        image={{ image: WeatherApp.src, alt: 'Weather App Homepage.' }}
        skills={WEATHER_APP_SKILL}
      />
    </CardWrapper>
  );
};

export default MyWork;
