import { memo, SyntheticEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
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

const initialReducers: ReducersList = { login: loginReducer };

const LoginForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
    (event: SyntheticEvent) => {
      event.preventDefault();
      // @ts-ignore
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, password, username],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
      <form className={styles.form} onSubmit={handleLoginFormSubmit}>
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
