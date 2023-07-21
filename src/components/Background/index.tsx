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
        const fontSize = Math.random() * (1.5 - 0.5) + 0.5; // Random size between 0.5rem and 1.5rem
        const opacity = (fontSize / 4.5).toFixed(2); // The bigger the font, the higher the opacity (max 1)

        return (
          <div
            key={i}
            className={classNames(
              'absolute -top-96 animate-fall font-semibold uppercase tracking-wider text-white'
            )}
            style={{
              left: `${Math.round(Math.random() * 100)}%`,
              animationDuration: `${Math.random() * 5 + 15}s`,
              animationDelay: `${exponentialDistribution(1)}s`,
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
