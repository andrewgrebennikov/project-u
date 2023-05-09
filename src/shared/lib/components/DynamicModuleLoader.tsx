import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { StoreSchemaKeys } from 'app/providers/StoreProvider/types/storeSchema';
import { Reducer } from '@reduxjs/toolkit';

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
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: [StoreSchemaKeys, Reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@init ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: [StoreSchemaKeys, Reducer]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};