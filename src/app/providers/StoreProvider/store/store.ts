import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StoreSchema } from '../types/storeSchema';

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
