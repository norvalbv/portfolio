import React, { useState, ReactElement } from 'react';

const NavBar = (): ReactElement => {
  const [navOpen, setnavOpen] = useState(false);

  const navbarTabs = [
    { id: 'home', title: 'Home' },
    { id: 'aboutMe', title: 'About Me' },
    { id: 'myWork', title: 'My Work' },
    { id: 'contact', title: 'Contact Me' },
  ];

  return (
    <nav className="sticky top-1 z-10 flex h-12 w-full items-center justify-center border-b border-gray-400 bg-black opacity-75 before:absolute before:top-[-0.25rem] before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500">
      <ul className="hidden cursor-pointer space-x-6 text-sm lg:visible lg:flex">
        {navbarTabs.map((tab) => (
          <li className="hover:border-b hover:text-blue-500" key={tab.id}>
            <a href={`#${tab.id}`} className="text-white hover:text-blue-500">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="right-0 mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 lg:hidden"
        onClick={(): void => setnavOpen(!navOpen)}
      >
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div className={`${hidden} w-full``} id="navbar-hamburger">
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div
          className={`${
            navOpen && 'block'
          } fixed left-0 top-12 h-screen w-full bg-black opacity-75`}
        >
          <ul className="flex flex-col items-center space-y-3">
            {navbarTabs.map((tab) => (
              <li
                className="relative mt-2 w-28 px-2 text-center hover:text-blue-500"
                onClick={handleMenu}
                key={tab.id}
              >
                <a href={`#${tab.id}`} className="hover:text-blue-500">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
