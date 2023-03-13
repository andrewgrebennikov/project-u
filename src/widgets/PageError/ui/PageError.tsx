import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import cx from 'classix';

interface IPageErrorProps {
  className?: string;
}

export const PageError = (props: IPageErrorProps) => {
  const { className } = props;
  const { t } = useTranslation('error');

  return (
    <div className={cx(styles.container, className)}>
      <h1 className={styles.title}>{t('Произошла ошибка')}</h1>
      <p className={styles.subtitle}>{t('Попробуйте обновить страницу или зайти позже')}</p>
    </div>
  );
};
