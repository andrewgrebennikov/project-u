import cx from 'classix';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkUnderline } from 'shared/ui/AppLink/AppLink';

interface INavbarProps {
  className?: string;
}

export const Navbar = (props: INavbarProps) => {
  const { className } = props;

  return (
    <nav className={cx(styles.navbar, className)}>
      <AppLink to="/" underline={AppLinkUnderline.NONE}>
        Главная
      </AppLink>
      <AppLink to="/about" underline={AppLinkUnderline.NONE}>
        О нас
      </AppLink>
    </nav>
  );
};
