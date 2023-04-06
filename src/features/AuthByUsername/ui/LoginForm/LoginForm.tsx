import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const { t } = useTranslation();

  const handleNameChange = (value: string) => {
    setName(value);
  };

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{t('Форма авторизации')}</legend>
        <Input
          className={styles.input}
          type="text"
          label={t('Имя')}
          value={name}
          onChange={handleNameChange}
          autoFocus
        />
        <Input className={styles.input} type="text" label={t('Пароль')} />
      </fieldset>
      <div className={styles.actions}>
        <Button variant="outlined">{t('Отправить')}</Button>
      </div>
    </form>
  );
};
