import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
  let classname = ["a", "b", "c", "d", "e", "f"];

  return (
    <div id="intro">
      <div className="text">
        <h1>
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
        <h2>
          A 22 year old
          <br />
          <span ref={textRef} id="typed"></span>
          <br />
          from the United Kingdom
        </h2>
      </div>
      <div className="scroll">
        <p>Get to know me</p>
        <ArrowDownwardIcon fontSize="small" />
      </div>
    </div>
  );
}
