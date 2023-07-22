import React, { useState, ReactElement } from 'react';
import useTheme from 'hooks/useTheme';
import classNames from 'utils/classNames';
import { MoonIcon, SunIcon } from 'components/SVG';
import BenjaminNorvalBlack from '../../../../public/BenjaminNorvalBlack.png';
import BenjaminNorvalWhite from '../../../../public/BenjaminNorvalWhite.png';

const NavBar = (): ReactElement => {
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navbarTabs = [
    { id: 'home', title: 'Home' },
    { id: 'about-me', title: 'About Me' },
    { id: 'my-work', title: 'My Work' },
    { id: 'contact', title: 'Contact Me' },
  ];

  return (
    <nav className="sticky top-1 z-10 mx-4 flex h-20 items-center justify-center rounded-b-lg bg-white shadow-lg before:absolute before:top-[-0.25rem] before:h-1 before:w-full before:bg-gradient-to-r before:from-accent-secondary before:to-accent-main dark:bg-black dark:shadow-dark-neutral">
      <div className="mx-auto w-full max-w-screen-xl px-10">
        <div className="hidden items-center justify-between md:flex">
          <img
            src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
            className="h-4 w-40"
            alt="Benjamin Norval logo"
          />
          <ul className="flex flex-1 cursor-pointer justify-center space-x-10 text-sm">
            {navbarTabs.map((tab) => (
              <li
                className="underline-offset-4 hover:text-accent-secondary hover:underline"
                key={tab.id}
              >
                <a href={`#${tab.id}`} className="hover:text-accent-secondary">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-40 justify-end md:visible">
            {isDarkMode ? (
              <MoonIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-light-dark" />
            ) : (
              <SunIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-dark-dark" />
            )}
          </div>
        </div>

        <div
          className="right-0 flex max-w-screen-xl flex-wrap items-center p-4 md:hidden"
          onClick={(): void => setNavOpen(!navOpen)}
        >
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={classNames(
              navOpen ? '' : 'hidden',
              'fixed top-12 h-screen w-1/2 text-center'
            )}
          >
            <ul className="flex flex-col items-center justify-center gap-4 divide-y divide-white rounded-lg bg-gray-50 font-medium dark:bg-black">
              {navbarTabs.map((tab) => (
                <li
                  className="relative w-28 px-2 hover:text-accent-secondary"
                  onClick={(): void => setNavOpen(!navOpen)}
                  key={tab.id}
                >
                  <a href={`#${tab.id}`} className="text-center hover:text-accent-secondary">
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
