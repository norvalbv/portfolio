import { ReactElement } from 'react';

type StyledLinkProps = {
  link: string;
  label: string;
};

const StyledLink = ({ link, label }: StyledLinkProps): ReactElement => {
  return (
    <a
      href={link}
      className="text-accent-secondary hover:underline"
      target="_blank"
      rel="noreferrer noopener"
    >
      {label}
    </a>
  );
};

export default StyledLink;
