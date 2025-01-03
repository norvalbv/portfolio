'use client';

import { ReactElement, useEffect, useState } from 'react';
import Title from '@/src/components/Header/Title';
import Subtitle from '@/src/components/Header/SubTitle';
import { useRandomReveal } from '@/src/hooks/useRandomReveal';
import Description from './Description';

export type HeaderProps = {
  // Own props
  className?: string;
  animation?: boolean;

  // Title props
  title?: string;
  titleClassName?: string;
  level?: 1 | 2 | 3;

  // Subtitle props
  subtitle?: string | JSX.Element;
  subtitleClassName?: string;

  // Description props
  description?: string | JSX.Element;
  descriptionClassName?: string;
};

const Header = ({
  className,
  description,
  descriptionClassName,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  animation = true,
  level = 1,
}: HeaderProps): ReactElement | null => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const processedTitle = useRandomReveal({
    isPlaying: true,
    duration: 1,
    characters: title || '',
    revealDuration: 0.7,
  });

  if (!title && !subtitle) {
    return null;
  }

  return (
    <header className={className}>
      <section className="flex w-full flex-col gap-1">
        <Title className={titleClassName} level={level}>
          {animation && mounted ? processedTitle : title}
        </Title>
        <Subtitle className={subtitleClassName}>{subtitle}</Subtitle>
        <Description className={descriptionClassName}>{description}</Description>
      </section>
    </header>
  );
};

export default Header;
