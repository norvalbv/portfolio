import React, { useState, ReactElement } from 'react';

const NavBar = (): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="relative sticky top-1 z-10 flex h-12 w-full items-center justify-center border-b border-gray-400 bg-black bg-opacity-75 before:absolute before:top-[-0.25rem] before:h-1 before:w-full before:bg-gradient-to-r before:from-blue-500 before:to-green-500">
      <ul className="mainNav flex cursor-pointer space-x-6 text-sm md:hidden">
        <li className="nav-item hover:border-b hover:text-blue-500">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li className="nav-item hover:border-b hover:text-blue-500">
          <a href="#about" className="hover:text-blue-500">
            About Me
          </a>
        </li>
        <li className="nav-item hover:border-b hover:text-blue-500">
          <a href="#my-work" className="hover:text-blue-500">
            My Work
          </a>
        </li>
        <li className="nav-item hover:border-b hover:text-blue-500">
          <a href="#contact" className="hover:text-blue-500">
            Get In Touch
          </a>
        </li>
      </ul>
      <div className="hamburger hidden md:block">
        <div className="icon flex cursor-pointer flex-col space-y-1.5" onClick={handleMenu}>
          <span className="line1 h-0.5 w-full bg-gray-300"></span>
          <span className="line2 h-0.5 w-full bg-gray-300"></span>
          <span className="line3 h-0.5 w-full bg-gray-300"></span>
        </div>
        <div
          className={`hamburger-menu ${
            menuOpen && 'block'
          } fixed absolute left-0 top-12 h-screen w-full bg-black bg-opacity-75`}
        >
          <ul className="flex flex-col items-center space-y-3">
            <li
              className="hamburger-item relative mt-2 w-28 px-2 text-center hover:text-blue-500"
              onClick={handleMenu}
            >
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li
              className="hamburger-item relative mt-2 w-28 px-2 text-center hover:text-blue-500"
              onClick={handleMenu}
            >
              <a href="#about" className="hover:text-blue-500">
                About Me
              </a>
            </li>
            <li
              className="hamburger-item relative mt-2 w-28 px-2 text-center hover:text-blue-500"
              onClick={handleMenu}
            >
              <a href="#my-work" className="hover:text-blue-500">
                My Work
              </a>
            </li>
            <li
              className="hamburger-item relative mt-2 w-28 px-2 text-center hover:text-blue-500"
              onClick={handleMenu}
            >
              <a href="#contact" className="hover:text-blue-500">
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
