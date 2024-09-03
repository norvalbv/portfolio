import { ReactElement } from 'react';

type StyledLinkProps = {
  link: string;
  label: string;
};

const StyledLink = ({ link, label }: StyledLinkProps): ReactElement => {
  return (
    <a
      href={link}
      className="text-accent-primary underline underline-offset-4 hover:text-accent-secondary"
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
    </a>
  );
};

export default StyledLink;
