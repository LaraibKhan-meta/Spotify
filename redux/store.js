
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authToken';
import trackReducer from './TrackSlice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appReducer = combineReducers({
  auth: authReducer,
  track:trackReducer
});

const rootReducer = (state,action) => {
  if(action.type === "Logout")
  {
    AsyncStorage.removeItem('persist:root');
    // state ={
    //   auth:undefined,
    //   track:undefined
    // }
    state = {
      auth : undefined
    };
  }

  return appReducer(state,action);
};
const rootPersistConfig = {
  key: 'root',
  storage:AsyncStorage,
}

const persistedReducer = persistReducer(rootPersistConfig,rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE","persist/PURGE"],
      },
    }),
});
export default store;

export const persistor = persistStore(store);