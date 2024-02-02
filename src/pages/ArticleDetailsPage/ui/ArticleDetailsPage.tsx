import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import styles from './ArticleDetailsPage.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';

const initialReducers: ReducersList = { articleDetailsComments: articleDetailsCommentsReducer };

const ArticleDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id: articleId } = useParams();
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

  const onSubmitCommentForm = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(articleId));
    }
  }, [articleId, dispatch]);

  if (!articleId) {
    return <div>{t('Статья не найдена')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={styles.article}>
        <ArticleDetails articleId={articleId} />
        <AddCommentForm className={styles.form} onSubmitCommentForm={onSubmitCommentForm} />
        <div className={styles.comments}>
          <h2>Комментарии</h2>
          <CommentList comments={comments} isLoading={commentsIsLoading} />
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
