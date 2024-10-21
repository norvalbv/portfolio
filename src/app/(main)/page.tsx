'use client';

import { ReactElement, useEffect, useState } from 'react';
import { useRandomReveal } from 'hooks/useRandomReveal';
import { classNames } from '@/src/utils';
import CardWrapper from '@/src/components/CardWrapper';

const Landing = (): ReactElement => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const headingText = 'Hello';
  const heading = useRandomReveal({
    isPlaying: true,
    duration: 1,
    characters: headingText,
    revealDuration: 0.8,
  });

  const headingTwoText = 'I am Benji';
  const headingTwo = useRandomReveal({
    isPlaying: true,
    duration: 2,
    characters: headingTwoText,
  });

  const summaryText = 'A 25-year-old Full Stack Developer from the United Kingdom';
  const summary = useRandomReveal({
    isPlaying: true,
    duration: 3,
    characters: summaryText,
  });

  return (
    <CardWrapper centered className="uppercase">
      <div className="flex flex-col gap-2 lg:gap-8">
        <h1 className="mb-4 text-4xl font-semibold tracking-wide md:text-6xl lg:text-8xl lg:font-normal">
          <span className="linear-gradient-background mb-2 inline-block bg-clip-text text-transparent lg:mb-6">
            {isMounted ? heading : headingText}
          </span>
          <br />
          {isMounted ? headingTwo : headingTwoText}
        </h1>
        <h2
          className={classNames(
            'mx-auto w-[19.125rem] text-sm leading-7 tracking-wide md:w-10/12 lg:text-base',
            { 'break-all': summary.join('') !== summaryText }
          )}
        >
          {isMounted ? summary : summaryText}
        </h2>
      </div>
    </CardWrapper>
  );
};

export default Landing;
