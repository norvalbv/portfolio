import React, { ReactElement } from 'react';
import { useRandomReveal } from 'hooks/useRandomReveal';

const Landing = (): ReactElement => {
  const heading = useRandomReveal({
    isPlaying: true,
    duration: 2,
    characters: 'Hello',
  });

  const heading2 = useRandomReveal({
    isPlaying: true,
    duration: 4,
    characters: 'I am Benjamin',
  });

  return (
    <div className="relative top-[-4rem] grid h-screen place-items-center text-center uppercase">
      <div className="flex flex-col gap-8">
        <h1 className="mb-4 text-6xl font-semibold tracking-wide transition-colors md:text-8xl">
          <span className="mb-10 inline-block text-accent-main transition-colors duration-150">
            {heading}
          </span>
          <br />
          {heading2}
        </h1>
        <h2 className="text-sm leading-7 tracking-wide">
          A 24 year old Full Stack Developer from the United Kingdom
        </h2>
      </div>
    </div>
  );
};

export default Landing;