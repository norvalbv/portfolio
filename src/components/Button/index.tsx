import React, { ReactElement } from 'react';
import { classNames } from '@/src/utils';

export type Props = {
  text: string;
  onClick: () => void;
  className?: string;
  active?: boolean;
};

const Button = ({ text, onClick, className = 'rounded-lg', active }: Props): ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'border border-light-text/50 dark:border-dark-text/50',
        'w-full bg-white px-4 py-2 shadow-lg transition-all duration-200 hover:scale-95 hover:bg-accent-primary/50 dark:bg-dark-dark/30 dark:hover:bg-accent-primary/50',
        className,
        { 'underline underline-offset-4': active }
      )}
    >
      {text}
    </button>
  );
};

export default Button;
