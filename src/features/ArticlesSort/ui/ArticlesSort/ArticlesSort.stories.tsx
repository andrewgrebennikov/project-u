import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticlesSort } from './ArticlesSort';

const meta: Meta<typeof ArticlesSort> = {
  component: ArticlesSort,
  title: 'features/ArticlesSort',
};

export default meta;
type Story = StoryObj<typeof ArticlesSort>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
