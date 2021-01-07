import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-key';

export const register = createAsyncThunk('user/register', async (payload) => {
  const data = await authApi.register(payload);
  return data;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  const data = await authApi.login(payload);
  return data;
});

export const getMe = createAsyncThunk('user/getMe', async () => {
  const data = await userApi.getMe();
  return data;
});

export const updateMe = createAsyncThunk('user/updateMe', async (payload) => {
  const data = await userApi.updateMe(payload);
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
    },

    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, payload.access_token);
    },

    [getMe.fulfilled]: (state, { payload }) => {
      state.current = payload.currentUser;
    },

    [updateMe.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.current = payload.currentUser;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
