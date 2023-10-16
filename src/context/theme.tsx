import React, { ReactElement, createContext, useEffect, useMemo, useState } from 'react';

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
  const theme = localStorage.getItem('theme');

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    theme ? (JSON.parse(theme) as boolean) : true
  );

  const toggleDarkMode = (): void => setIsDarkMode(!isDarkMode);

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDarkMode]
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
