import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  title: 'features/LoginForm',
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: '123' } }),
    RouterDecorator,
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { username: '123', password: '123' } }),
    RouterDecorator,
  ],
};

export const LightWithError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: '123', error: 'Ошибка' } }),
    RouterDecorator,
  ],
};

export const DarkWithError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { username: '123', password: '123', error: 'Ошибка' } }),
    RouterDecorator,
  ],
};

export const LightWithLoading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({ login: { username: '123', password: '123', isLoading: true } }),
    RouterDecorator,
  ],
};

export const DarkWithLoading: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ login: { username: '123', password: '123', isLoading: true } }),
    RouterDecorator,
  ],
};
