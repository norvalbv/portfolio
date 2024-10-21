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
          ? 'grid place-items-center text-center'
          : 'mt-4 sm:mt-6 md:mt-8 lg:mt-10',
        className
      )}
      id={id}
    >
      <div className="w-full rounded-3xl p-6 backdrop-blur-sm sm:p-8 md:p-10">
        <Header
          title={title}
          titleClassName={classNames(
            'text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl',
            titleClassName
          )}
          subtitle={subtitle}
        />
        <div className="mt-6 sm:mt-8 md:mt-10">{children}</div>
      </div>
    </div>
  );
};

export default CardWrapper;
