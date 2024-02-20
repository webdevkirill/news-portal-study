import { createSelector } from '@reduxjs/toolkit';

import { getUserState } from '../getUserState/getUserState';

export const getUserAuthData = createSelector(getUserState, state => state.authData);
