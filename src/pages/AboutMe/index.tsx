import React, { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';
import StyledLink from 'components/StyledLink';
import { MY_SKILLS } from 'constants/index';

const AboutMe = (): ReactElement => {
  return (
    <CardWrapper
      title="About Me"
      className="grid w-10/12 min-w-[20rem] place-items-center text-center"
    >
      <p className="text-lg">
        Experienced Full Stack software engineer with 3 years of experience in web development. I am
        part of the core team that developed the entire&nbsp;
        <StyledLink label="Elysia" link="https://elysia.co" />
        &nbsp;&#40;a WAE subsidiary&#41; cloud platform. I would love for you to check out my
        projects and even reach out!
      </p>
      <p className="my-10 text-accent-secondary">
        My skills? They&apos;re floating around on the background. Have a look around &#58;&#41;
      </p>
      <p className="mx-auto w-6/12 min-w-[16rem] rounded border border-light-text bg-black/20 p-4 text-xs dark:border-dark-text dark:bg-white/20">
        OR for ease, they are: {MY_SKILLS}
      </p>
    </CardWrapper>
  );
};

export default AboutMe;
