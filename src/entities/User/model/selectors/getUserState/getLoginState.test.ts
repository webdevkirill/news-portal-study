import { DeepPartial } from '@reduxjs/toolkit';

import { IStateSchema } from 'app/providers/StoreProvider';

import { getUserState } from './getUserState';

describe('getUserState', () => {
  test('should return user state ', () => {
    const state: DeepPartial<IStateSchema> = {
      user: { authData: { id: '1', username: '123' } },
    };

    expect(getUserState(state as IStateSchema)).toEqual({
      authData: { id: '1', username: '123' },
    });
  });
});
