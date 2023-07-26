import React, { ReactElement } from 'react';
import { Characters } from 'types';
import { classNames } from 'utils';

export type TitleProps = {
  children?: string | JSX.Element | Characters;
  className?: string;
  /**
   * Default 2.
   */
  level?: 1 | 2 | 3;
};

const Title = ({ children, className, level = 2 }: TitleProps): ReactElement | null => {
  if (!children) {
    return null;
  }

  // Level 1
  if (level === 1) {
    return (
      <h1
        className={classNames(
          className,
          'mb-20 text-5xl font-semibold underline underline-offset-8 md:text-8xl'
        )}
      >
        {children}
      </h1>
    );
  }

  // Level 2. Default
  if (level === 2) {
    return (
      <h2
        className={classNames(
          className,
          'mb-10 text-3xl font-semibold underline underline-offset-8 md:mb-20 md:text-6xl'
        )}
      >
        {children}
      </h2>
    );
  }

  // Level 3
  return (
    <h3 className={classNames(className, 'mb-10 text-2xl font-semibold md:text-4xl')}>
      {children}
    </h3>
  );
};

export default Title;
