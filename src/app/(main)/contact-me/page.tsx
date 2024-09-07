'use client';

import { ReactElement, SyntheticEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import CardWrapper from 'components/CardWrapper';
import TextField from 'components/TextField';
import ContactDetails from 'components/ContactDetails';

const API_KEY = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

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
      .send(SERVICE_ID || '', TEMPLATE_ID || '', query, API_KEY)
      .then(() => {
        setQuery({
          name: '',
          email: '',
          message: '',
        });
        toast.success('Message Sent!');
      })
      .catch(() => toast.error('Message Was Not Able To Be Sent!'));
  };

  return (
    <CardWrapper title="Come Say Hi!">
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
