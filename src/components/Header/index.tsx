import React, { ReactElement } from 'react';
import { classNames } from 'utils';
import Title from 'components/Header/Title';
import Subtitle from 'components/Header/SubTitle';
import { useRandomReveal } from 'hooks/useRandomReveal';
import Description from './Description';

export type HeaderProps = {
  // Own props
  className?: string;

  // Title props
  title?: string;
  titleClassName?: string;

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
}: HeaderProps): ReactElement | null => {
  const processedTitle = useRandomReveal({
    isPlaying: true,
    duration: 3,
    characters: title || '',
  });

  if (!title && !subtitle) {
    return null;
  }

  return (
    <header className={classNames(className || 'flex items-center justify-between')}>
      <section className="flex w-full flex-col gap-1">
        <Title className={titleClassName}>{processedTitle}</Title>
        <Subtitle className={subtitleClassName}>{subtitle}</Subtitle>
        <Description className={descriptionClassName}>{description}</Description>
      </section>
    </header>
  );
};

export default Header;
