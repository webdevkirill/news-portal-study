import { render } from '@testing-library/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';

import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface IComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export const componentRender = (component: React.ReactNode, options: IComponentRenderOptions = {}) => {
  return render(
    <MemoryRouter initialEntries={[options.route ?? '/']}>
      <StoreProvider initialState={options.initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <Suspense fallback="">{component}</Suspense>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
