import React, { useState, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from 'hooks/useTheme';
import { classNames } from 'utils';
import ThemeToggle from 'components/ThemeToggle';
import Hamburger from './Hamburger';
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
    <nav className="sticky top-1 z-50 mx-4 flex h-16 items-center justify-center rounded-b-lg bg-white shadow-lg before:absolute before:top-[-0.25rem] before:h-1 before:w-full before:bg-gradient-to-r before:from-accent-secondary before:to-accent-main dark:bg-dark-dark dark:shadow-dark-neutral md:mx-20">
      <div className="mx-auto w-full max-w-screen-xl px-10">
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

        <div className="right-0 flex max-w-screen-xl flex-wrap items-center justify-between p-4 lg:hidden">
          <img
            src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
            className="h-4 w-32 cursor-pointer"
            alt="Benjamin Norval logo"
            onClick={(): void => navigate('/')}
          />
          <div className="flex flex-row-reverse items-center">
            <Hamburger onclick={(): void => setNavOpen(!navOpen)} />
            <div className="flex items-center justify-end md:h-3 md:w-32 lg:h-4 lg:w-40">
              <ThemeToggle />
            </div>
          </div>
          <ul
            className={classNames(
              { hidden: !navOpen },
              // positioning
              'absolute right-0 top-[4.25rem]',
              // colours
              'divide-y divide-light-text bg-white dark:divide-dark-text dark:bg-dark-dark',
              // sizing
              'flex w-60 flex-col items-center justify-center rounded-lg py-2 text-center'
            )}
          >
            {navbarTabs.map((tab) => (
              <li className="relative py-3" onClick={(): void => setNavOpen(false)} key={tab.id}>
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
