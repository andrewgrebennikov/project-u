import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebarItems';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import IconHome from 'shared/assets/icons/icon-home.svg';
import IconAbout from 'shared/assets/icons/icon-about.svg';
import IconArticles from 'shared/assets/icons/icon-articles.svg';
import IconProfile from 'shared/assets/icons/icon-profile.svg';

export const getSidebarItems = createSelector(getAuthData, (authData) => {
  const sidebarItemList: SidebarItemType[] = [
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
  ];

  if (authData) {
    sidebarItemList.push(
      {
        name: 'Статьи',
        path: RoutePath.articles,
        Icon: IconArticles,
        authOnly: true,
      },
      {
        name: 'Страница профиля',
        path: RoutePath.profile + authData.id,
        Icon: IconProfile,
        authOnly: true,
      },
    );
  }

  return sidebarItemList;
});
