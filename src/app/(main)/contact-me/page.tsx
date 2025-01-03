'use client';

import sendEmail from '@/lib/actions/sendEmail';
import { erroneousToast, successfulToast } from '@/lib/toasts';
import CardWrapper from '@/src/components/CardWrapper';
import ContactDetails from '@/src/components/ContactDetails';
import TextField from '@/src/components/TextField';
import { ReactElement, SyntheticEvent, useState } from 'react';

const ContactMe = (): ReactElement => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const setQueryByKey = (key: keyof typeof query, value: string | boolean): void => {
    setQuery({ ...query, [key]: value });
  };

  const submitEmail = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    try {
      const { message } = await sendEmail(query);
      successfulToast(message);

      setQuery({
        name: '',
        email: '',
        message: '',
      });
    } catch (e) {
      erroneousToast('Error sending email');
    }
  };

  return (
    <CardWrapper
      title="Come Say Hi!"
      titleClassName="mb-6 sm:mb-8 md:mb-10 w-max border-b pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
    >
      <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
        <form
          className="rounded-lg bg-white/70 p-4 dark:bg-dark-dark/30 sm:p-6 lg:w-3/5"
          onSubmit={submitEmail}
        >
          <h2 className="mb-4 text-xl underline underline-offset-8 sm:mb-6 sm:text-2xl">
            Contact Form:
          </h2>
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
            className="my-4 sm:my-6"
            type="email"
          />
          <TextField
            label="Message"
            value={query.message}
            onChange={(val): void => setQueryByKey('message', val)}
            inputType="textarea"
            required
          />
          <button
            type="submit"
            className="mt-4 rounded bg-accent-primary px-4 py-2 text-white transition-colors duration-200 hover:bg-accent-secondary sm:mt-6"
          >
            Submit
          </button>
        </form>
        <ContactDetails className="lg:w-2/5" />
      </div>
    </CardWrapper>
  );
};

export default ContactMe;
