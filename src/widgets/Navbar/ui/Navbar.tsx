import { FC } from 'react';
import cx from 'classix';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useModal } from 'shared/hooks/useModal';
import { LoginModal } from 'features/AuthByUsername';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('translation');
  const { isOpenModal, handleModalClose, handleModalOpen } = useModal();

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
};
