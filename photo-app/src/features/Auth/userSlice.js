import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import StorageKeys from 'constants/storage-key';

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await authApi.register(payload);
  return data;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await authApi.login(payload);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, payload.access_token);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(payload.currentUser));
      state.current = payload.currentUser;
    },

    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, payload.access_token);
      localStorage.setItem(StorageKeys.USER, JSON.stringify(payload.currentUser));
      state.current = payload.currentUser;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
