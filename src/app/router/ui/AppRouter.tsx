import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

export const AppRouter = () => {
  const routes = Object.values(routeConfig);

  console.log(routeConfig);
  console.log(routes);

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {routes.map((route) => {
          const { path, element } = route;

          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};
