import { configureStore } from '@reduxjs/toolkit';
import { StoreSchema } from '../types/storeSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export const createReduxStore = (initialState?: StoreSchema) => {
  return configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
      login: loginReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
