import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import IconDarkTheme from 'shared/assets/icons/icon-dark-theme.svg';
import IconLightTheme from 'shared/assets/icons/icon-light-theme.svg';
import { IconButton } from 'shared/ui/IconBtn/IconButton';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  return (
    <IconButton className={className} onClick={toggleTheme}>
      {theme === Theme.LIGHT && <IconDarkTheme className="icon" width="30" height="30" />}
      {theme === Theme.DARK && <IconLightTheme className="icon" width="30" height="30" />}
    </IconButton>
  );
};
