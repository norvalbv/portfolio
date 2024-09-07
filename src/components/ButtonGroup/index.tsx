import Button, { Props as ButtonProps } from 'components/Button';
import React, { ReactElement } from 'react';

type Props = { buttons: ButtonProps[] };

const ButtonGroup = ({ buttons }: Props): ReactElement => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {buttons.map((button, idx) => (
        <Button
          {...button}
          key={button.text}
          className={idx === 0 ? 'rounded-s-lg' : idx === buttons.length - 1 ? 'rounded' : ''}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
