import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'shared/Select',
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectLight: Story = {
  args: {
    label: 'Выберите пункт',
    options: [
      {
        value: '1',
        name: '1',
      },
      {
        value: '2',
        name: '2',
      },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SelectDark: Story = {
  args: {
    label: 'Выберите пункт',
    options: [
      {
        value: '1',
        name: '1',
      },
      {
        value: '2',
        name: '2',
      },
    ],
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
