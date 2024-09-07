import Button, { Props as ButtonProps } from 'components/Button';
import React, { ReactElement } from 'react';
import { classNames } from 'utils';

type Props = { buttons: ButtonProps[]; className?: string };

const ButtonGroup = ({ buttons, className }: Props): ReactElement => {
  return (
    <div className={classNames('flex shadow-sm', className)} role="group">
      {buttons.map((button, idx) => (
        <Button
          className={idx === 0 ? 'rounded-l-lg' : idx === buttons.length - 1 ? 'rounded-r-lg' : ''}
          key={button.text}
          {...button}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
