import { IStateSchema } from 'app/providers/StoreProvider';

import { Country, Currency } from 'shared/consts/common';

import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return profile is loading', () => {
    const state: DeepPartial<IStateSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
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

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(false);
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
  });
});
