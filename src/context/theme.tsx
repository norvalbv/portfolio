import React, { ReactElement, createContext, useMemo, useState } from 'react';

export type ThemeContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = (): void => setIsDarkMode(!isDarkMode);

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDarkMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
