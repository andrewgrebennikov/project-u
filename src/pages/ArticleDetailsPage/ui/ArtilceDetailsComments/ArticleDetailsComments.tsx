import { Suspense, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AddCommentForm } from 'features/AddCommentForm';

import { CommentList } from 'entities/Comment';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading/getArticleDetailsCommentsIsLoading';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

import styles from './ArticleDetailsComments.module.scss';

interface IArticleDetailsCommentsProps {
  className?: string;
  articleId: string | undefined;
}

const ArticleDetailsComments = (props: IArticleDetailsCommentsProps) => {
  const { articleId } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('translation');
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

  if (!articleId && __PROJECT__ !== 'storybook') {
    return <p>{t('Статья не найдена')}</p>;
  }

  return (
    <>
      <Suspense fallback={'Загрузка...'}>
        <AddCommentForm className={styles.form} onSubmitCommentForm={onSubmitCommentForm} />
      </Suspense>
      <div className={styles.comments}>
        <h2>{t('Комментарии')}</h2>
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </>
  );
};

export default ArticleDetailsComments;
