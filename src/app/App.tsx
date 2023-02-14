import cx from 'classix';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import 'app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('app', theme)}>
      <Navbar />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
