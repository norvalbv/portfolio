import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';
import DownArrowIcon from 'components/SVG/DownArrowIcon';

const Hero = (): ReactElement => {
  const heading = 'Hello';
  const heading2 = 'I am Benjamin';
  const textClasses = [
    'text-purple-50',
    'text-yellow-50',
    'text-teal-50',
    'text-red-50',
    'text-blue-50',
    'text-green-50',
  ];

  return (
    <div className="relative grid h-[calc(100vh-5rem)] place-items-center p-16 text-center uppercase">
      <div className="flex flex-col gap-8">
        <h1 className="mb-4 text-6xl font-semibold tracking-wide md:text-8xl">
          {heading.split('').map((item, i) => (
            <span
              className={classNames(
                'mb-10 inline-block text-accent-main',
                `hover:${textClasses[Math.floor(Math.random() * textClasses.length)]}`
              )}
              key={i}
            >
              {item}
            </span>
          ))}
          <br />
          {heading2.split('').map((item, i) => (
            <span
              className={`hover:${textClasses[Math.floor(Math.random() * textClasses.length)]}`}
              key={i}
            >
              {item}
            </span>
          ))}
        </h1>
        <h2 className="text-sm leading-7 tracking-wide">
          A 24 year old Full Stack Developer from the United Kingdom
        </h2>
      </div>
      <div className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1 text-xs hover:underline">
        <p className="relative animate-bounce text-lg">Get to know me</p>
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default Hero;
