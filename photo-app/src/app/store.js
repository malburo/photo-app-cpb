import { configureStore } from '@reduxjs/toolkit';
import user from './userSlice';
import photos from '../features/Photos/photoSlice';
const rootReducer = {
  user,
  photos,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
