import { FC, SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import IconHome from 'shared/assets/icons/icon-home.svg';
import IconAbout from 'shared/assets/icons/icon-about.svg';
import IconProfile from 'shared/assets/icons/icon-profile.svg';
import IconArticles from 'shared/assets/icons/icon-articles.svg';

export interface SidebarItemType {
  path: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
  authOnly?: boolean;
}

export const sidebarItemList: SidebarItemType[] = [
  {
    name: 'Главная',
    path: RoutePath.main,
    Icon: IconHome,
  },
  {
    name: 'О нас',
    path: RoutePath.about,
    Icon: IconAbout,
  },
  {
    name: 'Статьи',
    path: RoutePath.articles,
    Icon: IconArticles,
    authOnly: true,
  },
  {
    name: 'Страница профиля',
    path: RoutePath.profile,
    Icon: IconProfile,
    authOnly: true,
  },
];
