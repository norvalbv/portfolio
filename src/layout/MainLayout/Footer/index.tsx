import { ReactElement } from 'react';
import { GITHUB, LINKED_IN } from 'constants/index';
import CV from 'assets/Benjamin_Norval_CV.pdf';

const footerLinks = [
  {
    id: 'github',
    label: 'GitHub',
    link: GITHUB,
  },
  { id: 'linkedin', label: 'Linked In', link: LINKED_IN },
  { id: 'cv', label: 'CV', link: CV },
];

const Footer = (): ReactElement => {
  return (
    <footer className="relative text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="mx-auto w-full max-w-screen-2xl p-4 md:py-8 lg:px-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <ul className="flex items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer uppercase hover:text-accent-secondary hover:underline"
              >
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={link.id === 'cv'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[10px] lg:text-sm">© 2023 Designed and Created By Benjamin Norval.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
