import { createContext } from 'react';

import { ValueOf } from 'shared/lib/types/valueOf';

export const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  RED: 'red',
} as const;

export type Theme = ValueOf<typeof Theme>;

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
