import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const ReduxDecorator = (Story: Story) => {
  return (
    <StoreProvider>
      <Story />
    </StoreProvider>
  );
};
