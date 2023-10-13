import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
