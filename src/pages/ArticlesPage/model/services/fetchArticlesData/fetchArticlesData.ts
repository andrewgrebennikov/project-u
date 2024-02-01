import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from '../../selectors/getArticlesLimit/getArticlesLimit';

interface IFetchArticlesArgs {
  page?: number;
}

export const fetchArticlesData = createAsyncThunk<Article[], IFetchArticlesArgs, ThunkConfig<string>>(
  'articles/fetchArticlesData',
  async (args, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const { page } = args;
    const limit = getArticlesLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
