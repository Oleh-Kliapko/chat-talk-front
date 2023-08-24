import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  // deleteUser,
  updatehUser
} from './operations';

const initialState = {
  user: {
    userId:"",
    username: "",
    email: "",
    avatarURL: "",
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
        state.user.email = payload.email;
        state.user.avatarURL = payload.profile_photo;
        state.user.userId=payload.user_id
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
        state.user.username = "";
        state.user.username = "";
          state.user.email = "";
          state.user.avatarURL = "";
        state.user.userId = "";
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = true;
      })
         .addCase(updatehUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updatehUser.fulfilled,
        (state, { payload}) => {
          state.user.username = payload.username;
          state.user.avatarURL = payload.profile_photo;
          state.isLoggedIn = true;
          state.error = null;
          state.isRefreshing = false;
        })
       .addCase(updatehUser.rejected, state => {
        state.isRefreshing = false;
      })
      //  .addCase(deleteUser.pending, state => {
      //   state.isRefreshing = true;
      // })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload}) => {
          state.user.username = payload.username;
          state.user.email = payload.email;
          state.user.avatarURL = payload.profile_photo;
          state.user.userId=payload.user_id
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

