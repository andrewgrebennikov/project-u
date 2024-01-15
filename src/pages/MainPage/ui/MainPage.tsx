import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const MainPage = () => {
  const { t } = useTranslation('main');

  useEffect(() => {
    document.title = t('Главная страница');
  }, [t]);

  return (
    <>
      <h1>{t('Главная страница')}</h1>
    </>
  );
};

export default MainPage;
