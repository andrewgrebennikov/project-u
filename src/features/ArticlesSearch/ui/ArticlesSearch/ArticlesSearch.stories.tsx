import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticlesSearch } from './ArticlesSearch';

const meta: Meta<typeof ArticlesSearch> = {
  component: ArticlesSearch,
  title: 'features/ArticlesSearch',
};

export default meta;
type Story = StoryObj<typeof ArticlesSearch>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
