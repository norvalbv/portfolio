import React, { useState, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from 'hooks/useTheme';
import { classNames } from 'utils';
import ThemeToggle from 'components/ThemeToggle';
import Hamburger from 'hamburger-react';
import BenjaminNorvalBlack from '../../../../public/BenjaminNorvalBlack.png';
import BenjaminNorvalWhite from '../../../../public/BenjaminNorvalWhite.png';

const NavBar = (): ReactElement => {
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const navbarTabs = [
    { id: '/', title: 'Home' },
    { id: '/about-me', title: 'About Me' },
    { id: '/my-work', title: 'My Work' },
    { id: '/contact', title: 'Contact Me' },
  ];

  return (
    <nav className="sticky top-1 z-50 mx-0 flex h-16 items-center justify-center rounded-b-lg md:mx-20 lg:bg-light-neutral lg:shadow-lg lg:before:absolute lg:before:top-[-0.25rem] lg:before:h-1 lg:before:w-full lg:before:bg-gradient-to-r lg:before:from-accent-secondary lg:before:to-accent-main lg:dark:bg-dark-dark lg:dark:shadow-dark-neutral">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-10">
        <div className="hidden items-center justify-between lg:flex">
          <img
            src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
            className="h-4 cursor-pointer md:w-32 lg:w-40"
            alt="Benjamin Norval logo"
            onClick={(): void => navigate('/')}
          />
          <ul className="flex flex-1 cursor-pointer justify-center space-x-10 text-sm">
            {navbarTabs.map((tab) => (
              <li
                className="underline-offset-4 hover:text-accent-secondary hover:underline"
                key={tab.id}
              >
                <Link to={tab.id} className="hover:text-accent-secondary">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end md:h-3 md:w-32 lg:h-4 lg:w-40">
            <ThemeToggle />
          </div>
        </div>

        <div className="right-0 flex max-w-screen-xl flex-wrap items-center justify-end lg:hidden">
          <div className="z-50 flex flex-row-reverse items-center gap-2">
            <Hamburger
              toggled={navOpen}
              toggle={(): void => setNavOpen(!navOpen)}
              size={24}
              rounded
              distance="lg"
            />
            <div className="flex items-center justify-end md:h-3 md:w-32 lg:h-4 lg:w-40">
              <ThemeToggle />
            </div>
          </div>
          <ul
            className={classNames(
              { hidden: !navOpen },
              // positioning
              'absolute right-0 top-[-.25rem]',
              // colours
              'divide-y divide-light-text bg-gradient-to-br from-white to-[#e0dce6] dark:divide-dark-text dark:from-dark-neutral dark:to-[#130926]',
              // sizing
              'flex h-screen w-screen flex-col items-center justify-center rounded-lg text-center'
            )}
          >
            {navbarTabs.map((tab) => (
              <li
                className="relative w-[7rem] py-3"
                onClick={(): void => setNavOpen(false)}
                key={tab.id}
              >
                <Link to={tab.id} className="hover:text-accent-secondary">
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
