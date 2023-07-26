import React, { ReactElement } from 'react';
import { useRandomReveal } from 'hooks/useRandomReveal';
import { classNames } from 'utils';

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

  const summaryText = 'A 24 year old Full Stack Developer from the United Kingdom';
  const summary = useRandomReveal({
    isPlaying: true,
    duration: 3,
    characters: summaryText,
  });

  return (
    <div className="relative top-[-4rem] grid h-screen place-items-center text-center uppercase">
      <div className="flex flex-col gap-2 lg:gap-8">
        <h1 className="mb-4 text-4xl font-semibold tracking-wide md:text-8xl lg:font-normal">
          <span className="mb-2 inline-block text-accent-main lg:mb-6">{heading}</span>
          <br />
          {heading2}
        </h1>
        <h2
          className={classNames(
            'mx-auto w-[19.125rem] text-sm leading-7 tracking-wide md:w-10/12 lg:text-base',
            { 'break-all': summary.join('') !== summaryText }
          )}
        >
          {summary}
        </h2>
      </div>
    </div>
  );
};

export default Landing;
