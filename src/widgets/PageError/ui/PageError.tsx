import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';

export const PageError = () => {
  const { t } = useTranslation('error');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('Произошла ошибка')}</h1>
      <p className={styles.subtitle}>{t('Попробуйте обновить страницу или зайти позже')}</p>
    </div>
  );
};
