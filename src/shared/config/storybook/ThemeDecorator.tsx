import cx from 'classix';
import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => {
  return (
    <ThemeProvider>
      <div className={cx('app', theme)}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
