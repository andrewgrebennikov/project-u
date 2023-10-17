import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  useEffect(() => {
    document.title = t('Страница О нас');
  }, [t]);

  return (
    <>
      <h1>{t('Страница О нас')}</h1>
    </>
  );
};

export default AboutPage;
