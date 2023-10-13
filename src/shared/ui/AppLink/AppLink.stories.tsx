import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkUnderline } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';

const meta: Meta<typeof AppLink> = {
  component: AppLink,
  title: 'shared/AppLink',
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const UnderlineAlwaysLight: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.ALWAYS,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const UnderlineAlwaysDark: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.ALWAYS,
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};

export const UnderlineHoverLight: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.HOVER,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const UnderlineHoverDark: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.HOVER,
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};

export const UnderlineNoneLight: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.NONE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const UnderlineNoneDark: Story = {
  args: {
    children: 'Text',
    underline: AppLinkUnderline.NONE,
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};

export const StartIconLight: Story = {
  args: {
    children: 'Text',
    startIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const StartIconDark: Story = {
  args: {
    children: 'Text',
    startIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};

export const EndIconLight: Story = {
  args: {
    children: 'Text',
    endIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export const EndIconDark: Story = {
  args: {
    children: 'Text',
    endIcon: <IconArrowRight className="icon" width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.DARK), RouterDecorator],
};
