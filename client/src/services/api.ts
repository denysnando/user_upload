import axios from 'axios';

import { store } from '~/store';

export const baseURL = 'http://localhost:3000/';

const api = axios.create({
  baseURL,
});

// INTERCEPTOR FOR AUTH
api.interceptors.request.use(
  async (config) => {
    const { token } = store.getState().auth;

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default api;
