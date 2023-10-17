import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const NotFound = () => {
  const { t } = useTranslation('notFound');

  useEffect(() => {
    document.title = t('Страница не найдена');
  }, [t]);

  return <h1>{t('Страница не найдена')}</h1>;
};
