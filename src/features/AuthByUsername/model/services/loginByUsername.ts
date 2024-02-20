import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUser, userActions } from 'entities/User';

import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const resp = await axios.post<IUser>('http://localhost:8000/login', authData);

      if (!resp.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(resp.data));
      thunkAPI.dispatch(userActions.setAuthData(resp.data));

      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
