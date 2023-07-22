import CardWrapper from 'components/CardWrapper';
import { mySkills } from 'constants';
import React, { ReactElement } from 'react';

const AboutMe = (): ReactElement => {
  return (
    <CardWrapper title="About Me" className="w-10/12 min-w-[20rem] text-center" id="about-me">
      <p className="mt-20 text-lg">
        Experienced Full Stack software engineer with 3 years of experience in web development. I am
        part of the core team that developed the entire Elysia &#40;a WAE subsidiary&#41; cloud
        platform. I would love for you to check out my projects and even reach out!
      </p>
      <p className="my-10 text-accent-main">
        My skills? They&apos;re floating around on the background. Have a look around &#58;&#41;
      </p>
      <p className="mx-auto w-6/12 min-w-[16rem] rounded border border-light-text bg-black/20 p-4 text-xs dark:border-dark-text dark:bg-white/20">
        If you&apos;re too lazy, they are: {mySkills}
      </p>
    </CardWrapper>
  );
};

export default AboutMe;
