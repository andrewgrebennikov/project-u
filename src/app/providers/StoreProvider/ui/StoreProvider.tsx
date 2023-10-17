import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store';
import { StoreSchema } from '../types/storeSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;
  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StoreSchema,
    asyncReducers as ReducersMapObject<StoreSchema>,
    navigate,
  );

  return <Provider store={store}>{children}</Provider>;
};
