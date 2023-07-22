import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';
import { mySkills } from 'constants/index';

const Background = (): ReactElement => {
  const skillsRepeated = Array(12).fill(mySkills.split(',')).flat();

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
        const opacity = fontSize / 2; // The bigger the font, the higher the opacity (max 1)
        const duration = (2 - fontSize) * 30; // The smaller the font, the longer the duration of the animation

        // Start point of text before the animation starts.
        const startPoint = exponentialDistribution(0.01);
        const animationDelay = exponentialDistribution(0.15);

        return (
          <div
            key={i}
            className={classNames(
              'absolute -top-96 animate-fall font-semibold uppercase tracking-wider text-green-300'
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
