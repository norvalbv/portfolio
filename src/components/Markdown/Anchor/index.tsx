'use client';

import Title from 'components/Header/Title';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';

type Props = {
  children: string | string[];
  className?: string;
  level?: 1 | 2 | 3;
  id: string;
};

export default function Anchor({ children, className, level, id }: Props): ReactElement {
  const currentPath = usePathname();

  return (
    <Link href={`${currentPath}#${id}`} className={className}>
      <Title level={level}>{children}</Title>
    </Link>
  );
}
