import { memo, SyntheticEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cx from 'classix';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { loginActions, loginReducer } from '../../model/slices/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const initialReducers: ReducersList = { login: loginReducer };

interface ILoginFormProps {
  onClose: () => void;
  className?: string;
}

const LoginForm = memo((props: ILoginFormProps) => {
  const { className, onClose } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLoginFormSubmit = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      const result = await dispatch(loginByUsername({ username, password }));

      if (result.meta.requestStatus === 'fulfilled') {
        onClose();
      }
    },
    [dispatch, password, username, onClose],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <form className={cx(styles.form, className)} onSubmit={handleLoginFormSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>{t('Форма авторизации')}</legend>
          {error && <p className={styles.error}>{t('Вы ввели неверный логин или пароль')}</p>}
          <Input
            className={styles.input}
            type="text"
            label={t('Имя')}
            value={username}
            onChange={handleUsernameChange}
            autoFocus
          />
          <Input
            className={styles.input}
            type="text"
            label={t('Пароль')}
            value={password}
            onChange={handlePasswordChange}
          />
        </fieldset>
        <div className={styles.actions}>
          <Button variant="outlined" disabled={isLoading}>
            {t('Отправить')}
          </Button>
        </div>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
