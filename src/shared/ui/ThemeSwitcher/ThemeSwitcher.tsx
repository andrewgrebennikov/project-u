import { FC } from 'react';
import cx from 'classix';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import IconDarkTheme from 'shared/assets/icons/icon-dark-theme.svg';
import IconLightTheme from 'shared/assets/icons/icon-light-theme.svg';
import styles from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  return (
    <Button className={cx(styles.themeSwitcher, className)} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <IconDarkTheme width="24" height="24" /> : <IconLightTheme width="24" height="24" />}
    </Button>
  );
};
