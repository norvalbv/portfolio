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
    <div className="relative mb-10 rounded-t-xl border-light-text bg-black/20 py-6 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:border-dark-text dark:bg-dark-dark/30 md:px-6">
      <h3
        className={classNames('px-6 text-lg uppercase underline md:p-0 lg:text-xl', {
          'mb-4': !subTitle,
        })}
      >
        {title}
      </h3>
      {subTitle && <h2 className="mb-6 mt-2 text-sm uppercase underline lg:text-lg">{subTitle}</h2>}
      <CodeLink link={link.to} className="my-6 lg:absolute lg:right-12 lg:top-1" />
      <p className="px-6 text-sm md:p-0 lg:text-base">{description}</p>
      {image ? (
        <a href={link.to} rel="noopener noreferrer" target="_blank">
          <img
            src={image.image}
            alt={image.alt}
            className="mx-auto my-6 max-h-[40rem] min-h-[14em]"
          />
        </a>
      ) : (
        <a href={link.to} rel="noopener noreferrer" target="_blank">
          <button
            type="button"
            className="my-4 rounded-lg bg-accent-secondary px-4 py-2 shadow shadow-accent-primary hover:bg-accent-primary"
          >
            {link.label}
          </button>
        </a>
      )}
      <p className="px-6 text-sm md:p-0 lg:text-base">Built with: {skills}</p>
    </div>
  );
};

const MyWork = (): ReactElement => {
  return (
    <CardWrapper
      title="My Work"
      titleClassName="md:ml-0 ml-6 mb-[4.5rem] w-max border-b pb-2 text-5xl font-semibold md:text-6xl"
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
