import "./skills.scss";

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
    <div id="skills">
      <div id="skills-text-container">
        <h2>My skills</h2>
        <p>
          Since my learning journey began I have specialised in the PERN stack.
          However, I am expanding my skills every day, I currently learning
          TypeScript, GraphQL and my continued learning on all my current
          skills.
        </p>
      </div>
      <div id="drop-container">
        {skills.map((item) => (
          <div key={Math.random()}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
