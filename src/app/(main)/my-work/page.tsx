import CardWrapper from '@/src/components/CardWrapper';
import { PARISN_DESCRIPTION, PARISN_SKILLS } from '@/src/constants/index';
import { ReactElement } from 'react';
import Arian from '@/public/projects/arian.png';
import ArianApp from '@/public/projects/arianapp.png';
import ParisnHomepage from '@/public/projects/ParisnHomepage.webp';
import MyWorkCard from './MyWorkCard';

const MyWork = (): ReactElement => {
  return (
    <CardWrapper
      title="My Work"
      titleClassName="mb-6 sm:mb-8 md:mb-10 w-max border-b pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
    >
      <MyWorkCard
        title="Arian App - A Fintech App"
        subTitle="A one-of-a-kind banking app for vulnerable individuals"
        link={{ to: 'https://arianapp.com', label: 'Read full project' }}
        images={[
          { image: Arian.src, alt: 'Arian App Homepage.' },
          { image: ArianApp.src, alt: 'Arian App Homepage.' },
        ]}
        description={
          <ul className="list-disc space-y-2 pl-5 text-left">
            <li>
              Built a banking app to help vulnerable individuals control their finances with a
              trusted party
            </li>
            <li>
              Allows users to aggregate their banks within the app and provides them with a virtual
              or physical bank card
            </li>
            <li>
              Requires a trusted party to sign up, giving them controlled oversight of spending
            </li>
            <li>Trusted party can approve or deny transactions exceeding initial limits</li>
            <li>Fully compliant with GDPR, PSD2, and Open Banking regulations</li>
          </ul>
        }
        skills="NextJS, React, Plaid, Radix UI, TailwindCSS, and more"
      />
      <MyWorkCard
        title="PARISN"
        subTitle="An e-commerce application with a twist"
        link={{ to: 'https://github.com/norvalbv/parisn' }}
        description={PARISN_DESCRIPTION}
        images={[{ image: ParisnHomepage.src, alt: 'Parisn App Homepage - An ecommerce site.' }]}
        skills={PARISN_SKILLS}
      />
    </CardWrapper>
  );
};

export default MyWork;
