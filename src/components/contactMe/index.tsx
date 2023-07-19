import "./contact-me.scss";

const ContactMe = () => {
  return (
    <div id="contact">
      <h2 id="contact-title">Come Say Hi!</h2>
      <p id="contact-text">
        Drop me an email for any reason or alternatively, reach out via my
        socials
      </p>
      <form
        action="https://formsubmit.co/benjinorval@gmail.com"
        method="POST"
        className="input-container"
      >
        <h3 className="input-label">Name</h3>
        <div className="input">
          <input
            type="text"
            minLength="1"
            maxLength="100"
            pattern="[a-zA-Z]+"
            required
            className="input-field"
            placeholder="Name"
          />
        </div>
        <h3 className="input-label">Email</h3>
        <div className="input">
          <input
            type="text"
            id="email"
            className="input-field"
            required
            placeholder="Email"
          />
        </div>
        <h3 className="input-label">Send me a message</h3>
        <div className="input">
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            className="input-field"
          />
        </div>
        <div className="input">
          <textarea
            placeholder="Send me a message!"
            className="input-field"
            style={{ height: "10rem" }}
            required
          />
        </div>
        <input type="submit" id="submit" />
      </form>
      <p style={{ fontSize: "14px" }}>Reach me on my socials...</p>
      <ul id="socials">
        <li>
          <a
            href="https://github.com/norvalbv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benjamin-norval-a36ab01b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked In
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
