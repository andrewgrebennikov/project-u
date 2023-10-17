import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from '../types/storeSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from '../../StoreProvider/config/reducerManager';

export const createReduxStore = (initialState?: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
