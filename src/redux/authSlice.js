import { logIn, logOut, register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
