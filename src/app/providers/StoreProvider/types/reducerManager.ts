import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema, StoreSchemaKeys } from 'app/providers/StoreProvider/types/storeSchema';

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: StoreSchemaKeys, reducer: Reducer) => void;
  remove: (key: StoreSchemaKeys) => void;
}
