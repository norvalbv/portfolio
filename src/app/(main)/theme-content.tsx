import useTheme from 'hooks/useTheme';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const ThemedContent = ({ children }: Props): ReactElement => {
  const { isDarkMode } = useTheme();

  return <div className={isDarkMode ? 'dark' : ''}>{children}</div>;
};

export default ThemedContent;
