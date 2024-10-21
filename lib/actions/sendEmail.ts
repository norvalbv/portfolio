import emailjs from '@emailjs/nodejs';

const {
  EMAILJS_API_KEY: API_KEY,
  EMAILJS_SERVICE_ID: SERVICE_ID,
  EMAILJS_TEMPLATE_ID: TEMPLATE_ID,
  EMAILJS_PUBLIC_API_KEY: PUBLIC_API_KEY,
} = process.env;

console.log(API_KEY, SERVICE_ID, TEMPLATE_ID, 'test');

if (!API_KEY || !SERVICE_ID || !TEMPLATE_ID) {
  throw new Error('Missing environment variables for emailjs');
}

const templateParams = {
  name: 'James',
  notes: 'Check this out!',
};


const sendEmail = async (): Promise<void> => {
  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_API_KEY,
    privateKey: API_KEY,
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
    );
};

export default sendEmail;
