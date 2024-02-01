import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { StoreSchemaKeys } from 'app/providers/StoreProvider/types/storeSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
  [name in StoreSchemaKeys]?: Reducer;
};

interface IDynamicModuleLoader {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<PropsWithChildren<IDynamicModuleLoader>> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as StoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!allReducers[name as StoreSchemaKeys]) {
        store.reducerManager.add(name as StoreSchemaKeys, reducer);
        dispatch({ type: `@init ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StoreSchemaKeys);
          dispatch({ type: `@destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
