import Link, { Props as LinkProps } from '@/src/components/Link';
import React, { ReactElement } from 'react';
import { classNames } from '@/src/utils';

type Props = { links: LinkProps[]; className?: string };

const LinkGroup = ({ links, className }: Props): ReactElement => {
  return (
    <div className={classNames('flex gap-1 shadow-sm', className)} role="group">
      {links.map((link, idx) => (
        <Link
          className={idx === 0 ? 'rounded-l-lg' : idx === links.length - 1 ? 'rounded-r-lg' : ''}
          key={link.text}
          {...link}
        />
      ))}
    </div>
  );
};

export default LinkGroup;
