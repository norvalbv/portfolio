import React, { ReactElement } from 'react';
import classNames from 'utils/classNames';

const Background = (): ReactElement => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'Jest',
    'Cypress',
    'D3',
    'Visx',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Node',
    'Express',
    'AWS Serverless',
    'CI/CD',
    'Git',
    'Bash',
    'GitHub',
    'Azure DevOps',
    'Agile/Scrum/Kanban',
    'SEO',
  ];
  const skillsRepeated = Array(15).fill(skills).flat();

  const exponentialDistribution = (num: number): number => {
    return -Math.log(1.0 - Math.random()) / num;
  };

  return (
    <div className="absolute h-full w-screen overflow-hidden">
      {skillsRepeated.map((item, i) => {
        const fontSize = Math.random() * (1.25 - 0.5) + 0.5; // Random size between 0.5rem and 1.5rem
        const opacity = (fontSize / 3.25).toFixed(2); // The bigger the font, the higher the opacity (max 1)

        const start = Math.floor(Math.random() * (40 - -10 + 1)) + 40;
        const end = Math.floor(Math.random() * (110 - 75 + 1)) + 75;

        // Inject the animation into the head of the document
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall${i} {
            0% { top: ${start}%; }
            100% { top: ${end}%; }
            }
        `;

        document.head.appendChild(style);

        const count = exponentialDistribution(0.01);
        const delay = exponentialDistribution(0.15);

        // return (
        //   <div
        //     key={i}
        //     className={classNames(
        //       'absolute -top-96 font-semibold uppercase tracking-wider text-white',
        //       'animate-fall'
        //     )}
        //     style={{
        //       left: `${Math.round(Math.random() * 100)}%`,
        //       animationDuration: `${Math.random() * 5 + 20}s`,
        //       animationDelay: `${
        //         delay > 10 ? Math.floor(Math.random() * (10 - 1 + 1)) + 1 : delay
        //       }s`,
        //       fontSize: `${fontSize}rem`,
        //       top: `${count}%`,
        //       opacity,
        //       //   animation: isFirst ? animation : '',
        //     }}
        //   >

        return (
          <div
            key={i}
            className={classNames(
              'absolute -top-96 animate-fall font-semibold uppercase tracking-wider text-white'
            )}
            style={{
              left: `${Math.round(Math.random() * 100)}%`,
              animationDuration: `${Math.random() * 5 + 15}s`,
              animationDelay: `${delay > 10 ? Math.random() * (10 - 1) + 10 : delay}s`,
              top: `${count}%`,
              fontSize: `${fontSize}rem`,
              opacity,
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Background;
