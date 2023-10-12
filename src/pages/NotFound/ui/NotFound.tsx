import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const NotFound = () => {
  const { t, i18n } = useTranslation('notFound');

  useEffect(() => {
    document.title = t('Страница не найдена');
  }, [i18n.language, t]);

  return <h1>{t('Страница не найдена')}</h1>;
};
