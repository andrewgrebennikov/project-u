import { Suspense } from 'react';
import classNames from 'classnames';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={classNames('app', theme)}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
        </nav>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<MainPageLazy />} />
            <Route path="/about" element={<AboutPageLazy />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
