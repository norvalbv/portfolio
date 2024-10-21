'use client';

import { ReactElement, useEffect, useState } from 'react';
import { useRandomReveal } from '@/src/hooks/useRandomReveal';
import CardWrapper from '@/src/components/CardWrapper';

const NotFound = (): ReactElement => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const summary = 'Page Not Found';

  const heading = useRandomReveal({
    isPlaying: true,
    duration: 2,
    characters: summary,
  });

  return (
    <CardWrapper centered>
      <div className="flex flex-col gap-8">
        <h2 className="mb-4 text-6xl font-semibold tracking-wide text-accent-primary transition-colors">
          {mounted ? heading : summary}
        </h2>
        <button
          type="button"
          className="z-20 mx-auto w-max rounded border bg-light-dark px-4 py-2 text-xl uppercase leading-7 tracking-wide shadow-lg dark:bg-dark-dark"
          onClick={(): void => window.history.back()}
        >
          Back
        </button>
      </div>
    </CardWrapper>
  );
};

export default NotFound;
