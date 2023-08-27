import { createSlice } from '@reduxjs/toolkit';
import { getAllChannels, getChannelById, createChannel, deleteChannelById, updateChannel } from "./operations";

const initialState = {
  channels: [],
  currentChannel: null,
  isLoading: false,
  error: null,
};

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllChannels.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllChannels.fulfilled, (state, { payload }) => {
        state.channels = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllChannels.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload
      })
      .addCase(getChannelById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getChannelById.fulfilled, (state, { payload }) => {
        state.currentChannel = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getChannelById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload
      })
      .addCase(createChannel.pending, state => {
        state.isLoading = true;
      })
      .addCase(createChannel.fulfilled,
        (state, { payload }) => {
          state.currentChannel = payload;
          state.isLoading = false;
          state.error = null;
        })
      .addCase(createChannel.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload
      })
      .addCase(updateChannel.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        updateChannel.fulfilled,
        (state, { payload }) => {
          state.currentChannel = payload;
          state.isLoading = false;
          state.error = null;
        })
      .addCase(updateChannel.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(deleteChannelById.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        deleteChannelById.fulfilled,
        (state) => {
          state.currentChannel = null;
          state.isLoading = false;
          state.error = null;
        })
      .addCase(deleteChannelById.rejected, state => {
        state.isRefreshing = false;
      })
  },
});

export const channelsReducer = channelsSlice.reducer;