import CardWrapper from 'components/CardWrapper';
import React, { ReactElement } from 'react';

const ContactMe = (): ReactElement => {
  return (
    <CardWrapper title="Come Say Hi!">
      <form
        action="https://formsubmit.co/benjinorval@gmail.com"
        method="POST"
        className="w-1/3 sm:w-full"
      >
        <h3 className="text-sm capitalize tracking-wide">Name</h3>
        <div className="relative mb-4">
          <input
            type="text"
            minLength={1}
            maxLength={100}
            pattern="[a-zA-Z]+"
            required
            className="mb-2 h-9 w-full border-none bg-transparent px-2 outline-none"
            placeholder="Name"
          />
          <div className="absolute bottom-2 left-0 h-1 w-full bg-gradient-to-r" />
        </div>
        <h3 className="text-sm capitalize tracking-wide">Email</h3>
        <div className="relative mb-4">
          <input
            type="text"
            id="email"
            required
            className="mb-2 h-9 w-full border-none bg-transparent px-2 outline-none"
            placeholder="Email"
          />
          <div className="absolute bottom-2 left-0 h-1 w-full bg-gradient-to-r" />
        </div>
        <h3 className="text-sm capitalize tracking-wide">Send me a message</h3>
        <div className="relative mb-4">
          <input
            type="text"
            name="_subject"
            className="mb-2 h-9 w-full border-none bg-transparent px-2 outline-none"
            placeholder="Subject"
          />
          <div className="absolute bottom-2 left-0 h-1 w-full bg-gradient-to-r" />
        </div>
        <div className="relative mb-4">
          <textarea
            required
            className="text-primary-light h-40 w-full resize-y border-none bg-transparent px-2 outline-none"
            placeholder="Send me a message!"
          ></textarea>
          <div className="from-secondary-1 to-secondary-2 absolute bottom-2 left-0 h-1 w-full bg-gradient-to-r" />
        </div>
        <input
          type="submit"
          className="bg-primary-light border-gradient-to-r from-secondary-1 to-secondary-2 mb-1 h-8 w-20 cursor-pointer border-2 border-transparent"
        />
      </form>
      <p className="text-sm">Reach me on my socials...</p>
      <ul className="flex justify-center gap-4">
        <li>
          <a
            href="https://github.com/norvalbv/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-base font-light uppercase hover:underline hover:opacity-50"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benjamin-norval/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-base font-light uppercase hover:underline hover:opacity-50"
          >
            Linked In
          </a>
        </li>
      </ul>
    </CardWrapper>
  );
};

export default ContactMe;
