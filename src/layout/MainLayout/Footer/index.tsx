import React, { ReactElement } from 'react';
import BenjaminNorvalBlack from '../../../../public/BenjaminNorvalBlack.png';
import BenjaminNorvalWhite from '../../../../public/BenjaminNorvalWhite.png';
import useTheme from 'hooks/useTheme';

const footerLinks = [
  {
    id: 'github',
    label: 'GitHub',
    link: 'https://github.com/norvalbv/',
  },
  { id: 'linkedin', label: 'Linked In', link: 'https://www.linkedin.com/in/benjamin-norval/' },
];

const Footer = (): ReactElement => {
  const { isDarkMode } = useTheme();
  return (
    <footer className="m-4 rounded-lg bg-white text-center text-xs shadow dark:bg-dark-dark">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div>
            <img
              src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
              className="h-4"
              alt="Benjamin Norval logo"
            />
          </div>
          <ul className="mt-6 flex items-center justify-center gap-6 text-sm text-light-text/75 dark:text-dark-text/75 sm:mt-0">
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
