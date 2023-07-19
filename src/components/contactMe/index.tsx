const ContactMe = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-16 bg-gradient-to-b from-transparent to-primary-dark">
      <h2 className="text-4xl font-semibold md:text-5xl">Come Say Hi!</h2>
      <p className="text-lg text-primary-light md:text-xl">Drop me an email for any reason or alternatively, reach out via my socials</p>
      <form
        action="https://formsubmit.co/benjinorval@gmail.com"
        method="POST"
        className="w-1/3 md:w-7/10 sm:w-full"
      >
        <h3 className="text-secondary-1 capitalize tracking-wide text-sm">Name</h3>
        <div className="relative mb-4">
          <input
            type="text"
            minLength="1"
            maxLength="100"
            pattern="[a-zA-Z]+"
            required
            className="w-full h-9 mb-2 bg-transparent border-none px-2 text-primary-light outline-none"
            placeholder="Name"
          />
          <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary-1 to-secondary-2"></div>
        </div>
        <h3 className="text-secondary-1 capitalize tracking-wide text-sm">Email</h3>
        <div className="relative mb-4">
          <input
            type="text"
            id="email"
            required
            className="w-full h-9 mb-2 bg-transparent border-none px-2 text-primary-light outline-none"
            placeholder="Email"
          />
          <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary-1 to-secondary-2"></div>
        </div>
        <h3 className="text-secondary-1 capitalize tracking-wide text-sm">Send me a message</h3>
        <div className="relative mb-4">
          <input
            type="text"
            name="_subject"
            className="w-full h-9 mb-2 bg-transparent border-none px-2 text-primary-light outline-none"
            placeholder="Subject"
          />
          <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary-1 to-secondary-2"></div>
        </div>
        <div className="relative mb-4">
          <textarea
            required
            className="w-full h-40 bg-transparent border-none px-2 text-primary-light outline-none resize-y"
            placeholder="Send me a message!"
          ></textarea>
          <div className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary-1 to-secondary-2"></div>
        </div>
        <input type="submit" className="w-20 h-8 mb-1 bg-primary-light border-2 border-transparent border-gradient-to-r from-secondary-1 to-secondary-2 cursor-pointer" />
      </form>
      <p className="text-sm">Reach me on my socials...</p>
      <ul className="flex justify-center gap-4">
        <li>
          <a
            href="https://github.com/norvalbv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base uppercase font-light hover:underline hover:opacity-50 cursor-pointer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benjamin-norval/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base uppercase font-light hover:underline hover:opacity-50 cursor-pointer"
          >
            Linked In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
