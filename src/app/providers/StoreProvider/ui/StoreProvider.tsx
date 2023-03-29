import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../store/store';
import { StoreSchema } from '../types/storeSchema';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: StoreSchema;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
