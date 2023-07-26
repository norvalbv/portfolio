import React, { ReactElement } from 'react';
import { GITHUB, LINKED_IN } from 'constants/index';

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
    <footer className="relative z-10 mx-4 mt-20 rounded-lg text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-between">
          <p>© 2023 Designed and Created By Benjamin Norval.</p>
          <ul className="flex items-center justify-center gap-6">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
