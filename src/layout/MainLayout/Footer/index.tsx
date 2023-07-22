import React, { ReactElement } from 'react';
import useTheme from 'hooks/useTheme';
import { GITHUB, LINKED_IN } from 'constants/index';
import BenjaminNorvalBlack from '../../../../public/BenjaminNorvalBlack.png';
import BenjaminNorvalWhite from '../../../../public/BenjaminNorvalWhite.png';

const footerLinks = [
  {
    id: 'github',
    label: 'GitHub',
    link: GITHUB,
  },
  { id: 'linkedin', label: 'Linked In', link: LINKED_IN },
];

const Footer = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <footer className="relative z-10 mx-4 mt-20 rounded-lg bg-white text-center text-xs shadow dark:bg-dark-dark">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div>
            <img
              src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
              className="h-4"
              alt="Benjamin Norval logo"
            />
          </div>
          <ul className="flex items-center justify-center gap-6 text-sm text-light-text/75 dark:text-dark-text/75 sm:mt-0">
            {footerLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer uppercase hover:underline hover:opacity-50"
              >
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 lg:my-8" />
        <p className="mb-4 text-gray-500 dark:text-gray-400">
          © 2023 Designed and Created By Benjamin Norval.
        </p>
        <p className="text-gray-500 dark:text-gray-400">All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
