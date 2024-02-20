import axios from 'axios';

import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorizations: localStorage.getItem(LOCAL_STORAGE_USER_KEY),
  },
});
