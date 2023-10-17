import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { useEffect } from 'react';

const MainPage = () => {
  const { t } = useTranslation('main');

  useEffect(() => {
    document.title = t('Главная страница');
  }, [t]);

  return (
    <>
      <h1>{t('Главная страница')}</h1>
      <Counter />
    </>
  );
};

export default MainPage;
