import { IStateSchema } from 'app/providers/StoreProvider';

import { Country, Currency } from 'shared/consts/common';

import { getProfileState } from './getProfileState';

describe('getProfileState', () => {
  test('should return profile ', () => {
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

    expect(getProfileState(state as IStateSchema)).toEqual({
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
      isLoading: false,
      readonly: true,
    });
  });

  test('empty state ', () => {
    const state: DeepPartial<IStateSchema> = {};

    expect(getProfileState(state as IStateSchema)).toEqual(undefined);
  });
});
