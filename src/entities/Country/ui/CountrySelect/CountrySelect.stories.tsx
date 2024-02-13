import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  component: CountrySelect,
  title: 'entities/CountrySelect',
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const CountrySelectLight: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const CountrySelectDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
