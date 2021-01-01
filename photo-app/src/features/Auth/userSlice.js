import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import StorageKeys from 'constants/storage-key';

export const getMe = createAsyncThunk('user/getMe', async () => {
  const currentUser = await authApi.getMe();
  return currentUser;
});

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await authApi.register(payload);
  return data.jwt;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await authApi.login(payload);
  return data.jwt;
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
    [getMe.fulfilled]: (state, { payload }) => {
      state.current = payload;
    },

    [register.fulfilled]: (state, { payload }) => {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, payload);
    },

    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, payload);
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;