import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './ArticlesPage.module.scss';
import { ArticlesList, ArticlesView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articlesActions, articlesReducer, getArticles } from '../model/slice/articlesSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticlesData } from '../model/services/fetchArticlesData/fetchArticlesData';
import { getArticlesIsLoading } from '../model/selectors/getArticlesIsLoading/getArticlesIsLoading';
import { getArticlesError } from '../model/selectors/getArticlesError/getArticlesError';
import { getArticlesView } from '../model/selectors/getArticlesView/getArticlesView';
import { ArticlesViewSelector } from 'features/ArticlesViewSelector';

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

  useEffect(() => {
    dispatch(fetchArticlesData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={styles.articles}>
        <ArticlesViewSelector className={styles.articlesView} view={view} onViewChange={handleViewChange} />
        <ArticlesList articles={articles} isLoading={isLoading} view={view} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
