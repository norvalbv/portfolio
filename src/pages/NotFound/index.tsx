import React, { ReactElement } from 'react';
import { useRandomReveal } from 'hooks/useRandomReveal';

const NotFound = (): ReactElement => {
  const heading = useRandomReveal({
    isPlaying: true,
    duration: 2,
    characters: 'Page Not Found',
  });

  return (
    <div className="relative top-[-4rem] grid h-screen place-items-center text-center uppercase">
      <div className="flex flex-col gap-8">
        <h2 className="mb-4 text-6xl font-semibold tracking-wide text-accent-main transition-colors">
          {heading}
        </h2>
        <button type='button' className="z-20 mx-auto w-max rounded border bg-light-dark px-4 py-2 text-xl uppercase leading-7 tracking-wide shadow-lg dark:bg-dark-dark" onClick={(): void => history.back()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
