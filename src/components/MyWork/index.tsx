import React, { ReactElement } from 'react';
import CardWrapper from 'components/CardWrapper';

const MyWork = (): ReactElement => {
  return (
    <CardWrapper title="My Work">
      <div className="relative my-10 rounded-t-xl bg-gray-700/75 px-6 py-10 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500">
        <h3>Lorem ipsum dolor sit,</h3>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore molestias
          inventore eaque dolorum ipsum adipisci? Consectetur quae nesciunt dolorum harum dolor
          maiores culpa magnam, esse delectus accusantium voluptates expedita aspernatur velit
          necessitatibus inventore porro reprehenderit? Quia culpa aliquam sunt, consectetur dolores
          eius recusandae eos adipisci dolor maxime soluta deserunt.
        </p>
        <div>
          <p>
            Built with: UI Design, React, SWR, JavaScript, TypeScript, TailWindCSS, Serverless
            Backend, AWS Lambda, API Gateway, DynamoDB, Cognito, AWS CloudWatch, Stripe Checkout,
            Real-time Data, WebSockets, Automatic Pricing, User Accounts, Scalable Storage, AWS S3,
            Architectural Design, Microservices.
          </p>
        </div>
        {/* <img /> */}
      </div>
      <div className="relative my-10 rounded-t-xl bg-gray-700/75 px-6 py-10 text-center before:absolute before:bottom-[-0.25rem] before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500">
        <h3>Lorem ipsum dolor sit,</h3>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore molestias
          inventore eaque dolorum ipsum adipisci? Consectetur quae nesciunt dolorum harum dolor
          maiores culpa magnam, esse delectus accusantium voluptates expedita aspernatur velit
          necessitatibus inventore porro reprehenderit? Quia culpa aliquam sunt, consectetur dolores
          eius recusandae eos adipisci dolor maxime soluta deserunt.
        </p>
        {/* <img /> */}
      </div>
    </CardWrapper>
  );
};

export default MyWork;
