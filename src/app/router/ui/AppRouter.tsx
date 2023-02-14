import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

export const AppRouter = () => {
  return (
    <div className="app-page">
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {routeConfig.map((route) => {
            const { path, element } = route;

            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
