import "./moreprojects.scss";

export default function MoreProjects() {
  return (
    <div className="more-projects">
      <h2 id="more-projects-main-title">View more of my work</h2>
      <div className="more-projects-inner-container">
        <div className="project">
          <h2 className="project-title">IP Tracker App</h2>
          <p className="project-desc">
            A IP tracking application that uses Leaflet JS and IPify JS
          </p>
          <a
            href="https://github.com/norvalbv/IP-Address-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn more
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>API</li>
          </ul>
        </div>
        <div className="project">
          <h2 className="project-title">Rock Paper Scissors Game</h2>
          <p className="project-desc">
            A Rock Paper Scissors game built with React.
          </p>
          <a
            href="https://github.com/norvalbv/rock-paper-scissors"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn More
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Express</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="project">
          <h2 className="project-title">Todo application</h2>
          <p className="project-desc">
            A full stack to-do application using the PERN stack
          </p>
          <a
            href="https://github.com/norvalbv/todo-app-pern-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="learn-more-button"
          >
            Learn More
          </a>
          <ul className="icons">
            <li>HTML/CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
      <button className="learn-more-button">
        <a
          href="https://github.com/norvalbv"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.9rem" }}
        >
          View all of my projects on my GitHub
        </a>
      </button>
    </div>
  );
}
