import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [name, setName] = useState('');

  const handleNameChange = (value: string) => {
    setName(value);
  };

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Форма авторизации</legend>
        <Input
          className={styles.input}
          type="text"
          label="Введите имя"
          value={name}
          onChange={handleNameChange}
          autoFocus
        />
        <Input className={styles.input} type="text" label="Введите пароль" />
      </fieldset>
      <div className={styles.actions}>
        <Button variant="outlined">Отправить</Button>
      </div>
    </form>
  );
};
