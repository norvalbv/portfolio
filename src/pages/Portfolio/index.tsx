import AboutMe from "components/about-me";
import ContactMe from "components/contact-me";
import Intro from "components/intro";
import MyWork from "components/mywork/featuredprojects/mywork";
import MoreProjects from "components/mywork/moreprojects/moreprojects";
import Skills from "components/skills";

const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <div className="screen-container">
        <Intro />
        <AboutMe />
        <MyWork />
        <MoreProjects />
        <Skills />
        <ContactMe />
      </div>
    </div>
  );
};

export default PortfolioPage;
