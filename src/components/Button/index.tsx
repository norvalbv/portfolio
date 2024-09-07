import React, { ReactElement } from 'react';
import { classNames } from 'utils';

export type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ text, onClick, className = 'rounded-lg' }: Props): ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'border border-light-text/50 bg-white dark:border-dark-text/50 dark:bg-dark-dark/30',
        'w-full px-4 py-2 shadow-lg transition-all duration-200 hover:scale-95',
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
