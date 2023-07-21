import React, { ReactElement } from 'react';

const Skills = (): ReactElement => {
  const skills = [
    'HTML',
    'CSS',
    'Sass',
    'React',
    'Redux',
    'Node',
    'Express',
    'Sql',
    'Git',
    'GitHub',
    'Passport JS',
    'TailWindCSS',
  ];

  return (
    <div className="m-auto flex h-[30rem] space-x-5 px-5 md:h-[40rem] md:w-[90%] md:flex-col md:px-0">
      <div className="flex flex-col items-center justify-center gap-1 p-5 md:mb-[-2rem] md:p-0">
        <h2 className="text-2xl font-semibold">My skills</h2>
        <p className="p-1 text-center text-base">
          Since my learning journey began I have specialised in the PERN stack. However, I am
          expanding my skills every day, I currently learning TypeScript, GraphQL and my continued
          learning on all my current skills.
        </p>
      </div>
      <div className="relative flex-1 space-x-5 overflow-hidden">
        {skills.map((item) => (
          <div
            key={Math.random()}
            className="absolute block text-lg font-medium uppercase tracking-wider text-red-400"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
