import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
