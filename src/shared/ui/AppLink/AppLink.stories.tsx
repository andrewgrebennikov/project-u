import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkUnderline, AppLinkVariant } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const UnderlineAlways: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.ALWAYS,
  },
};

export const UnderlineHover: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.HOVER,
  },
};

export const UnderlineNone: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.NONE,
  },
};

export const StartIcon: Story = {
  args: {
    children: 'Text',
  },
};

export const EndIcon: Story = {
  args: {
    children: 'Text',
  },
};

export const VariantText: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariant.TEXT,
  },
};

export const VariantOutlined: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariant.OUTLINED,
  },
};

export const VariantContained: Story = {
  args: {
    children: 'Text',
    variant: AppLinkVariant.CONTAINED,
  },
};
