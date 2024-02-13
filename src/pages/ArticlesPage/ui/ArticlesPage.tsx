import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ArticlesList } from 'entities/Article';
import { ArticlesOrderField } from 'features/ArticlesOrder';
import { ArticlesSortField } from 'features/ArticlesSort';
import { getArticlesView } from 'features/ArticlesViewSelector';
import { Filters } from 'widgets/Filters/intex';
import { Page } from 'widgets/Page/Page';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getArticlesError } from '../model/selectors/getArticlesError/getArticlesError';
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { fetchArticlesData } from '../model/services/fetchArticlesData/fetchArticlesData';
import { fetchArticlesMore } from '../model/services/fetchArticlesMore/fetchArticlesMore';
import { initArticles } from '../model/services/initArticles/initArticles';
import { articlesActions, articlesReducer, getArticles } from '../model/slice/articlesSlice';

import styles from './ArticlesPage.module.scss';

const initialReducers: ReducersList = { articles: articlesReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);
  const [searchParams] = useSearchParams();

  const onLoadMore = useCallback(() => {
    if (!isLoading) {
      dispatch(fetchArticlesMore());
    }
  }, [dispatch, isLoading]);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesData({ replace: true }));
  }, [dispatch]);

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(articlesActions.setPage(1));
      dispatch(articlesActions.setOrder(ArticlesOrderField.ASC));
      dispatch(articlesActions.setSort(ArticlesSortField.CREATED));
      dispatch(articlesActions.setSearch(''));
      dispatch(articlesActions.initState());
      fetchData();
    } else {
      dispatch(initArticles(searchParams));
    }
  }, [dispatch, fetchData, searchParams]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page className={styles.articles} onScrollEnd={onLoadMore}>
        <Filters className={styles.filters} />
        <ArticlesList articles={articles} isLoading={isLoading} view={view} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
