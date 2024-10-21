import NextLink from 'next/link';
import React, { ReactElement } from 'react';
import { classNames } from 'utils';

export type Props = {
  text: string;
  href: string;
  className?: string;
  active?: boolean;
};

const Link = ({ text, href, className = 'rounded-lg', active }: Props): ReactElement => {
  return (
    <NextLink
      href={href}
      className={classNames(
        'border border-light-text/50 dark:border-dark-text/50',
        'w-full bg-white px-4 py-2 shadow-lg transition-all duration-200 hover:scale-95 hover:bg-accent-primary/50 dark:bg-dark-dark/30 dark:hover:bg-accent-primary/50',
        className,
        { 'underline underline-offset-4': active }
      )}
    >
      {text}
    </NextLink>
  );
};

export default Link;
