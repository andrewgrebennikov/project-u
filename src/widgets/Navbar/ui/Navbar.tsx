import { FC, memo, useCallback } from 'react';
import cx from 'classix';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useModal } from 'shared/hooks/useModal';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();
  const authData = useSelector(getAuthData);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <nav className={cx(styles.navbar, className)} data-testid="navbar">
        <Button variant="text" onClick={handleLogout}>
          {t('Выйти')}
        </Button>
      </nav>
    );
  }

  return (
    <>
      <nav className={cx(styles.navbar, className)} data-testid="navbar">
        <Button variant="text" onClick={handleModalOpen}>
          {t('Войти')}
        </Button>
      </nav>
      <LoginModal isOpen={isOpenModal} onClose={handleModalClose} />
    </>
  );
});
