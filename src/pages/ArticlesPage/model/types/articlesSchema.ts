import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticlesOrder } from 'shared/types/common';
import { ArticlesView } from 'features/ArticlesViewSelector';
import { ArticlesSortField } from 'features/ArticlesSort';

export interface ArticlesSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticlesView;
  // pagination
  page: number;
  limit: number;
  hasMore: boolean;
  // filters
  order: ArticlesOrder;
  sort: ArticlesSortField;
  search: string;
  _inited: boolean;
}
