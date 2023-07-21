import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';
import Title from 'components/Header/Title';
import Subtitle from 'components/Header/SubTitle';
import Description from './Description';

export type HeaderProps = {
  // Own props
  className?: string;

  // Title props
  title?: string | JSX.Element;
  titleTestId?: string;
  titleClassName?: string;

  // Subtitle props
  subtitle?: string | JSX.Element;
  subtitleTestId?: string;
  subtitleClassName?: string;

  // Description props
  description?: string | JSX.Element;
  descriptionTestId?: string;
  descriptionClassName?: string;
};

const Header = ({
  className,
  description,
  descriptionClassName,
  descriptionTestId,
  subtitle,
  subtitleClassName,
  subtitleTestId,
  title,
  titleClassName,
  titleTestId,
}: HeaderProps): ReactElement | null => {
  if (!title && !subtitle) {
    return null;
  }

  return (
    <header className={classNames(className || 'flex items-center justify-between')}>
      <section className="flex w-full flex-col gap-1">
        <Title testId={titleTestId} className={titleClassName}>
          {title}
        </Title>
        <Subtitle testId={subtitleTestId} className={subtitleClassName}>
          {subtitle}
        </Subtitle>
        <Description testId={descriptionTestId} className={descriptionClassName}>
          {description}
        </Description>
      </section>
    </header>
  );
};

export default Header;
