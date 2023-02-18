import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation('notFound');

  return <h1>{t('Страница не найдена')}</h1>;
};
