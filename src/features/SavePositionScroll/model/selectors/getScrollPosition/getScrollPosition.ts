import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getScrollPositionByPathname = createSelector(
  (state: StoreSchema) => state.scroll.scrollPosition,
  (_, pathname: string) => pathname,
  // @ts-ignore
  (scroll, pathname) => scroll[pathname] || 0,
);
