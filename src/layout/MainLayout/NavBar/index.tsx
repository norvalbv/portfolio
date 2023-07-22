import React, { useState, ReactElement } from 'react';
import useTheme from 'hooks/useTheme';
import classNames from 'utils/classNames';
import { MoonIcon, SunIcon } from 'components/SVG';

const NavBar = (): ReactElement => {
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navbarTabs = [
    { id: 'home', title: 'Home' },
    { id: 'about-me', title: 'About Me' },
    { id: 'my-work', title: 'My Work' },
    { id: 'contact', title: 'Contact Me' },
  ];

  console.log(isDarkMode);

  return (
    <nav className="sticky top-1 z-10 flex h-20 w-full items-center justify-center border-b border-gray-400 bg-white opacity-75 before:absolute before:top-[-0.25rem] before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500 dark:bg-black">
      <div className="relative grid w-[50rem] max-w-screen-xl place-content-center">
        <div className="md:visible md:absolute md:right-0">
          {isDarkMode ? (
            <MoonIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-slate-100" />
          ) : (
            <SunIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-slate-100" />
          )}
        </div>

        <ul className="hidden cursor-pointer space-x-10 text-sm md:visible md:flex">
          {navbarTabs.map((tab) => (
            <li className="underline-offset-4 hover:text-blue-500 hover:underline" key={tab.id}>
              <a href={`#${tab.id}`} className="text-white hover:text-blue-500">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="right-0 flex max-w-screen-xl flex-wrap items-center p-4 md:hidden"
          onClick={(): void => setNavOpen(!navOpen)}
        >
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none dark:text-gray-400"
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
            <ul className="flex flex-col items-center justify-center gap-4 divide-y divide-white rounded-lg bg-gray-50 font-medium text-white dark:bg-black">
              {navbarTabs.map((tab) => (
                <li
                  className="relative w-28 px-2 hover:text-blue-500"
                  onClick={(): void => setNavOpen(!navOpen)}
                  key={tab.id}
                >
                  <a href={`#${tab.id}`} className="text-center hover:text-blue-500">
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
