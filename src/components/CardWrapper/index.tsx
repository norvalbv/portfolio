import { ReactElement } from 'react';
import Header, { HeaderProps } from '@/src/components/Header';
import { classNames } from '@/src/utils';

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
        'relative mx-auto min-w-[20rem] max-w-4xl flex-1 px-4 sm:px-6 lg:px-8',
        centered
          ? '-mt-4 grid place-items-center text-center sm:-mt-6 md:-mt-10 lg:mt-0'
          : 'mt-4 sm:mt-6 md:mt-8 lg:mt-10',
        className
      )}
      id={id}
    >
      <div className="w-full rounded-3xl p-4 backdrop-blur-[2px] sm:p-6 md:p-8">
        <Header
          title={title}
          titleClassName={classNames(
            'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
            titleClassName
          )}
          subtitle={subtitle}
        />
        <div className="mt-4 sm:mt-6 md:mt-8">{children}</div>
      </div>
    </div>
  );
};

export default CardWrapper;
