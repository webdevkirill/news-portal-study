import { IStateSchema } from 'app/providers/StoreProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return username ', () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: { username: '123', password: '123', isLoading: false, error: 'error' },
    };

    expect(getLoginUsername(state as IStateSchema)).toEqual('123');
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getLoginUsername(state as IStateSchema)).toEqual('');
  });
});
