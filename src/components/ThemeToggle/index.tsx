import React, { ReactElement } from 'react';
import { MoonIcon, SunIcon } from 'components/SVG';
import useTheme from 'hooks/useTheme';

const ThemeToggle = (): ReactElement => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return isDarkMode ? (
    <MoonIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-light-dark" />
  ) : (
    <SunIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-dark-dark" />
  );
};

export default ThemeToggle;
