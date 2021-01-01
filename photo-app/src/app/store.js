import { configureStore } from '@reduxjs/toolkit';
import user from '../screens/Auth/userSlice';

const rootReducer = {
  user,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
