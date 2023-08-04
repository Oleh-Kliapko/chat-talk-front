import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  updateUser,
  fetchUserById,
  authGoogle,
  getNewPassword,
} from './operations';

const initialState = {
  user: {
    username: null,
    email: null,
    avatarURL: null,
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
        state.isRefreshing = true;
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
       state.user.username = payload.email;
        state.isLoggedIn = true;
        state.error = null;
        }
      )
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })

      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, { payload }) => {
        state.error = payload;
      })

      .addCase(authGoogle.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.error = null;
      })

      .addCase(getNewPassword.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getNewPassword.fulfilled, state => {
        state.isRefreshing = false;
      })
      .addCase(getNewPassword.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;