import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'shared/IconButton',
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const IconButtonLight: Story = {
  args: {
    children: <IconArrowRight width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const IconButtonDark: Story = {
  args: {
    children: <IconArrowRight width="30" height="30" />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
