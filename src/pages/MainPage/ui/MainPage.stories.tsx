import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';

const meta: Meta<typeof MainPage> = {
  component: MainPage,
  title: 'pages/MainPage',
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({}), RouterDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({}), RouterDecorator],
};
