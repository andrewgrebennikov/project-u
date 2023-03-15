import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import IconDarkTheme from 'shared/assets/icons/icon-dark-theme.svg';
import IconLightTheme from 'shared/assets/icons/icon-light-theme.svg';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  return (
    <Button className={className} onClick={toggleTheme}>
      {theme === Theme.LIGHT && <IconDarkTheme width="24" height="24" />}
      {theme === Theme.DARK && <IconLightTheme width="24" height="24" />}
    </Button>
  );
};
