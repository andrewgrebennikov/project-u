import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';
import { Article, ArticlesSortField, ArticlesView } from 'entities/Article';
import { ArticlesSchema } from '../types/articlesSchema';
import { fetchArticlesData } from '../services/fetchArticlesData/fetchArticlesData';
import { ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage';
import { ArticlesOrder } from 'shared/types/common';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state.articles || articlesAdapter.getInitialState(),
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    view: ArticlesView.LIST,
    entities: {},
    ids: [],
    page: 1,
    hasMore: true,
    _inited: false,
    order: 'asc',
    sort: ArticlesSortField.CREATED,
    search: '',
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<ArticlesOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticlesSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticlesView;

      state.view = view;
      state.limit = view === ArticlesView.LIST ? 3 : 8;

      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesData.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
