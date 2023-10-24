import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContex';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

interface IUseTheme {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    if (theme === Theme.LIGHT) {
      newTheme = Theme.DARK;
    } else if (theme === Theme.DARK) {
      newTheme = Theme.RED;
    } else {
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);

    if (theme) {
      document.documentElement.classList.remove(theme);
    }

    document.documentElement.classList.add(newTheme);

    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
};
