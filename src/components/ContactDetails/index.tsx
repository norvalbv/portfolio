import React, { ReactElement } from 'react';
import {
  CONTACT_EMAIL,
  GITHUB,
  LINKED_IN,
  PHONE_NUMBER,
  PHONE_NUMBER_COUNTRY_CODE,
} from 'constants/index';
import CV from 'assets/Benjamin Norval CV.pdf';

const contactDetails = [
  {
    id: 'email',
    key: 'Email',
    hrefLink: `mailto:${CONTACT_EMAIL}`,
    label: CONTACT_EMAIL,
  },
  {
    id: 'phone',
    key: 'Phone',
    hrefLink: `tel:${PHONE_NUMBER_COUNTRY_CODE}${PHONE_NUMBER}`,
    label: `(${PHONE_NUMBER_COUNTRY_CODE}) ${PHONE_NUMBER}`,
  },
  {
    id: 'linkedin',
    key: 'Linked In',
    hrefLink: LINKED_IN,
    label: 'Benjamin Norval',
  },
  {
    id: 'github',
    key: 'GitHub',
    hrefLink: GITHUB,
    label: 'norvalbv',
  },
  {
    id: 'cv',
    key: 'CV',
    hrefLink: CV,
    label: 'CV',
  },
];

const ContactDetails = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white/70 p-6 dark:bg-dark-dark/30 lg:w-2/5">
      <h2 className="mb-6 underline underline-offset-8">Contact Details:</h2>
      <p className="mb-6">If you would like to contact me directly;</p>
      {contactDetails.map((contact) => (
        <span className="my-2" key={contact.id}>
          {contact.key}:&nbsp;
          <a
            rel="noreferrer"
            target="_blank"
            href={contact.hrefLink}
            className="my-4 underline transition duration-150 ease-linear hover:text-accent-secondary"
            download={contact.id === 'cv'}
          >
            {contact.label}
          </a>
        </span>
      ))}
      <p className="mt-6 italic">I look forward to hearing from you!</p>
    </div>
  );
};

export default ContactDetails;
