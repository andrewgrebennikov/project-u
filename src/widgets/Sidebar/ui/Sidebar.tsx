import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classix';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
  const { t } = useTranslation('common');
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const handleSidebarClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className={cx(styles.sidebar, className, collapsed && styles.collapsed)} data-testid="sidebar">
      <Button variant={ButtonVariant.OUTLINED} onClick={handleSidebarClick} data-testid="sidebar-toggle">
        {t('Переключатель')}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
