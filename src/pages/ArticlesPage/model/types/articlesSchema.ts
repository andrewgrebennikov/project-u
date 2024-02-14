import { EntityState } from '@reduxjs/toolkit';

import { Article } from 'entities/Article';
import { ArticlesCategoriesField } from 'features/ArticlesCategory';
import { ArticlesOrderField } from 'features/ArticlesOrder';
import { ArticlesSortField } from 'features/ArticlesSort';
import { ArticlesView } from 'features/ArticlesViewSelector';

export interface ArticlesSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticlesView;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  order: ArticlesOrderField;
  sort: ArticlesSortField;
  search: string;
  type: ArticlesCategoriesField;
  _inited: boolean;
}
