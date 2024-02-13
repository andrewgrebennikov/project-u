import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Skeleton, SkeletonVariant } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'shared/Skeleton',
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonLight: Story = {
  args: {
    height: '100',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SkeletonCircularLight: Story = {
  args: {
    width: '100',
    height: '100',
    variant: SkeletonVariant.CIRCULAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SkeletonDark: Story = {
  args: {
    height: '100',
    style: { backgroundColor: 'red' },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SkeletonCircularDark: Story = {
  args: {
    width: '100',
    height: '100',
    variant: SkeletonVariant.CIRCULAR,
    style: { backgroundColor: 'red' },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
