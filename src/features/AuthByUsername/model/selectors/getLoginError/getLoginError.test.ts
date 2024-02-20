import { DeepPartial } from '@reduxjs/toolkit';

import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: '123', password: 'pass', isLoading: false, error: 'error' },
    };

    expect(getLoginError(state as IStateSchema)).toEqual('error');
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginError(state as IStateSchema)).toEqual(undefined);
  });
});
