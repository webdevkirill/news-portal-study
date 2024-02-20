import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const StoreDecorator = (initialState: DeepPartial<IStateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState}>
    <StoryComponent />
  </StoreProvider>
);
