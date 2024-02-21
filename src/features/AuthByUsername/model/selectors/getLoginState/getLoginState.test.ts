import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: '123', password: '123', isLoading: false, error: 'error' },
    };

    expect(getLoginState(state as IStateSchema)).toEqual({
      username: '123',
      password: '123',
      isLoading: false,
      error: 'error',
    });
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginState(state as IStateSchema)).toEqual(undefined);
  });
});
