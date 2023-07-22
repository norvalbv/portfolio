import Header from 'components/Header';
import React, { ReactElement } from 'react';
import { classNames } from 'utils';

type CardWrapperProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  titleClassName?: string;
  subTitle?: string;
  description?: string;
  id?: string;
};

const CardWrapper = ({
  description,
  subTitle,
  titleClassName,
  className,
  children,
  title,
  id,
}: CardWrapperProps): ReactElement => {
  return (
    <div
      className={classNames('relative z-10 mx-auto my-52', className || 'w-10/12 min-w-[20rem]')}
      id={id}
    >
      <Header
        title={title}
        titleClassName={titleClassName}
        subtitle={subTitle}
        description={description}
      />
      {children}
    </div>
  );
};

export default CardWrapper;
