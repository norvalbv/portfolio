import React from 'react';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Sass",
    "React",
    "Redux",
    "Node",
    "Express",
    "Sql",
    "Git",
    "GitHub",
    "Passport JS",
    "TailWindCSS",
  ];

  return (
    <div id="skills" className="m-auto flex h-[30rem] space-x-5 px-5 md:px-0 md:w-[90%] md:flex-col md:h-[40rem]">
      <div id="skills-text-container" className="p-5 flex flex-col justify-center items-center gap-1 md:p-0 md:mb-[-2rem]">
        <h2 className="text-2xl font-semibold">My skills</h2>
        <p className="text-base text-center p-1">
          Since my learning journey began I have specialised in the PERN stack.
          However, I am expanding my skills every day, I currently learning
          TypeScript, GraphQL and my continued learning on all my current
          skills.
        </p>
      </div>
      <div id="drop-container" className="relative overflow-hidden flex-1 space-x-5">
        {skills.map((item) => (
          <div key={Math.random()} className="absolute block uppercase text-lg font-medium tracking-wider text-red-400">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
