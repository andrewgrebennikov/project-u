import { cx } from 'classix';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';

import { getAuthData, userActions } from 'entities/User';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useModal } from 'shared/hooks/useModal';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

import styles from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo((props: INavbarProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const items = useMemo(
    () => [
      {
        id: '1',
        label: t('Выйти'),
        action: handleLogout,
      },
      {
        id: '2',
        label: t('Профиль'),
        href: RoutePath.profile(authData?.id),
      },
    ],
    [authData?.id, handleLogout, t],
  );

  if (authData) {
    return (
      <nav className={cx(styles.navbar, className)} data-testid="navbar">
        <AppLink variant={AppLinkVariant.TEXT} to={RoutePath.create_article()}>
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          button={<Avatar src={authData.avatar} alt={authData.username} width="40" height="40" />}
          items={items}
        />
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
