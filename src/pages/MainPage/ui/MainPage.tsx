import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('main');

  useEffect(() => {
    document.title = t('Главная страница');
  }, [t]);

  return (
    <Page>
      <h1>{t('Главная страница')}</h1>
    </Page>
  );
};

export default MainPage;
