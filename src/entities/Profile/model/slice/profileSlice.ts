import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProfileSchema, getProfileData } from 'entities/Profile';

import { IProfile } from '../types/profile';

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfileData.pending, state => {
        state.isLoading = true;
        state.error = undefined;
        state.data = undefined;
        state.readonly = true;
      })
      .addCase(getProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
