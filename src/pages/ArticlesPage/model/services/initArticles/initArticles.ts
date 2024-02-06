import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesActions } from '../../slice/articlesSlice';
import { fetchArticlesData } from '../fetchArticlesData/fetchArticlesData';
import { getArticlesInited } from '../../selectors/getArticlesInited/getArticlesInited';
import { ArticlesSortField } from 'features/ArticlesSort';

export const initArticles = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articles/fetchArticlesMore',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesInited(getState());

    if (!inited) {
      const sort = searchParams.get('sort') as ArticlesSortField;

      if (sort) {
        dispatch(articlesActions.setSort(sort));
      }

      dispatch(articlesActions.initState());
      dispatch(fetchArticlesData({}));
    }
  },
);
