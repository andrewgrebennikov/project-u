import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ArticlesCategoriesField } from 'features/ArticlesCategory';

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { ArticlesCategory } from './ArticlesCategory';

const meta: Meta<typeof ArticlesCategory> = {
  title: 'features/ArticlesCategory',
  component: ArticlesCategory,
  decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof ArticlesCategory>;

export const Light: Story = {
  args: {
    category: ArticlesCategoriesField.ALL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    category: ArticlesCategoriesField.ALL,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
