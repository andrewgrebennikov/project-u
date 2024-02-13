import { cx } from 'classix';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';

import { useModal } from 'shared/hooks/useModal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = memo((props) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();

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
