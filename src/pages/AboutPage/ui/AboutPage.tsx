import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  useEffect(() => {
    document.title = t('Страница О нас');
  }, [i18n.language, t]);

  return (
    <>
      <h1>{t('Страница О нас')}</h1>
    </>
  );
};

export default AboutPage;
