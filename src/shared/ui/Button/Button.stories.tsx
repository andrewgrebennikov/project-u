import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'shared/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TextLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const TextDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ContainedLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.CONTAINED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ContainedDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.CONTAINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlinedLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlinedDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const StartIconLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    startIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const StartIconDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    startIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const EndIconLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    endIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const EndIconDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    endIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DisabledLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const DisabledDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.TEXT,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
