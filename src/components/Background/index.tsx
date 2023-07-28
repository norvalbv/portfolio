import React, { ReactElement } from 'react';
import { classNames } from 'utils';
import { MY_SKILLS } from 'constants/index';
import useWindowSize from 'hooks/useWindowSize';

const Background = (): ReactElement => {
  const windowData = useWindowSize();

  const skillsRepeated = Array(windowData.isMobile ? 3 : 7)
    .fill(MY_SKILLS.split(','))
    .flat();

  const exponentialDistribution = (num: number): number => {
    return -Math.log(1.0 - Math.random()) / num;
  };

  return (
    <div className="absolute top-0 h-full w-screen overflow-hidden">
      {skillsRepeated.map((item, i) => {
        /**
         * Duration and opacity based off font size.
         */
        const fontSize = Math.random() * (1.25 - 0.3) + 0.3; // Random font sie between 0.3rem and 1.25rem

        // const opacity = (1.05 - fontSize / 1.5).toFixed(2); // The bigger the font, the smaller the opacity (max 1)
        const opacity = fontSize / 2.5; // The bigger the font, the higher the opacity (max 1)
        const duration = (2 - fontSize) * 20; // The smaller the font, the longer the duration of the animation

        // Start point of text before the animation starts.
        const startPoint = exponentialDistribution(0.01);
        const animationDelay = exponentialDistribution(0.15);

        return (
          <div
            // Static array so index is fine.
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={classNames(
              'absolute -top-96 animate-fall select-none font-semibold uppercase tracking-wider text-accent-main'
            )}
            style={{
              left: `${Math.round(Math.random() * 100)}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${
                animationDelay > 10 ? Math.random() * (10 - 1) + 10 : animationDelay
              }s`,
              top: `${startPoint}%`,
              fontSize: `${fontSize}rem`,
              opacity: opacity > 0.6 ? 0.6 : opacity,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Background);
