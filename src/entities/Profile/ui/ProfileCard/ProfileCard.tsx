import cx from 'classix';
import { useTranslation } from 'react-i18next';
import styles from './ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Profile } from '../../model/types/profileSchema';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { CountrySelect, Country } from 'entities/Country';

interface IProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCountry?: (value: Country) => void;
  onChangeCurrency?: (currency: Currency) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
  const {
    className,
    isLoading,
    error,
    data,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={cx(className, styles.profileCard)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cx(className, styles.profileCard)}>
        <p>{t('Произошла ошибка')}</p>
      </div>
    );
  }

  return (
    <div className={cx(className, styles.profileCard)}>
      {data?.avatar && (
        <Avatar
          className={styles.avatar}
          src={data.avatar}
          width="150"
          height="150"
          alt={`${data.firstname} ${data.lastname}`}
        />
      )}
      <form action="" className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            className={styles.input}
            type="text"
            label={t('Имя')}
            value={data?.firstname}
            onChange={onChangeFirstname}
            readOnly={readOnly}
          />
          <Input
            className={styles.input}
            type="text"
            label={t('Фамилия')}
            value={data?.lastname}
            onChange={onChangeLastname}
            readOnly={readOnly}
          />
          <Input
            className={styles.input}
            type="number"
            label={t('Возраст')}
            value={String(data?.age)}
            onChange={onChangeAge}
            readOnly={readOnly}
          />
          <Input
            className={styles.input}
            type="text"
            label={t('Аватар')}
            value={data?.avatar}
            onChange={onChangeAvatar}
            readOnly={readOnly}
          />
          <Input
            className={styles.input}
            type="text"
            label={t('Город')}
            value={data?.city}
            onChange={onChangeCity}
            readOnly={readOnly}
          />
          <CountrySelect value={data?.country} onChange={onChangeCountry} readOnly={readOnly} />
          <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly} />
        </fieldset>
      </form>
    </div>
  );
};