import "./about-me.scss";
import profilePhoto from "../../files/images/profile-photo.png";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img
          src={profilePhoto}
          alt="Headshot of Benjamin Norval"
          id="overlayImage"
        />
        <img src={profilePhoto} alt="" id="underlayImage" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Business graduate turned Full Stack software developer that has 1.5
          years of experience in web development.
          <br />
          <br />
          After obtaining my First Class Honours in my degree at The
          University of Reading I picked up a liking for programming and have
          been coding ever since.
          <br />
          <br />I would love for you to check out my projects and even reach
          out!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
