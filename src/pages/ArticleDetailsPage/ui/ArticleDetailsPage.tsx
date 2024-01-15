import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { id: articleId } = useParams();
  const { t } = useTranslation();

  if (!articleId) {
    return <div>{t('Статья не найдена')}</div>;
  }

  return <ArticleDetails articleId={articleId} />;
};

export default ArticleDetailsPage;
