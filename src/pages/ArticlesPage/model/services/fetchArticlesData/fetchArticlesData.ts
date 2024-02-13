import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from 'entities/Article';
import { getArticlesOrder } from 'features/ArticlesOrder';
import { getArticlesSearch } from 'features/ArticlesSearch';
import { getArticlesSort } from 'features/ArticlesSort';

import { ThunkConfig } from 'app/providers/StoreProvider';

import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit';
import { getArticlesPage } from '../../selectors/getArticlesPage/getArticlesPage';

interface IFetchArticlesProps {
  replace?: boolean;
}

export const fetchArticlesData = createAsyncThunk<Article[], IFetchArticlesProps, ThunkConfig<string>>(
  'articles/fetchArticlesData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const limit = getArticlesLimit(getState());
    const page = getArticlesPage(getState());
    const sort = getArticlesSort(getState());
    const order = getArticlesOrder(getState());
    const search = getArticlesSearch(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
