// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = import.meta.env.VITE_BASE_URL;

// export const authApi = createApi({
//   reducerPath: 'auth',
//   baseQuery: fetchBaseQuery({
//     baseUrl,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ['Auth'],
//   endpoints: builder => ({
//     login: builder.mutation({
//       query: credentials => ({
//         url: '/login',
//         method: 'POST',
//         body: credentials,
//       }),
//       invalidatesTags: ['Auth'],
//     }),
//   }),
// });

// export const { useLoginMutation } = authApi;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/v1/register/', credentials);
      console.log(data);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/v1/login/', credentials);
      console.log(data);
      // setAuthHeader(data.data.token);
      // return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Token is invalid');
    }
    setAuthHeader(persistedToken);

    try {
      const { data } = await axios.get('users/current');
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/update', userData);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authGoogle = createAsyncThunk(
  'users/authGoogle',
  async (token, thunkAPI) => {
    try {
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNewPassword = createAsyncThunk(
  'auth/getNewPassword',
  async (email, thunkAPI) => {
    try {
      const response = await axios.patch('/users/getNewPassword', { email });

      const serializedHeaders = {
        'content-type': response.headers['content-type'],
      };

      return {
        data: response.data,
        status: response.status,
        headers: serializedHeaders,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewPassword = createAsyncThunk(
  'auth/createNewPassword',
  async (passwords, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Token is invalid');
    }

    try {
      const response = await axios.patch('/users/createNewPassword', passwords);

      const serializedHeaders = {
        'content-type': response.headers['content-type'],
      };

      return {
        data: response.data,
        status: response.status,
        headers: serializedHeaders,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
