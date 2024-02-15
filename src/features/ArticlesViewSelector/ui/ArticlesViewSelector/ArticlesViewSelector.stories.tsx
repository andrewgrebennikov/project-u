import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ArticlesView } from 'features/ArticlesViewSelector';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticlesViewSelector } from './ArticlesViewSelector';

const meta: Meta<typeof ArticlesViewSelector> = {
  component: ArticlesViewSelector,
  title: 'features/ArticlesViewSelector',
};

export default meta;
type Story = StoryObj<typeof ArticlesViewSelector>;

export const LightList: Story = {
  args: { view: ArticlesView.LIST },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DarkList: Story = {
  args: { view: ArticlesView.LIST },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightGrid: Story = {
  args: { view: ArticlesView.GRID },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DarkGrid: Story = {
  args: { view: ArticlesView.GRID },
  decorators: [ThemeDecorator(Theme.DARK)],
};
