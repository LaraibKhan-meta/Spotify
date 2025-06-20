
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authToken';
import trackReducer from './TrackSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    track:trackReducer
  },
});

export default store;