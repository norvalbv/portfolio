import React, { ReactElement } from 'react';
import Header, { HeaderProps } from 'components/Header';
import { classNames } from 'utils';

type ProcessedHeaderProps = Pick<HeaderProps, 'title' | 'titleClassName' | 'subtitle'>;

export type CardWrapperProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  id?: string;
  centered?: boolean;
} & ProcessedHeaderProps;

const CardWrapper = ({
  subtitle,
  titleClassName,
  className,
  children,
  title,
  id,
  centered,
}: CardWrapperProps): ReactElement => {
  return (
    <div
      className={classNames(
        'relative mx-auto min-w-[20rem] max-w-[70rem] flex-1',
        centered ? 'grid place-items-center text-center' : 'mt-6 w-11/12 md:mt-10',
        className
      )}
      id={id}
    >
      <div>
        <Header title={title} titleClassName={titleClassName} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
