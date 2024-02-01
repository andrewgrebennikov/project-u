import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ArticlesPage.module.scss';
import { ArticlesList, ArticlesView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesActions, articlesReducer, getArticles } from '../model/slice/articlesSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesError } from '../model/selectors/getArticlesError/getArticlesError';
import { getArticlesView } from '../model/selectors/getArticlesView/getArticlesView';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { fetchArticlesMore } from '../model/services/fetchArticlesMore/fetchArticlesMore';
import { initArticles } from '../model/services/initArticles/initArticles';

const initialReducers: ReducersList = { articles: articlesReducer };

const ArticlesPage = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const view = useSelector(getArticlesView);

  const handleViewChange = (view: ArticlesView) => {
    dispatch(articlesActions.setView(view));
  };

  const onLoadMore = useCallback(() => {
    dispatch(fetchArticlesMore());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initArticles());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page className={styles.articles} onScrollEnd={onLoadMore}>
        <ArticlesViewSelector className={styles.articlesView} view={view} onViewChange={handleViewChange} />
        <ArticlesList articles={articles} isLoading={isLoading} view={view} error={error} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
