import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'widget/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const Auth: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } })],
};

export const AuthDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
};
