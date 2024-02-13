import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  component: CurrencySelect,
  title: 'entities/CurrencySelect',
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const CurrencySelectLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const CurrencySelectDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
