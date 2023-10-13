import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'shared/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputLight: Story = {
  args: {
    label: 'Введите имя',
    type: 'text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const InputDark: Story = {
  args: {
    label: 'Введите имя',
    type: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
