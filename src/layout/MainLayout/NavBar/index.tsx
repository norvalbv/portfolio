import React, { useState, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from 'hooks/useTheme';
import useWindowSize from 'hooks/useWindowSize';
import { classNames } from 'utils';
import ThemeToggle from 'components/ThemeToggle';
import Hamburger from 'hamburger-react';
import BenjaminNorvalBlack from '../../../../public/BNBlack.png';
import BenjaminNorvalWhite from '../../../../public/BNWhite.png';

const NavBar = (): ReactElement => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { isMobile } = useWindowSize();

  const navbarTabs = [
    { id: '/', title: 'Home' },
    { id: '/about-me', title: 'About Me' },
    { id: '/my-work', title: 'My Work' },
    { id: '/contact', title: 'Contact Me' },
  ];

  return (
    <nav className="fixed z-50 flex h-16 w-full flex-row-reverse items-end justify-between px-4 pt-20 lg:px-10">
      <div className="z-50 flex flex-row-reverse items-center gap-2 lg:gap-6">
        <Hamburger
          toggled={navOpen}
          toggle={(): void => setNavOpen(!navOpen)}
          size={isMobile ? 24 : 32}
          rounded
          // distance="lg"
        />
        <div className="flex items-center justify-end md:h-3 md:w-32 lg:h-4 lg:w-40">
          <ThemeToggle size={isMobile ? 24 : 32} />
        </div>
      </div>
      <img
        src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
        className="z-50 hidden cursor-pointer md:block md:h-12"
        alt="Benjamin Norval logo"
        onClick={(): void => navigate('/')}
      />
      <ul
        className={classNames(
          { hidden: !navOpen },
          // positioning
          'absolute inset-0',
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
    </nav>
  );
};

export default NavBar;
