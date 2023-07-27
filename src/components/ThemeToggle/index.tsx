import React, { ReactElement } from 'react';
import { MoonIcon, SunIcon } from 'components/SVG';
import useTheme from 'hooks/useTheme';

type ThemeToggleProps = {
  size?: number;
};

const ThemeToggle = ({ size = 24 }: ThemeToggleProps): ReactElement => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return isDarkMode ? (
    <MoonIcon
      onClick={toggleDarkMode}
      className="cursor-pointer hover:fill-light-dark"
      size={size}
    />
  ) : (
    <SunIcon onClick={toggleDarkMode} className="cursor-pointer hover:fill-dark-dark" size={size} />
  );
};

export default ThemeToggle;
