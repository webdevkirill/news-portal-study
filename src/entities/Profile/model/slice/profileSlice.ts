import { createSlice } from '@reduxjs/toolkit';

import { IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
