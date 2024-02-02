import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Page } from 'widgets/Page/Page';

export const NotFound = () => {
  const { t } = useTranslation('notFound');

  useEffect(() => {
    document.title = t('Страница не найдена');
  }, [t]);

  return (
    <Page>
      <h1>{t('Страница не найдена')}</h1>
    </Page>
  );
};
