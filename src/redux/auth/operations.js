import { toast } from 'react-toastify';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const axiosInstance = axios.create({
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
        if (!data) return alert('token is not valid');
        axiosInstance.headers = { Authorization: `Bearer ${data.access}` };
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('accessToken', data.access);
        return axiosInstance(error.config);
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }
    console.log("error", error);
    logOut()
    return Promise.reject(error);
  }
);


export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email, thunkAPI) => {
    try {
       const res = await axiosInstance.post("/api/v1/password_reset/", email);
       return res
    } catch (error) {
      toast.error(error.response.data.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const confirmPassword = createAsyncThunk(
  'auth/confirmPassword',
  async (credentials, thunkAPI) => {
    try {
       const res = await axiosInstance.post("/api/v1/password_reset_confirm/", credentials);
       return res
    } catch (error) {
      toast.error(error.response.data.message)
      // console.log("signup error", error.response.data.messge);
      // toast.error('something went wrong, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post('/api/v1/register/', credentials);
      return data
    } catch (error) {
      toast.error(error.response.data.message)
      // console.log("signup error", error.response.data.messge);
      // toast.error('something went wrong, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/login/`, credentials);
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
        const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/refresh_user/`, { refresh });
        return data;
      } else {
        throw new Error("not authorized")
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updatehUser = createAsyncThunk(
  'auth/update-profile',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put("/api/v1/profile_update/", formData);
      toast.success(data.message)
      return data;
    } catch (error) {
      // console.log("refresh error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  'auth/delete-user',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete("/api/v1/delete_account/");
      return data;
    } catch (error) {
      // console.log("refresh error", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/change-password',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put("/api/v1/change_password/", credentials);
      return data;
  
    } catch (error) {
      toast.error(error.response.data.message)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default axiosInstance