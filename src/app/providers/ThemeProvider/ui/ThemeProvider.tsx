import { ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContex';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

const defaultTheme = (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) || Theme.LIGHT;
document.documentElement.classList.add(defaultTheme);

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
