import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

export type TitleProps = {
  children?: string | JSX.Element;
  className?: string;
  testId?: string;
  /**
   * Default 3.
   */
  level?: 1 | 2 | 3;
};

const Title = ({ children, className, testId, level = 2 }: TitleProps): ReactElement | null => {
  if (!children) {
    return null;
  }

  if (typeof children !== 'string') {
    return children;
  }

  const titleTestId = testId || `${children} Title`;

  // Level 1
  if (level === 1) {
    return (
      <h1
        className={classNames(
          className,
          'mb-20 text-5xl font-semibold underline underline-offset-8 md:text-8xl'
        )}
        data-testid={titleTestId}
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
          'mb-10 text-4xl font-semibold underline underline-offset-8 md:mb-20 md:text-6xl'
        )}
        data-testid={titleTestId}
      >
        {children}
      </h2>
    );
  }

  // Level 3
  return (
    <h3
      className={classNames(className, 'mb-10 text-2xl font-semibold  md:text-4xl')}
      data-testid={titleTestId}
    >
      {children}
    </h3>
  );
};

export default Title;
