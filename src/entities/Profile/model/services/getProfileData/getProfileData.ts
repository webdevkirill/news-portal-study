import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';

import { IProfile } from '../../types/profile';

export const getProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/getProfileData',
  async (_, trunkAPI) => {
    const { extra, rejectWithValue } = trunkAPI;

    try {
      const resp = await extra.api.get<IProfile>('/profile');

      return resp.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
