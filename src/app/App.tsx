import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classix';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader/Loader';
import { getAuthInited, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import 'app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isInited = useSelector(getAuthInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cx('app', theme)}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          {isInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
