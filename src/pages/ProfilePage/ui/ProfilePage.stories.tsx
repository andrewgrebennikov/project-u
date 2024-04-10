import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

import { ProfilePageLazy } from './ProfilePageLazy';

const meta: Meta<typeof ProfilePageLazy> = {
  title: 'pages/ProfilePage',
  component: ProfilePageLazy,
};

export default meta;
type Story = StoryObj<typeof ProfilePageLazy>;

export const ProfilePage: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        formData: {
          id: '1',
          firstname: 'Андрей',
          lastname: 'Гребенников',
          age: 32,
          currency: 'RUB',
          country: 'Россия',
          city: 'Ульяновск',
          username: 'ASGrebennikov',
          avatar: 'https://upload.wikimedia.org/wikipedia/ru/f/f6/Kirby_FL.png',
        },
      },
    }),
  ],
};
