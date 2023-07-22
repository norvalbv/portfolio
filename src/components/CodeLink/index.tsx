import React, { ReactElement } from 'react';
import { CodeIcon } from 'components/SVG';
import classNames from 'utils/classNames';

type CodeLinkProps = {
  className?: string;
  link: string;
};

const CodeLink = ({ className, link }: CodeLinkProps): ReactElement => {
  return (
    <div className={classNames('group flex items-center justify-center gap-2', className)}>
      <p className="animate-fall text-xs text-white opacity-0 duration-300 group-hover:opacity-100">
        View Code
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CodeIcon className="cursor-pointer" />
      </a>
    </div>
  );
};

export default CodeLink;
