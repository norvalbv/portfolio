import { useState, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTheme from 'hooks/useTheme';
import useWindowSize from 'hooks/useWindowSize';
import { classNames } from 'utils';
import ThemeToggle from 'components/ThemeToggle';
import Hamburger from 'hamburger-react';
import BenjaminNorvalBlack from 'assets/images/BNBlack.webp';
import BenjaminNorvalWhite from 'assets/images/BNWhite.webp';

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
    { id: '/blogs', title: 'My Blog' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 flex h-16 w-full flex-row-reverse items-end justify-between px-4 pt-20 lg:px-10"
      role="navigation"
      aria-label="Main"
    >
      <div className="z-50 flex flex-row-reverse items-center gap-2 md:gap-4" role="menubar">
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
      <button
        role="button"
        tabIndex={0}
        type="button"
        onClick={(): void => {
          navigate('/');
          setNavOpen(false);
        }}
        className="z-50 mb-2.5 h-8 md:mb-1.5 md:h-10"
      >
        <img
          src={isDarkMode ? BenjaminNorvalWhite : BenjaminNorvalBlack}
          className="h-full"
          alt="Benjamin Norval logo"
        />
      </button>
      <ul
        className={classNames(
          { hidden: !navOpen },
          // positioning
          'absolute inset-0 flex flex-col items-center justify-center text-center',
          // colours
          'divide-y divide-light-text bg-gradient-to-br from-white to-[#e0dce6] dark:divide-dark-text dark:from-dark-neutral dark:to-[#130926]',
          // sizing
          'h-screen w-screen'
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
              to={tab.id}
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
