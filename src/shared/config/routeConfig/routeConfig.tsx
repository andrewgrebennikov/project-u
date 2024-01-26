import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ValueOf } from 'shared/lib/types/valueOf';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  NOT_FOUND: 'not_found',
} as const;

export type AppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/article/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: AppRoutesProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
];
