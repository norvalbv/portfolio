import { ReactElement } from 'react';
import CardWrapper from '@/src/components/CardWrapper';
import StyledLink from '@/src/components/StyledLink';
import { MY_SKILLS } from 'constants/index';

const AboutMe = (): ReactElement => (
  <CardWrapper
    title="About Me"
    centered
    titleClassName="mx-auto mb-6 sm:mb-8 md:mb-10 w-max border-b pb-2 text-3xl font-semibold sm:text-4xl md:text-5xl"
  >
    <p className="text-sm sm:text-base">
      Experienced Full Stack software engineer. I am part of the core team that developed the
      entire&nbsp;
      <StyledLink label="Elysia" link="https://elysia.co" />
      &nbsp;(a Williams Advanced Engineering subsidiary) cloud platform. I code, write blogs, and
      build web-related applications. I would <em>love</em> for you to check out my projects, blogs,
      or even reach out!
    </p>
    <p className="my-6 text-sm text-accent-primary sm:my-8 sm:text-base">
      My skills? They&apos;re floating around on the background. Have a look around 😼
    </p>
    <div className="mx-auto w-full rounded-xl bg-black/20 p-3 shadow-lg backdrop-blur-[5.6px] dark:bg-white/20 sm:w-10/12 sm:p-4 md:w-8/12">
      <p className="text-xs sm:text-sm">OR, they are: {MY_SKILLS}</p>
    </div>
  </CardWrapper>
);

export default AboutMe;
