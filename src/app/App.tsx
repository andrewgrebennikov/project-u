import { Suspense } from 'react';
import cx from 'classix';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader/Loader';
import 'app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cx('app', theme)}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
