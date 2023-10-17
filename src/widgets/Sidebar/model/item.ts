import { FC, SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import IconHome from 'shared/assets/icons/icon-home.svg';
import IconAbout from 'shared/assets/icons/icon-about.svg';
import IconProfile from 'shared/assets/icons/icon-profile.svg';

export interface SidebarItemType {
  path: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  name: string;
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
    name: 'Страница профиля',
    path: RoutePath.profile,
    Icon: IconProfile,
  },
];
