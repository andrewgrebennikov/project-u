import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticlesPage> = {
  component: ArticlesPage,
  title: 'pages/ArticlesPage',
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
