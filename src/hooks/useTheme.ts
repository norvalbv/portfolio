import { useContext } from 'react';
import ThemeContext, { ThemeContextValue } from '@/src/context/theme';

const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be inside provider.');

  return context;
};

export default useTheme;
