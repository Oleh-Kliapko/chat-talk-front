

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

// export const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };


const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
// -----------------------------------------------------------------------
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers = { Authorization: `Bearer ${accessToken}` };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response.status === 401) {
      const refresh = localStorage.getItem('refreshToken');
      try {
        const { data } = await axiosInstance.post('api/v1/token/refresh/', { refresh });
        console.log("data inter",data);
        axiosInstance.headers = { Authorization: `Bearer ${data.access}` };
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('accessToken', data.access);
        return axiosInstance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
// -----------------------------------------------------------------------
export const resetPassword = async (email) => {
  try {
    await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/password_reset/`,  email );
  } catch (error) {
    console.log(error);
  }
}
export const confirmPassword = async (credentials) => {
  try {
    await axiosInstance.post(`${import.meta.env.VITE_BASE_URL}/api/v1/password_reset_confirm/`, credentials);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/api/v1/register/', credentials);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/api/v1/login/', credentials);
      console.log("data login",data);
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/v1/logout/');
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
