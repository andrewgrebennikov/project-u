import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

interface IComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StoreSchema>;
}

export const renderComponent = (component: ReactNode, options: IComponentRenderOptions = {}) => {
  const { route = '/', initialState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StoreSchema}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
