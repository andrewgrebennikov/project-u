import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  login: loginReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StoreSchema>, asyncReducer?: DeepPartial<ReducersMapObject<StoreSchema>>) => (Story: Story) => {
    return (
      <StoreProvider initialState={state as StoreSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}>
        <Story />
      </StoreProvider>
    );
  };
