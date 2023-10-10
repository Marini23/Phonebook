import { register } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    }),
});

export const authReducer = authSlice.reducer;
