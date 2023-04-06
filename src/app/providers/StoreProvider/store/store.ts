import { configureStore } from '@reduxjs/toolkit';
import { StoreSchema } from '../types/storeSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
