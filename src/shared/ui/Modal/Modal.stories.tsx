import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'shared/Modal',
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
  args: {
    children: 'Text',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ModalDark: Story = {
  args: {
    children: 'Text',
    isOpen: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
