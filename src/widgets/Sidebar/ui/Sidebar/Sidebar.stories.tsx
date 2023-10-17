import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'widget/Sidebar',
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};
