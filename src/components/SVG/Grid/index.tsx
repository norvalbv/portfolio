import React, { ReactElement } from 'react';
import SVGIcon, { SVGIconProps } from '../SVGIcon';

const Grid = (props: SVGIconProps): ReactElement => {
  return (
    <SVGIcon size="100%" stroke="" {...props} className="absolute z-0 opacity-10">
      <defs>
        <pattern
          id="dotGrid"
          patternUnits="userSpaceOnUse"
          width="50" // increased from 10 to 50
          height="50" // increased from 10 to 50
        >
          <circle cx="25" cy="25" r="2" fill="#ccc" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid)" />{' '}
    </SVGIcon>
  );
};

export default Grid;
