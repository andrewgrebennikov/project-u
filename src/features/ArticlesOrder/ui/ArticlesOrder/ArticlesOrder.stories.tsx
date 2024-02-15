import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticlesOrder } from './ArticlesOrder';

const meta: Meta<typeof ArticlesOrder> = {
  component: ArticlesOrder,
  title: 'features/ArticlesOrder',
};

export default meta;
type Story = StoryObj<typeof ArticlesOrder>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
