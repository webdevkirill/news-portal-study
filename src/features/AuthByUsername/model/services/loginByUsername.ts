import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';

import { IUser, userActions } from 'entities/User';

import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, trunkAPI) => {
    const { dispatch, extra, rejectWithValue } = trunkAPI;

    try {
      const resp = await extra.api.post<IUser>('/login', authData);

      if (!resp.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(resp.data));
      dispatch(userActions.setAuthData(resp.data));
      extra.navigate('/profile');

      return resp.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
