import React, { ReactElement } from 'react';
import { CodeIcon } from 'components/SVG';
import { classNames } from 'utils';

export type CodeLinkProps = {
  requireIcon?: boolean;
  className?: string;
  link: string;
};

const CodeLink = ({ className, link, requireIcon = true }: CodeLinkProps): ReactElement => {
  return (
    <div className={classNames('group', className)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="items-center justify-center gap-2 lg:flex"
      >
        <p className="text-xs opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100">
          View Code
        </p>
        {requireIcon && <CodeIcon className="hidden cursor-pointer lg:block" />}
      </a>
    </div>
  );
};

export default CodeLink;
