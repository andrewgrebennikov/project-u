import cx from 'classix';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { AppRouter } from 'app/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cx('app', theme)}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </nav>
      <AppRouter />
    </div>
  );
};

export default App;
