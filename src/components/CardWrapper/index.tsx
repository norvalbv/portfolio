import Header from 'components/Header';
import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

type CardWrapperProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  subTitle?: string;
  description?: string;
  id?: string;
};

const CardWrapper = ({
  description,
  subTitle,
  className,
  children,
  title,
  id,
}: CardWrapperProps): ReactElement => {
  return (
    <div className={classNames('mx-auto my-52', className || 'w-10/12 min-w-[20rem]')} id={id}>
      <Header title={title} subtitle={subTitle} description={description} />
      {children}
    </div>
  );
};

export default CardWrapper;
