import cx from 'classix';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('app', theme)}>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
