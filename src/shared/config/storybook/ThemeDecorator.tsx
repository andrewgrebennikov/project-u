import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY } from 'app/providers/ThemeProvider/lib/ThemeContex';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  document.documentElement.classList.add(theme);
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

  if (theme === Theme.DARK) {
    document.documentElement.classList.remove(Theme.LIGHT);
  } else {
    document.documentElement.classList.remove(Theme.DARK);
  }

  return (
    <ThemeProvider initialTheme={theme}>
      <Story />
    </ThemeProvider>
  );
};
