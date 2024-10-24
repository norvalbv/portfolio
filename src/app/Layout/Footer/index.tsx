import { ReactElement } from 'react';
import { GITHUB, LINKED_IN } from '@/src/constants/index';

const footerLinks = [
  {
    id: 'github',
    label: 'GitHub',
    link: GITHUB,
  },
  { id: 'linkedin', label: 'Linked In', link: LINKED_IN },
];

const Footer = (): ReactElement => {
  return (
    <footer className="relative text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
      <div className="mx-auto w-full max-w-screen-2xl p-4 md:py-6 lg:py-8">
        <div className="flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:justify-between">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer uppercase hover:text-accent-secondary hover:underline"
              >
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[10px] sm:text-xs lg:text-sm">
            © 2024 Designed and Created By Benjamin Norval.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
