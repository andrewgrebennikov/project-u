import { FC, useState } from 'react';
import cx from 'classix';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import IconArrowRight from 'shared/assets/icons/icon-arrow-right.svg';
import IconArrowLeft from 'shared/assets/icons/icon-arrow-left.svg';
import styles from './Sidebar.module.scss';
import { IconButton } from 'shared/ui/IconBtn/IconButton';
import { sidebarItemList } from '../../model/item';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleSidebarClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.sidebar, className, collapsed && styles.collapsed)} data-testid="sidebar">
      <nav className={styles.nav}>
        {sidebarItemList.map((item) => {
          return <SidebarItem item={item} key={item.path} collapsed={collapsed} />;
        })}
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
