import { toast } from 'react-toastify';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const clearAuthHeader = () => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

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

export const resetPassword = async (email) => {
  try {
    await axiosInstance.post("/api/v1/password_reset/", email);
  } catch (error) {
    console.log(error);
  }
};

export const confirmPassword = async (credentials) => {
  try {
    await axiosInstance.post("/api/v1/password_reset_confirm/", credentials);
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
      toast.error('something went wrong, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/api/v1/login/', credentials);
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
      return data;
    } catch (error) {
      console.log(error);
      toast.error('wrong email or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosInstance.get('/api/v1/logout/');
    clearAuthHeader();
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const refresh = localStorage.getItem('refreshToken');
    try {
      if (refresh !== null) {
        console.log({ refresh });
        const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/refresh_user/`, { refresh });
        console.log("refresh data", data);
        return data;
      } else {
        throw new Error("not authorized")
      }
    } catch (error) {
      console.log("refresh error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

