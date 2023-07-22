import React, { ReactElement } from 'react';
import { classNames } from 'utils';

interface ErrorMessageProps {
  message: string;
  dataAtt?: string;
  className?: string;
}

const ErrorMessage = ({ message, dataAtt, className }: ErrorMessageProps): ReactElement => {
  return (
    <div className={classNames(className)}>
      <span
        className="text-red-R500 block max-w-full text-sm"
        data-testid={`${dataAtt ? `${dataAtt} ${message}` : message}`}
      >
        {message}
      </span>
    </div>
  );
};

export default ErrorMessage;
