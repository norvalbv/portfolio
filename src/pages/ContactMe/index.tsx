import React, { ReactElement, useState } from 'react';
import CardWrapper from 'components/CardWrapper';
import TextField from 'components/TextField';
import ContactDetails from 'components/ContactDetails';

const ContactMe = (): ReactElement => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const setQueryByKey = (key: keyof typeof query, value: string | boolean): void => {
    setQuery({ ...query, [key]: value });
  };

  return (
    <CardWrapper title="Come Say Hi!" className="top-[2rem] w-10/12 min-w-[20rem] lg:top-[4rem]">
      <div className="flex flex-col gap-6 lg:flex-row">
        <form
          action="https://formsubmit.co/benjinorval@gmail.com"
          method="POST"
          className="rounded-lg bg-white/70 p-6 dark:bg-dark-dark/30 lg:w-3/5"
        >
          <h2 className="mb-6 underline underline-offset-8">Contact Form:</h2>
          <TextField
            label="Name"
            value={query.name}
            onChange={(val): void => setQueryByKey('name', val)}
            required
          />
          <TextField
            label="Email"
            value={query.email}
            onChange={(val): void => setQueryByKey('email', val)}
            required
            className="my-6"
          />
          <TextField
            label="Message"
            value={query.message}
            onChange={(val): void => setQueryByKey('message', val)}
            inputType="textarea"
            required
          />
          <button type="submit" className="mt-6 hover:underline">
            Submit
          </button>
        </form>
        <ContactDetails />
      </div>
    </CardWrapper>
  );
};

export default ContactMe;
