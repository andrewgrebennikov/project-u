import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articleReducer } from '../../model/slice/articleSlice';
import { fetchArticleData } from '../../model/services/fetchArticleData/fetchArticleData';
import { getArticleData } from '../../model/selectors/getArticleData/getArticleData';
import { getArticleIsLoading } from '../../model/selectors/getArticleIsLoading/getArticleIsLoading';
import { getArticleError } from '../../model/selectors/getArticleError/getArticleError';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlock/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlock/ArticleImageBlockComponent';
import styles from './ArticleDetails.module.scss';
import IconEye from 'shared/assets/icons/icon-eye.svg';
import IconDate from 'shared/assets/icons/icon-date.svg';
import { ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from 'entities/Article/model/types/article';

const initialReducers: ReducersList = {
  article: articleReducer,
};

interface IArticleDetailsProps {
  articleId: string;
  className?: string;
}

export const ArticleDetails = (props: IArticleDetailsProps) => {
  const { articleId } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articleData = useSelector(getArticleData);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);

  const content = () => {
    if (isLoading) {
      // TODO article skeleton
      return <p>{t('Загрузка статьи')}</p>;
    } else if (error) {
      return <p>{t('Произошла ошибка при загрузки статьи')}</p>;
    } else {
      return (
        <>
          <Avatar className={styles.avatar} src={articleData?.img} alt={articleData?.title} width="200" height="200" />
          <h1 className={styles.title}>{articleData?.title}</h1>
          <p className={styles.subtitle}>{articleData?.subtitle}</p>
          <div className={styles.info}>
            <p className={styles.views}>
              <IconEye width="24" height="24" className="icon" /> {articleData?.views}
            </p>
            <time className={styles.date} dateTime={articleData?.createdAt}>
              <IconDate width="24" height="24" className="icon" /> {articleData?.createdAt}
            </time>
          </div>
          {articleData?.blocks.map((block) => {
            if (block.type === 'TEXT') {
              return (
                <ArticleTextBlockComponent
                  className={styles.textBlock}
                  key={block.id}
                  block={block as ArticleTextBlock}
                />
              );
            }

            if (block.type === 'CODE') {
              return (
                <ArticleCodeBlockComponent
                  className={styles.codeBlock}
                  key={block.id}
                  block={block as ArticleCodeBlock}
                />
              );
            }

            if (block.type === 'IMAGE') {
              return (
                <ArticleImageBlockComponent
                  className={styles.imageBlock}
                  key={block.id}
                  block={block as ArticleImageBlock}
                />
              );
            }

            return null;
          })}
        </>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchArticleData(articleId));
  }, [articleId, dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {content()}
    </DynamicModuleLoader>
  );
};
