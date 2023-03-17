import { FC } from 'react';
import cx from 'classix';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkUnderline } from 'shared/ui/AppLink/AppLink';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('common');

  return (
    <nav className={cx(styles.navbar, className)}>
      <AppLink to="/" underline={AppLinkUnderline.NONE}>
        {t('Главная')}
      </AppLink>
    </nav>
  );
};
