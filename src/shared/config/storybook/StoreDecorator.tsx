import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (Story: Story) => {
  return (
    <StoreProvider initialState={state as StoreSchema}>
      <Story />
    </StoreProvider>
  );
};
