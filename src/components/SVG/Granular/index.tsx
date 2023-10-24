import React, { ReactElement } from 'react';
import SVGIcon, { SVGIconProps } from '../SVGIcon';

const GranularIcon = (props: SVGIconProps): ReactElement => {
  return (
    <SVGIcon size={2000} {...props} opacity={0.15}>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="2" numOctaves="1" stitchTiles="stitch" />
      </filter>

      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </SVGIcon>
  );
};

export default GranularIcon;
