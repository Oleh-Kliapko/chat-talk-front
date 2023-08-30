import axiosInstance from "../auth/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllChannels = createAsyncThunk(
  'channels/getAllChannels',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/api/v1/channels/`);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getChannelById = createAsyncThunk(
  'channels/getChannelById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(`/api/v1/channels/${id}`);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createChannel = createAsyncThunk(
  'channels/createChannel',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(`/api/v1/channels/`, credentials);
      return data
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteChannelById = createAsyncThunk(
  'channels/deleteChannelById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(`/api/v1/channels/${id}/`);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateChannel = createAsyncThunk(
  'channels/updateChannel',
  async ({id, formData}, thunkAPI) => {
    console.log('credentials', formData)
    try {
      const { data } = await axiosInstance.put(`/api/v1/channels/${id}/`, formData);
      console.log('data', data)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);















// -----------------------------------------------------------

// export const getAllChannels = async () => {
//     try {
//         const { data } = await axiosInstance.get("/api/v1/channels/");
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const getChannelById = async (id) => {
//     try {
//         const { data } = await axiosInstance.get(`/api/v1/channels/${id}`);
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const createChannel = async (credentials) => {
//     try {
//         const { data } = await axiosInstance.post(`/api/v1/channels/`, credentials);
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// };
// export const deleteChannelById = async (id) => {
//     try {
//         const { data } = await axiosInstance.delete(`/api/v1/channels/${id}`);
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// };
// export const updateChannel = async (id,credentials ) => {
//     try {
//         const { data } = await axiosInstance.put(`/api/v1/channels/${id}`,credentials);
//         console.log(data);
//         return data
//     } catch (error) {
//         console.log(error);
//     }
// };