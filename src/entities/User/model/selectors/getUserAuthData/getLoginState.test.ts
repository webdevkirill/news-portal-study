import { IStateSchema } from 'app/providers/StoreProvider';

import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('should return user state ', () => {
    const state: DeepPartial<IStateSchema> = {
      user: { authData: { id: '1', username: '123' } },
    };

    expect(getUserAuthData(state as IStateSchema)).toEqual({
      id: '1',
      username: '123',
    });
  });
});
