import React, { useEffect, useRef } from "react";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1250,
      showCursor: true,
      strings: ["Full Stack developer", "Blockchain Enthusiast"],
    });
  }, []);

  let heading = "Hello,";
  let heading2 = "I am Benjamin";
  let classname = ["text-purple-500", "text-yellow-400", "text-teal-500", "text-red-500", "text-blue-500", "text-green-500"];

  return (
    <div id="intro" className="h-[calc(100vh-3rem)] p-16 uppercase relative">
      <div className="text flex flex-col gap-8">
        <h1 className="text-8xl font-semibold tracking-wide">
          {heading.split("").map((item, i) => (
            <span
              className={
                classname[Math.floor(Math.random() * classname.length)]
              }
              key={i}
            >
              {item}
            </span>
          ))}
          <br />
          {heading2.split("").map((item, i) => (
            <span
              className={
                classname[Math.floor(Math.random() * classname.length)]
              }
              key={i}
            >
              {item}
            </span>
          ))}
        </h1>
        <h2 className="text-sm leading-7 tracking-wide">
          A year old
          <br />
          <span ref={textRef} id="typed" className="tracking-wider font-medium text-blue-500"></span>
          <br />
          from the 
        </h2>
      </div>
      <div className="scroll absolute flex flex-col gap-1 items-center right-0 left-0 bottom-2 text-xs hover:underline">
        <p className="animate-bounce relative">Get to know me</p>
        {/* <ArrowDownwardIcon fontSize="small" /> */}
      </div>
    </div>
  );
}
