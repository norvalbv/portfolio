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
        'my-4 w-full bg-accent-primary px-4 py-2 text-white shadow shadow-accent-secondary transition-all duration-200 hover:scale-95 hover:bg-accent-secondary',
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
