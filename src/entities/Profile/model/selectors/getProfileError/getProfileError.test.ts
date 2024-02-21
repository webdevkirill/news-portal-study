import { IStateSchema } from 'app/providers/StoreProvider';

import { Country, Currency } from 'shared/consts/common';

import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
        error: 'error',
        data: {
          first: '123',
          lastname: '123',
          age: 123,
          username: '123',
          city: '123',
          avatar: '123',
          currency: Currency.RUB,
          country: Country.Russia,
        },
      },
    };

    expect(getProfileError(state as IStateSchema)).toEqual('error');
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileError(state as IStateSchema)).toEqual(undefined);
  });
});
