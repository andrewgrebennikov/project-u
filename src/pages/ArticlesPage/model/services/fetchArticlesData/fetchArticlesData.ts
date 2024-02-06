import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit';
import { getArticlesPage } from '../../selectors/getArticlesPage/getArticlesPage';
import { ArticlesSortField, getArticlesSort } from 'features/ArticlesSort';

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
    const order = sort === ArticlesSortField.VIEWS ? 'desc' : 'asc';

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
