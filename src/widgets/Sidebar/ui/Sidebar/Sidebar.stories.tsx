import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'widget/Sidebar',
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({}), RouterDecorator],
};

export const SidebarDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({}), RouterDecorator],
};

export const SidebarAuthLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } }), RouterDecorator],
};

export const SidebarAuthDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } }), RouterDecorator],
};
