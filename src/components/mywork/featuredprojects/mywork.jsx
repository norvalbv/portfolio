import "./mywork.scss";
import knowYourCode from "../../../files/images/know-your-code.png";
import googleClone from "../../../files/images/google-clone.png";
import ecomApp from "../../../files/images/landingpage.png";

export default function MyWork() {
  return (
    <>
      <h2 id="my-work">My Work</h2>
      <div className="item-container">
        <div className="item">
          <div className="image-flex">
            <img
              src={knowYourCode}
              alt="Interactive Comment Section screenshot"
              className="project-screenshot"
            />
          </div>
          <div className="text-flex second" id="todo">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Know Your Code</h4>
            <div className="project-desc-wrap">
              <p>
                I am the team leader for an ongoing open-sourced project which
                is an 'advanced cheat sheet' having comparisons to W3Schools.
              </p>
              <div>
                <a
                  href="https://github.com/norvalbv/know-your-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>HTML/CSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Passport JS</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="text-flex first" id="ecom">
            <div className="project-details">
              <h3 className="featured-project">Featured Project</h3>
              <h4 className="project-title">Full Stack ECommerce App</h4>
              <div className="project-desc-wrap" id="second-project">
                <p>
                  A Full Stack e-commerce web app built with the PERN stack.
                  There are different categories, products and more making the
                  web app as releastic as possible.
                </p>
                <div className="more-info">
                  <a
                    href="https://github.com/norvalbv/ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-info-button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="icons">
                <ul>
                  <li>HTML/CSS</li>
                  <li>SASS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node</li>
                  <li>Express JS</li>
                  <li>PostgreSQL</li>
                  <li>Passport JS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="image-flex">
            <img
              src={ecomApp}
              alt="Interactive Comment Section screenshot"
              className="project-screenshot"
            />
          </div>
        </div>
        <div className="item">
          <div className="image-flex">
            <img
              src={googleClone}
              alt="ECommerce App Project Screenshot"
              className="project-screenshot"
            />
          </div>
          <div className="text-flex second" id="google">
            <h3 className="featured-project">Featured Project</h3>
            <h4 className="project-title">Google Clone</h4>
            <div className="project-desc-wrap">
              <p className="project-desc">
                A Google Clone built with React hooks and functional components.
                The project uses an online API from RapidAPIs for receiving the
                data.
              </p>
              <div className="more-info">
                <a
                  href="https://github.com/norvalbv/google-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-info-button"
                >
                  Check Live Demo
                </a>
              </div>
            </div>
            <div className="icons">
              <ul>
                <li>HTML/CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
