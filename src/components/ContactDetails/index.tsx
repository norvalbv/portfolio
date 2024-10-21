import { ReactElement } from 'react';
import { GITHUB, LINKED_IN } from 'constants/index';
// import CV from '../../assets/Benjamin_Norval_CV.pdf';
import StyledLink from '@/src/components/StyledLink';

type ContactDetailsProps = {
  className?: string;
};

const ContactDetails = ({ className = '' }: ContactDetailsProps): ReactElement => (
  <div
    className={`flex flex-col gap-2 rounded-lg bg-white/70 p-4 dark:bg-dark-dark/30 sm:p-6 ${className}`}
  >
    <h2 className="mb-4 text-xl underline underline-offset-8 sm:mb-6 sm:text-2xl">
      Contact Details:
    </h2>
    <p className="mb-4 text-sm sm:text-base">If you would like to contact me directly;</p>
    {/* <span className="my-1 text-sm md:text-base">
        Email: <StyledLink label="benjinorval@gmail.com" link={`mailto:${EMAIL}`} />
      </span> */}
    <span className="my-1 text-sm md:text-base">
      Linked In: <StyledLink label="Benjamin Norval" link={LINKED_IN} />
    </span>
    <span className="my-1 text-sm md:text-base">
      GitHub: <StyledLink label="norvalbv" link={GITHUB} />
    </span>
    {/* <span className="my-1 text-sm md:text-base">
      My CV: <StyledLink label="Download Here" link={CV} />
    </span> */}
    <p className="mt-4 text-sm sm:mt-6 sm:text-base">I look forward to hearing from you!</p>
  </div>
);

export default ContactDetails;
