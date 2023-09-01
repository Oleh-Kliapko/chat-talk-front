import { createSlice } from '@reduxjs/toolkit';
import { getAllChannels, getChannelById,getAllChannelsByUser,getAllChannelsBySearch, createChannel, deleteChannelById, updateChannel } from "./operations";

const initialState = {
  channels: [],
  count:null,
  currentChannel: null,
  isLoading: false,
  error: null,
};

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    clearChannels(state) {
      state.channels = initialState.channels;
      state.count = initialState.count;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getAllChannelsBySearch.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllChannelsBySearch.fulfilled, (state, { payload }) => {
        if (state.channels.length > 0) {
          state.channels = [...state.channels, ...payload.results]
        } else {
          state.channels = payload.results
        }
        state.count = payload.count;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllChannelsBySearch.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload
      })
       .addCase(getAllChannelsByUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllChannelsByUser.fulfilled, (state, { payload }) => {
        if (state.channels.length > 0) {
          state.channels = [...state.channels, ...payload.results]
        } else {
          state.channels = payload.results
        }
        state.count = payload.count;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllChannelsByUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload
      })
      .addCase(getAllChannels.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllChannels.fulfilled, (state, { payload }) => {
        if (state.channels.length > 0) {
          state.channels = [...state.channels, ...payload.results]
        } else {
          state.channels = payload.results
        }
        state.count = payload.count;
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
      .addCase(updateChannel.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload
      })
      .addCase(deleteChannelById.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        deleteChannelById.fulfilled,
        (state) => {
          // state.currentChannel = null;
          state.isLoading = false;
          state.error = null;
        })
      .addCase(deleteChannelById.rejected, state => {
        state.isRefreshing = false;
      })
  },
});
export const { clearChannels } = channelsSlice.actions;
export const channelsReducer = channelsSlice.reducer;