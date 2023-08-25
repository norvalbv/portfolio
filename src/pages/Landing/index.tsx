import React, { ReactElement } from 'react';
import { useRandomReveal } from 'hooks/useRandomReveal';
import { classNames } from 'utils';
import CardWrapper from 'components/CardWrapper';

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
    <CardWrapper className="grid h-full w-8/12 place-items-center bg-red-500 text-center uppercase">
      <div className="flex flex-col gap-2 lg:gap-8">
        <h1 className="mb-4 text-4xl font-semibold tracking-wide md:text-6xl lg:text-8xl lg:font-normal">
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
    </CardWrapper>
  );
};

export default Landing;
