import React, { ReactElement, SyntheticEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import CardWrapper from 'components/CardWrapper';
import TextField from 'components/TextField';
import ContactDetails from 'components/ContactDetails';

const { EMAILJS_API_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } = process.env;

const ContactMe = (): ReactElement => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const setQueryByKey = (key: keyof typeof query, value: string | boolean): void => {
    setQuery({ ...query, [key]: value });
  };

  const submitEmail = (e: SyntheticEvent): void => {
    e.preventDefault();

    emailjs
      .send(EMAILJS_SERVICE_ID || '', EMAILJS_TEMPLATE_ID || '', query, EMAILJS_API_KEY)
      .then(() => {
        setQuery({
          name: '',
          email: '',
          message: '',
        });
        toast.success('Successfully sent!');
      })
      .catch(() => toast.error('Message was not able to be sent'));
  };

  return (
    <CardWrapper title="Come Say Hi!" className="w-10/12 min-w-[20rem]" margin>
      <div className="flex flex-col gap-6 lg:flex-row">
        <form
          className="rounded-lg bg-white/70 p-6 dark:bg-dark-dark/30 lg:w-3/5"
          onSubmit={submitEmail}
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
            type="email"
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
