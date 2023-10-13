import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'shared/Loader',
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const LoaderDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
