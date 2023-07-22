import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

interface ErrorMessageProps {
  message: string;
  dataAtt?: string;
  className?: string;
}

const ErrorMessage = ({ message, dataAtt, className }: ErrorMessageProps): ReactElement => {
  return (
    <div className={classNames(className)}>
      <span
        className="block max-w-full text-sm text-red-R500"
        data-testid={`${dataAtt ? `${dataAtt} ${message}` : message}`}
      >
        {message}
      </span>
    </div>
  );
};

export default ErrorMessage;
