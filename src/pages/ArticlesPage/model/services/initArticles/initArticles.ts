import { createAsyncThunk } from '@reduxjs/toolkit';

import { ArticlesOrderField } from 'features/ArticlesOrder';
import { ArticlesSortField } from 'features/ArticlesSort';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';

export const initArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articles/initArticles',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesInited(getState());

    if (!inited) {
      const sort = searchParams.get('sort') as ArticlesSortField;
      const order = searchParams.get('order') as ArticlesOrderField;
      const search = searchParams.get('search');

      if (sort) {
        dispatch(articlesActions.setSort(sort));
      }

      if (order) {
        dispatch(articlesActions.setOrder(order));
      }

      if (search) {
        dispatch(articlesActions.setSearch(search));
      }

      dispatch(articlesActions.initState());
      dispatch(fetchArticlesData({}));
    }
  },
);
