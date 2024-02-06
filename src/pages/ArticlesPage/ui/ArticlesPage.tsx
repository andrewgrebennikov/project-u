import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ArticlesPage.module.scss';
import { ArticlesList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesActions, articlesReducer, getArticles } from '../model/slice/articlesSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesError } from '../model/selectors/getArticlesError/getArticlesError';
import { ArticlesView, ArticlesViewSelector, getArticlesView } from 'features/ArticlesViewSelector';
import { Page } from 'widgets/Page/Page';
import { fetchArticlesMore } from '../model/services/fetchArticlesMore/fetchArticlesMore';
import { initArticles } from '../model/services/initArticles/initArticles';
import { ArticlesSort, ArticlesSortField, getArticlesSort } from 'features/ArticlesSort';
import { fetchArticlesData } from '../model/services/fetchArticlesData/fetchArticlesData';
import { useSearchParams } from 'react-router-dom';

const initialReducers: ReducersList = { articles: articlesReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);
  const sort = useSelector(getArticlesSort);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleViewChange = (view: ArticlesView) => {
    dispatch(articlesActions.setView(view));
  };

  const onLoadMore = useCallback(() => {
    if (!isLoading) {
      dispatch(fetchArticlesMore());
    }
  }, [dispatch, isLoading]);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesData({ replace: true }));
  }, [dispatch]);

  const handleSortChange = useCallback(
    (newSort: ArticlesSortField) => {
      const isSortCreated = newSort === ArticlesSortField.CREATED;

      dispatch(articlesActions.setSort(newSort));
      dispatch(articlesActions.setPage(1));
      fetchData();

      !isSortCreated ? setSearchParams({ sort: newSort }) : setSearchParams({});
    },
    [dispatch, fetchData, setSearchParams],
  );

  useEffect(() => {
    dispatch(initArticles(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page className={styles.articles} onScrollEnd={onLoadMore}>
        <div className={styles.filters}>
          <ArticlesSort onChangeSort={handleSortChange} sort={sort} />
          <ArticlesViewSelector className={styles.articlesView} view={view} onViewChange={handleViewChange} />
        </div>
        <ArticlesList articles={articles} isLoading={isLoading} view={view} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
