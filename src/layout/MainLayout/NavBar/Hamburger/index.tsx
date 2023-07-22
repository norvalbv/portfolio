import React, { ReactElement } from 'react';

type HamburgerProps = {
  onclick?: () => void;
};

const Hamburger = ({ onclick }: HamburgerProps): ReactElement => {
  const handleClick = (): void => {
    if (!onclick) return;
    onclick();
  };
  return (
    <button
      type="button"
      className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none"
      aria-controls="navbar-hamburger"
      aria-expanded="false"
      onClick={handleClick}
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
  );
};

export default Hamburger;
