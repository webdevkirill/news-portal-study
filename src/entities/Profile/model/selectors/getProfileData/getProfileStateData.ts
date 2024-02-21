import { createSelector } from '@reduxjs/toolkit';

import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileStateData = createSelector(getProfileState, state => state?.data);
