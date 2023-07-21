import React, { ReactElement } from 'react';

const AboutMe = (): ReactElement => {
  return (
    <div className="-mt-12 flex h-screen items-center md:h-auto md:flex-col-reverse md:justify-start">
      <div className="grid-cols-16 grid-rows-16 grid w-full md:inline-block md:w-auto">
        {/* <img
          // src={profilePhoto}
          alt="Headshot of Benjamin Norval"
          className="w-7/10 grid-row-start-1 grid-row-end-17 grid-col-start-5 grid-col-end-17 md:w-3/10 z-10 shadow-md md:m-auto md:block md:rounded-xl md:shadow-none"
        />
        <img
          src={profilePhoto}
          alt=""
          className="w-13/20 grid-row-start-2 grid-row-end-17 grid-col-start-4 grid-col-end-17 opacity-40 shadow-md grayscale filter md:hidden"
        /> */}
      </div>
      <div className="w-full text-center md:mt-12">
        <h2 className="text-4xl font-semibold md:text-5xl">About Me</h2>
        <p className="w-7/10 text-primary-light mx-auto my-6 text-lg md:text-xl">
          Business graduate turned Full Stack software developer that has 1.5 years of experience in
          web development.
          <br />
          <br />
          After obtaining my First Class Honours in my degree at The University of Reading I picked
          up a liking for programming and have been coding ever since.
          <br />
          <br />I would love for you to check out my projects and even reach out!
        </p>
        <button className="bg-secondary-1 h-10 w-32 cursor-pointer rounded-xl border-none text-white">
          View Projects
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
