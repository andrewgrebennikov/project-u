import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { THEME_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  document.documentElement.classList.add(theme);
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);

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
