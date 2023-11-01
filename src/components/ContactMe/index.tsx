import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const ContactMe = (): ReactElement => {
  return (
    <section className="mt-6">
      Liking this blog?&nbsp;
      <Link to="/contact">
        <button type="button" className="rounded-lg bg-accent-secondary px-3">
          Give me a message!
        </button>
      </Link>
    </section>
  );
};

export default ContactMe;
