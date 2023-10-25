import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Article details page')}</h1>
    </div>
  );
};

export default ArticleDetailsPage;
