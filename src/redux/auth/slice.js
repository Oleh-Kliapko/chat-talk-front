import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
} from './operations';

const initialState = {
  user: {
    username: "",
    email: "examlpe@Gmail.com",
    avatarURL: "https://klike.net/uploads/posts/2019-05/medium/1556708030_2.jpg",
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
          .addCase(logIn.pending, state => {
            state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.username = payload.username;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
  .addCase(logIn.rejected, state => {
    state.isRefreshing = false;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user.username = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload}) => {
          state.user.username = payload.username;
          state.isLoggedIn = true;
          state.error = null;
          state.isRefreshing = false;
        })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
  },
});

export const authReducer = authSlice.reducer;
