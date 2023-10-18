import { Suspense, useEffect } from 'react';
import cx from 'classix';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader/Loader';
import 'app/styles/index.scss';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
