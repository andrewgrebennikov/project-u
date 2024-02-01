import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';
import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited';

export const initArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articles/fetchArticlesMore',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesInited(getState());

    if (!inited) {
      dispatch(articlesActions.initState());
      dispatch(fetchArticlesData({ page: 1 }));
    }
  },
);
