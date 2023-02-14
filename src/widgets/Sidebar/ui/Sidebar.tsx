import { useState } from 'react';
import cx from 'classix';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleSidebarClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.sidebar, className, collapsed && styles.collapsed)}>
      <button onClick={handleSidebarClick}>Toggle Sidebar</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
