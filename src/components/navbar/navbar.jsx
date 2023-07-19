import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <ul className="mainNav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a href="#about">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#my-work">My Work</a>
        </li>
        <li>
          <a href="#contact">Get In Touch</a>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <div className="hamburger">
        <div className="icon" onClick={handleMenu}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <div className={"hamburger-menu " + (menuOpen && "active")}>
          <ul>
            <li className="hamburger-item" onClick={handleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li className="hamburger-item" onClick={handleMenu}>
              <a href="#about">About Me</a>
            </li>
            <li className="hamburger-item" onClick={handleMenu}>
              <a href="#my-work">My Work</a>
            </li>
            <li className="hamburger-item" onClick={handleMenu}>
              <a href="#contact">Get In Touch</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
