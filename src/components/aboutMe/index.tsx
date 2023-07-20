import React, { ReactElement } from "react";
import profilePhoto from "../../files/images/profile-photo.png";

const AboutMe = (): ReactElement => {
  return (
    <div className="flex items-center h-screen -mt-12 md:flex-col-reverse md:justify-start md:h-auto">
      <div className="w-full grid grid-cols-16 grid-rows-16 md:w-auto md:inline-block">
        <img
          src={profilePhoto}
          alt="Headshot of Benjamin Norval"
          className="z-10 w-7/10 grid-row-start-1 grid-row-end-17 grid-col-start-5 grid-col-end-17 shadow-md md:w-3/10 md:shadow-none md:block md:rounded-xl md:m-auto"
        />
        <img
          src={profilePhoto}
          alt=""
          className="w-13/20 opacity-40 filter grayscale grid-row-start-2 grid-row-end-17 grid-col-start-4 grid-col-end-17 shadow-md md:hidden"
        />
      </div>
      <div className="text-center w-full md:mt-12">
        <h2 className="text-4xl font-semibold md:text-5xl">About Me</h2>
        <p className="my-6 mx-auto w-7/10 text-lg text-primary-light md:text-xl">
          Business graduate turned Full Stack software developer that has 1.5
          years of experience in web development.
          <br />
          <br />
          After obtaining my First Class Honours in my degree at The University
          of Reading I picked up a liking for programming and have been coding
          ever since.
          <br />
          <br />I would love for you to check out my projects and even reach
          out!
        </p>
        <button className="h-10 border-none rounded-xl cursor-pointer w-32 text-white bg-secondary-1">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
