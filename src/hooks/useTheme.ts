import { useContext } from 'react';
import ThemeContext, { ThemeContextValue } from '@/src/context/theme';

const useTheme = (): ThemeContextValue => {
  const @/src/context = useContext(ThemeContext);

  if (!@/src/context) throw new Error('useTheme @/src/context must be inside provider.');

  return @/src/context;
};

export default useTheme;
