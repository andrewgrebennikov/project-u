import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown as DropdownComponent } from './Dropdown';

const meta: Meta<typeof DropdownComponent> = {
  title: 'shared/Dropdown',
  component: DropdownComponent,
};

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

export const Dropdown: Story = {
  args: {
    button: 'Кнопка',
    items: [
      { id: '1', label: '1' },
      { id: '2', label: '2' },
    ],
  },
};
