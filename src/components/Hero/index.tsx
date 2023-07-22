import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';
import DownArrowIcon from 'components/SVG/DownArrowIcon';

const Hero = (): ReactElement => {
  const heading = 'Hello';
  const heading2 = 'I am Benjamin';
  const textClasses = [
    'hover:text-purple-300',
    'hover:text-yellow-300',
    'hover:text-teal-300',
    'hover:text-red-300',
    'hover:text-blue-300',
    'hover:text-green-300',
  ];

  return (
    <div className="relative top-[-5rem] grid h-screen place-items-center text-center uppercase">
      <div className="flex flex-col gap-8">
        <h1 className="mb-4 text-6xl font-semibold tracking-wide md:text-8xl">
          {heading.split('').map((item, i) => (
            <span
              className={classNames(
                'mb-10 inline-block text-accent-main',
                textClasses[Math.floor(Math.random() * textClasses.length)]
              )}
              key={i}
            >
              {item}
            </span>
          ))}
          <br />
          {heading2.split('').map((item, i) => (
            <span className={textClasses[Math.floor(Math.random() * textClasses.length)]} key={i}>
              {item}
            </span>
          ))}
        </h1>
        <h2 className="text-sm leading-7 tracking-wide">
          A 24 year old Full Stack Developer from the United Kingdom
        </h2>
      </div>
      <div className="absolute bottom-2 flex flex-col items-center">
        <p className="relative animate-bounce text-lg">Get to know me</p>
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default Hero;
