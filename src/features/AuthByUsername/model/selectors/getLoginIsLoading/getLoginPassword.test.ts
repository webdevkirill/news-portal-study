import { DeepPartial } from '@reduxjs/toolkit';

import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return isLOading ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: '123', password: 'pass', isLoading: false, error: 'error' },
    };

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(false);
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
