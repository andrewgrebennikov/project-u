import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/Loader/Loader';

export const AppRouter = () => {
  return (
    <div className="app-page">
      <Suspense fallback={<Loader />}>
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
