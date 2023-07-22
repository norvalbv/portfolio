import React, { ReactElement } from 'react';
import { classNames } from 'utils';

export type SubtitleProps = {
  children?: string | JSX.Element;
  className?: string;
  testId?: string;
};

const Subtitle = ({ children, className, testId }: SubtitleProps): ReactElement | null => {
  if (!children) {
    return null;
  }

  if (typeof children === 'string') {
    return (
      <h4
        className={classNames(className || 'text-body text-neutral-N300 truncate')}
        data-testid={testId || `${children} Subtitle`}
      >
        {children}
      </h4>
    );
  }

  return children;
};

export default Subtitle;
