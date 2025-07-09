import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null,
    expiresIn:null,
    timestamp:null
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.expiresIn = action.payload;
      state.timestamp = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
