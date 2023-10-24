import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'shared/Avatar',
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarLight: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const AvatarDark: Story = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};