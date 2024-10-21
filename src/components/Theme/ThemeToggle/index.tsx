import { ReactElement } from 'react';
import { MoonIcon, SunIcon } from '@/src/components/SVG';
import useTheme from '@/src/hooks/useTheme';

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
      role="button"
      tabIndex={0}
    />
  ) : (
    <SunIcon
      onClick={toggleDarkMode}
      className="cursor-pointer hover:fill-dark-dark"
      size={size}
      role="button"
      tabIndex={0}
    />
  );
};

export default ThemeToggle;
