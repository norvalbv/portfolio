import { ReactElement } from 'react';
import { classNames } from '@/src/utils';

type StyledLinkProps = {
  link: string;
  label: string;
  className?: string;
};

const StyledLink = ({ link, label, className }: StyledLinkProps): ReactElement => {
  return (
    <a
      href={link}
      className={classNames(
        'inline-block text-accent-primary underline underline-offset-4 hover:text-accent-secondary',
        className
      )}
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
    </a>
  );
};

export default StyledLink;
