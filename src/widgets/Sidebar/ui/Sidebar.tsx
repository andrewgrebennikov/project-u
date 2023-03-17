import { FC, useState } from 'react';
import cx from 'classix';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';
import IconArrowLeft from 'shared/assets/icons/icon-arrow-left.svg';
import IconHome from 'shared/assets/icons/icon-home.svg';
import IconAbout from 'shared/assets/icons/icon-about.svg';
import styles from './Sidebar.module.scss';
import { AppLink, AppLinkUnderline } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'shared/ui/IconBtn/IconButton';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('common');

  const [collapsed, setCollapsed] = useState(false);

  const handleSidebarClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.sidebar, className, collapsed && styles.collapsed)} data-testid="sidebar">
      <nav className={styles.nav}>
        <AppLink
          to={RoutePath.main}
          underline={AppLinkUnderline.NONE}
          className={styles.navLink}
          startIcon={<IconHome className="icon" width="30" height="30" />}
        >
          <span className={styles.label}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          underline={AppLinkUnderline.NONE}
          className={styles.navLink}
          startIcon={<IconAbout className="icon" width="30" height="30" />}
        >
          <span className={styles.label}>{t('О нас')}</span>
        </AppLink>
      </nav>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <IconButton className={styles.toggle} onClick={handleSidebarClick} data-testid="sidebar-toggle">
        {collapsed ? (
          <IconArrowRight width="30" height="30" className="icon" />
        ) : (
          <IconArrowLeft width="30" height="30" className="icon" />
        )}
      </IconButton>
    </div>
  );
};
