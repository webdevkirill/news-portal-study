import { DeepPartial } from '@reduxjs/toolkit';

import { ILoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<ILoginSchema> = { username: '123', password: '123' };
    expect(loginReducer(state as ILoginSchema, loginActions.setUsername('1234'))).toEqual({
      username: '1234',
      password: '123',
    });
  });

  test('set password', () => {
    const state: DeepPartial<ILoginSchema> = { username: '123', password: '123' };
    expect(loginReducer(state as ILoginSchema, loginActions.setPassword('1234'))).toEqual({
      username: '123',
      password: '1234',
    });
  });
});
