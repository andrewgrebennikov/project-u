import cx from 'classix';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getLoginIsLoading';
import { useTranslation } from 'react-i18next';
import styles from './ProfileCard.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={cx(className, styles.profileCard)}>
      <div className={styles.header}>
        <h1>{t('Профиль')}</h1>
        <Button variant="outlined">{t('Редактировать')}</Button>
      </div>
      <form action="" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input className={styles.input} type="text" label={t('Имя')} value={data?.first} readOnly />
          <Input className={styles.input} type="text" label={t('Фамилия')} value={data?.lastname} readOnly />
        </fieldset>
      </form>
    </div>
  );
};
