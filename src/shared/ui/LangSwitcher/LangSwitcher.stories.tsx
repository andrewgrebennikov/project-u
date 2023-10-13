import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator';

const meta: Meta<typeof LangSwitcher> = {
  component: LangSwitcher,
  title: 'shared/LangSwitcher',
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Light: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT), TranslationDecorator],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), TranslationDecorator],
};
