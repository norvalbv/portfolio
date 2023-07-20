import React, { ReactElement, useEffect, useRef } from 'react';
import { init } from 'ityped';

const Hero = (): ReactElement => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1250,
      showCursor: true,
      strings: ['Full Stack developer', 'Blockchain Enthusiast'],
    });
  }, []);

  const heading = 'Hello,';
  const heading2 = 'I am Benjamin';
  const classname = [
    'text-purple-500',
    'text-yellow-400',
    'text-teal-500',
    'text-red-500',
    'text-blue-500',
    'text-green-500',
  ];

  return (
    <div id="intro" className="relative h-[calc(100vh-3rem)] p-16 uppercase">
      <div className="text flex flex-col gap-8">
        <h1 className="text-8xl font-semibold tracking-wide">
          {heading.split('').map((item, i) => (
            <span className={classname[Math.floor(Math.random() * classname.length)]} key={i}>
              {item}
            </span>
          ))}
          <br />
          {heading2.split('').map((item, i) => (
            <span className={classname[Math.floor(Math.random() * classname.length)]} key={i}>
              {item}
            </span>
          ))}
        </h1>
        <h2 className="text-sm leading-7 tracking-wide">
          A year old
          <br />
          <span
            ref={textRef}
            id="typed"
            className="font-medium tracking-wider text-blue-500"
          ></span>
          <br />
          from the
        </h2>
      </div>
      <div className="scroll absolute bottom-2 left-0 right-0 flex flex-col items-center gap-1 text-xs hover:underline">
        <p className="relative animate-bounce">Get to know me</p>
        {/* <ArrowDownwardIcon fontSize="small" /> */}
      </div>
    </div>
  );
};

export default Hero;
