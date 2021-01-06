import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';

const rootReducer = {
  user,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
