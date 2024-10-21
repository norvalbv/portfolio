'use client';

import Title from '@/src/components/Header/Title';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

type Props = {
  children: string | string[];
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
};

const Anchor = ({ children, className, level, id }: Props): ReactElement => {
  const currentPath = usePathname();

  if (typeof children[0] !== 'string') {
    return <Title level={level}>{children}</Title>;
  }

  return (
    <Link 
      href={`${currentPath}#${id}`} 
      className={`group relative inline-block ${className}`}
    >
      <Title level={level} className="transition-colors duration-200 hover:text-accent-primary">
        {children}
      </Title>
      <span className="absolute -left-5 top-1/3 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        #
      </span>
    </Link>
  );
};

export default Anchor;
