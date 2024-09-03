import { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';
import StyledLink from 'components/StyledLink';
import { MY_SKILLS } from 'constants/index';

const AboutMe = (): ReactElement => (
  <CardWrapper
    title="About Me"
    centered
    titleClassName="mx-auto mb-[4.5rem] w-max border-b pb-2 text-5xl font-semibold md:text-6xl"
  >
    <p>
      Experienced Full Stack software engineer. I am part of the core team that developed the
      entire&nbsp;
      <StyledLink label="Elysia" link="https://elysia.co" />
      &nbsp;(a Williams Advanced Engineering subsidiary) cloud platform. I would love for you to
      check out my projects and even reach out!
    </p>
    <p className="my-10 text-accent-primary">
      My skills? They&apos;re floating around on the background. Have a look around 😼
    </p>
    <div className="mx-auto w-6/12 rounded-xl bg-black/20 p-4 shadow-lg backdrop-blur-[5.6px] dark:bg-white/20">
      <p className="text-xs">OR, they are: {MY_SKILLS}</p>
    </div>
  </CardWrapper>
);

export default AboutMe;
