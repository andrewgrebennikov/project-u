import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'widget/Navbar',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({}), RouterDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({}), RouterDecorator],
};

export const Auth: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } }), RouterDecorator],
};

export const AuthDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } }), RouterDecorator],
};
