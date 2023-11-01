import { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';
import StyledLink from 'components/StyledLink';
import { MY_SKILLS } from 'constants/index';

const AboutMe = (): ReactElement => {
  return (
    <CardWrapper
      title="About Me"
      centered
      titleClassName="mx-auto mb-[4.5rem] w-max border-b pb-2 text-5xl font-semibold md:text-6xl"
    >
      <p>
        Experienced Full Stack software engineer. I am part of the core team that developed the
        entire&nbsp;
        <StyledLink label="Elysia" link="https://elysia.co" />
        &nbsp;(a WAE subsidiary) cloud platform. I would love for you to check out my projects and
        even reach out!
      </p>
      <p className="my-10 text-accent-primary">
        My skills? They&apos;re floating around on the background. Have a look around :)
      </p>
      <p className="mx-auto w-6/12 min-w-[16rem] rounded border border-light-text bg-black/20 p-4 text-xs dark:border-dark-text dark:bg-white/20">
        OR, they are: {MY_SKILLS}
      </p>
    </CardWrapper>
  );
};

export default AboutMe;
