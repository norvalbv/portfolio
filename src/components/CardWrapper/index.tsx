import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { classNames } from 'utils';

export type CardWrapperProps = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  title: string;
  titleClassName?: string;
  subTitle?: string;
  description?: string;
  id?: string;
  margin?: boolean;
};

const CardWrapper = ({
  description,
  subTitle,
  titleClassName,
  className,
  children,
  title,
  id,
  margin,
}: CardWrapperProps): ReactElement => {
  return (
    <div
      className={classNames(
        'relative z-10 mx-auto min-h-screen',
        className || 'grid w-10/12 min-w-[20rem] place-items-center'
      )}
      id={id}
    >
      <div>
        <Header
          title={title}
          titleClassName={classNames(titleClassName, { 'mt-20 md:mt-32': margin })}
          subtitle={subTitle}
          description={description}
        />
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
