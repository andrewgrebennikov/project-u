import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { country } from 'entities/Country';
import { currency } from 'entities/Currency';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
  title: 'entities/ProfileCard',
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const ProfileCardLight: Story = {
  args: {
    data: {
      username: 'Andrey',
      age: 32,
      country: country.Russia,
      lastname: 'Grebennikov',
      firstname: 'Andrey',
      city: 'Ульяновск',
      currency: currency.RUB,
      avatar: '',
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ProfileCardDark: Story = {
  args: {
    data: {
      username: 'Andrey',
      age: 32,
      country: country.Russia,
      lastname: 'Grebennikov',
      firstname: 'Andrey',
      city: 'Ульяновск',
      currency: currency.RUB,
      avatar: '',
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ProfileCardErrorLight: Story = {
  args: {
    error: 'Ошибка',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ProfileCardErrorDark: Story = {
  args: {
    error: 'Ошибка',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ProfileCardLoadingLight: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ProfileCardLoadingDark: Story = {
  args: {
    isLoading: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
