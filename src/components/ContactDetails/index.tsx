import React, { ReactElement } from 'react';
import {
  CONTACT_EMAIL,
  GITHUB,
  LINKED_IN,
  PHONE_NUMBER,
  PHONE_NUMBER_COUNTRY_CODE,
} from 'constants/index';

const ContactDetails = (): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="mb-6">Contact Details:</h2>
      <p>If you would like to contact me directly;</p>
      <span>
        Email:&nbsp;
        <a
          rel="noreferrer"
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline transition duration-150 ease-linear hover:text-accent-secondary"
        >
          {CONTACT_EMAIL}
        </a>
      </span>
      <span>
        Phone:&nbsp;
        <a
          rel="noreferrer"
          href={`tel:${PHONE_NUMBER_COUNTRY_CODE}${PHONE_NUMBER}`}
          className="underline transition duration-150 ease-linear hover:text-accent-secondary"
        >
          ({PHONE_NUMBER_COUNTRY_CODE})&nbsp;{PHONE_NUMBER}
        </a>
      </span>
      <span>
        Linked In:&nbsp;
        <a
          rel="noreferrer"
          href={LINKED_IN}
          className="underline transition duration-150 ease-linear hover:text-accent-secondary"
        >
          Benjamin Norval
        </a>
      </span>
      <span>
        GitHub:&nbsp;
        <a
          rel="noreferrer"
          href={GITHUB}
          className="underline transition duration-150 ease-linear hover:text-accent-secondary"
        >
          norvalbv
        </a>
      </span>
    </div>
  );
};

export default ContactDetails;
