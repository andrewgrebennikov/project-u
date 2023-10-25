import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('Articles page')}</h1>
    </div>
  );
};

export default ArticlesPage;
