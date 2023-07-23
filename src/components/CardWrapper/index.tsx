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
      className={classNames(
        'relative top-[-4rem] z-10 mx-auto min-h-screen',
        className || 'grid w-10/12 min-w-[20rem] place-items-center'
      )}
      id={id}
    >
      <div>
        <Header
          title={title}
          titleClassName={titleClassName}
          subtitle={subTitle}
          description={description}
        />
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
