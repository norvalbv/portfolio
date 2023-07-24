import React, { ReactElement } from 'react';
import { useRandomReveal } from 'hooks/useRandomReveal';

const Landing = (): ReactElement => {
  const heading = useRandomReveal({
    isPlaying: true,
    duration: 1,
    characters: 'Hello',
    revealDuration: 0.8,
  });

  const heading2 = useRandomReveal({
    isPlaying: true,
    duration: 2,
    characters: 'I am Benjamin',
  });

  const summary = useRandomReveal({
    isPlaying: true,
    duration: 3,
    characters: 'A 24 year old Full Stack Developer from the United Kingdom',
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
        <h2 className="text-sm leading-7 tracking-wide">{summary}</h2>
      </div>
    </div>
  );
};

export default Landing;
