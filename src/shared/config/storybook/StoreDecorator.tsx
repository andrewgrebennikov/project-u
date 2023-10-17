import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';
import { loginReducer } from 'features/AuthByUsername/model/slices/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StoreSchema>, asyncReducer?: ReducersList) => (Story: StoryFn) => {
  return (
    <StoreProvider initialState={state as StoreSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}>
      <Story />
    </StoreProvider>
  );
};
