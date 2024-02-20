import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: state => {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      state.authData = undefined;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
