import { ReactElement } from 'react';
import { Characters } from '@/src/types';
import { classNames } from '@/src/utils';

export type TitleProps = {
  children?: string | JSX.Element | Characters;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Title = ({ children, className, level = 2 }: TitleProps): ReactElement | null => {
  if (!children) {
    return null;
  }

  const baseClasses = 'font-semibold';
  const classes = {
    1: 'text-3xl md:text-5xl mb-6 pb-2 border-b',
    2: 'text-2xl md:text-4xl mb-5 pb-2 border-b',
    3: 'text-xl md:text-3xl mb-4',
    4: 'text-lg md:text-2xl mb-3',
    5: 'text-base md:text-xl mb-2',
    6: 'text-sm md:text-lg mb-2',
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={classNames(baseClasses, classes[level], className)}>
      {children}
    </HeadingTag>
  );
};

export default Title;
