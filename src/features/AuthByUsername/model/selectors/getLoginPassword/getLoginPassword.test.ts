import { DeepPartial } from '@reduxjs/toolkit';

import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return pass ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: '123', password: 'pass', isLoading: false, error: 'error' },
    };

    expect(getLoginPassword(state as IStateSchema)).toEqual('pass');
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginPassword(state as IStateSchema)).toEqual(undefined);
  });
});
