import cx from 'classix';
import { AppLink, AppLinkUnderline } from 'shared/ui/AppLink/AppLink';
import styles from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from '../../model/types/sidebarItems';

interface ISidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: ISidebarItemProps) => {
  const { className, item, collapsed } = props;
  const { t } = useTranslation('translation');

  return (
    <AppLink
      to={item.path}
      underline={AppLinkUnderline.NONE}
      className={cx(styles.navLink, className)}
      startIcon={<item.Icon className="icon" width="30" height="30" />}
    >
      {!collapsed && <span className={cx(styles.label)}>{t(item.name)}</span>}
    </AppLink>
  );
};
