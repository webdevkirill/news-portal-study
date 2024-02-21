import { Story } from '@storybook/react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { profileReducer } from 'entities/Profile';

import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (initialState: DeepPartial<IStateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
