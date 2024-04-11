import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page/Page';

const NotFound = () => {
  const { t } = useTranslation('translation');

  useEffect(() => {
    document.title = t('Страница не найдена');
  }, [t]);

  return (
    <Page>
      <h1>{t('Страница не найдена')}</h1>
    </Page>
  );
};

export default NotFound;
