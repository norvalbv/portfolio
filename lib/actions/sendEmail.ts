'use server';

import emailjs from '@emailjs/nodejs';

const {
  EMAILJS_API_KEY: API_KEY,
  EMAILJS_SERVICE_ID: SERVICE_ID,
  EMAILJS_TEMPLATE_ID: TEMPLATE_ID,
  EMAILJS_PUBLIC_API_KEY: PUBLIC_API_KEY,
} = process.env;

if (!API_KEY || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_API_KEY) {
  throw new Error('Missing environment variables for emailjs');
}

type EmailParams = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = async (params: EmailParams): Promise<{ success: boolean; message: string }> => {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      params,
      {
        publicKey: PUBLIC_API_KEY,
        privateKey: API_KEY,
      }
    );

    return {
      success: true,
      message: 'Message Sent!',
    }
  } catch (err) {
    return {
      success: false,
      message: 'Message Was Not Able To Be Sent!',
    };
  }
};

export default sendEmail;
