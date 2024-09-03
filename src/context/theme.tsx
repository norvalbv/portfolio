import { ReactElement, createContext, useEffect, useMemo, useState } from 'react';

export type ThemeContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const defaultThemeContext: ThemeContextValue = {
  isDarkMode: true,
  toggleDarkMode: () => {},
};

const ThemeContext = createContext<ThemeContextValue>(defaultThemeContext);

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('portfolio-theme');
      return theme ? (JSON.parse(theme) as boolean) : true;
    }
    return true;
  });

  const toggleDarkMode = (): void => setIsDarkMode((p) => !p);

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    [isDarkMode]
  );

  useEffect(() => {
    localStorage.setItem('portfolio-theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
