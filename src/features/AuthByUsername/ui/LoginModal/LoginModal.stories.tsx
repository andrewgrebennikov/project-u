import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { LoginModal } from './LoginModal';

const meta: Meta<typeof LoginModal> = {
  component: LoginModal,
  title: 'features/AuthByUsername/LoginModal',
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Light: Story = {
  args: {
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ login: { username: '123', password: '123' } })],
};

export const Dark: Story = {
  args: {
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ login: { username: '123', password: '123' } })],
};
