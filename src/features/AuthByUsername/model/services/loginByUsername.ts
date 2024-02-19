import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUser } from 'entities/User';

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

      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
