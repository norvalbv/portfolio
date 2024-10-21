'use client';

import ThemeToggle from '@/src/components/Theme/ThemeToggle';
import Hamburger from 'hamburger-react';
import useTheme from 'hooks/useTheme';
import useWindowSize from 'hooks/useWindowSize';
import Link from 'next/link';
import { ReactElement, useState, useEffect } from 'react';
import { classNames } from '@/src/utils';
import BenjaminNorvalBlack from '../../../../public/logos/BNBlack.webp';
import BenjaminNorvalWhite from '../../../../public/logos/BNWhite.webp';

const NavBar = (): ReactElement => {
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const { isMobile } = useWindowSize();

  const navbarTabs = [
    { id: '/', title: 'Home' },
    { id: '/about-me', title: 'About Me' },
    { id: '/my-work', title: 'My Work' },
    { id: '/contact-me', title: 'Contact Me' },
    { id: '/blogs', title: 'My Blog' },
  ];

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setNavOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav
      className="sticky top-0 z-40 mx-auto flex h-16 w-full max-w-screen-2xl flex-row-reverse items-end justify-between px-4 pt-20 lg:px-10"
      role="navigation"
      aria-label="Main"
    >
      <div className="z-10 flex flex-row-reverse items-center gap-2 md:gap-4" role="menubar">
        <Hamburger
          toggled={navOpen}
          toggle={(): void => setNavOpen(!navOpen)}
          size={isMobile ? 24 : 28}
          rounded
          aria-expanded={navOpen}
          aria-label="Menu button"
        />
        <div className="flex items-center justify-end md:h-3 md:w-32 lg:h-4 lg:w-40">
          <ThemeToggle size={isMobile ? 24 : 28} aria-label="Theme toggle" />
        </div>
      </div>
      <Link
        role="button"
        href="/"
        tabIndex={0}
        type="button"
        onClick={(): void => {
          setNavOpen(false);
        }}
        className="z-10 mb-2.5 h-8 md:mb-1.5 md:h-10"
      >
        <img
          src={isDarkMode ? BenjaminNorvalWhite.src : BenjaminNorvalBlack.src}
          className="h-full"
          alt="Benjamin Norval logo"
        />
      </Link>
      <ul
        className={classNames(
          { hidden: !navOpen },
          // positioning
          'fixed inset-0 flex flex-col items-center justify-center text-center',
          // colours
          'divide-y divide-light-text bg-gradient-to-br from-white to-[#e0dce6] dark:divide-dark-text dark:from-dark-neutral dark:to-[#130926]',
          // sizing
          'size-dvh'
        )}
        role="menu"
        aria-hidden={!navOpen}
      >
        {navbarTabs.map((tab) => (
          <li
            className="relative w-[7rem] py-3"
            onClick={(): void => setNavOpen(false)}
            key={tab.id}
            role="none"
          >
            <Link
              href={tab.id}
              className="hover:text-accent-secondary"
              role="menuitem"
              tabIndex={navOpen ? 0 : -1} // Makes it focusable when the menu is open
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
