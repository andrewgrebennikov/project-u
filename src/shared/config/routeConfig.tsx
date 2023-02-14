import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
} as const;

export type ValueOf<T> = T[keyof T];
export type AppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Array<RouteProps> = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
];
