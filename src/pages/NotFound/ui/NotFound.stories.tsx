import { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  title: 'pages/NotFound',
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
