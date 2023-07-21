import React, { ReactElement, useEffect, useRef } from 'react';
import { init } from 'ityped';
import classNames from 'utils/classNames';
import DownArrowIcon from 'components/SVG/DownArrowIcon';

const Hero = (): ReactElement => {
  const textRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    init(textRef.current, {
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1250,
      showCursor: true,
      strings: ['Full Stack developer', 'Blockchain Enthusiast'],
    });
  }, []);

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
                'mb-10 inline-block text-purple-500',
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
              className={`hover:${
                textClasses[Math.floor(Math.random() * textClasses.length)]
              } text-white`}
              key={i}
            >
              {item}
            </span>
          ))}
        </h1>
        <h2 className="text-sm leading-7 tracking-wide text-white">
          A 24 year old
          {/* <span
            ref={textRef}
            id="typed"
            className="my-4 block font-medium tracking-wider text-blue-500"
          /> */}
          from the United Kingdom
        </h2>
      </div>
      <div className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1 text-xs text-white hover:underline">
        <p className="relative animate-bounce text-lg">Get to know me</p>
        <DownArrowIcon />
      </div>
    </div>
  );
};

export default Hero;
