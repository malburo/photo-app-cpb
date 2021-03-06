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
  const data = await authApi.getMe();
  return data;
});

export const updateUserInfo = createAsyncThunk('user/updateUserInfo', async (payload) => {
  const data = await userApi.updateUserInfo(payload);
  return data;
});

export const updatePassword = createAsyncThunk('user/updatePassword', async (payload) => {
  const data = await userApi.updatePassword(payload);
  return data;
});
export const updateAvatar = createAsyncThunk('user/updateAvatar', async (payload) => {
  const data = await userApi.updateAvatar(payload);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
  },
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
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

    [updateUserInfo.fulfilled]: (state, { payload }) => {
      state.current = payload.currentUser;
    },

    [updatePassword.fulfilled]: (state, { payload }) => {
      console.log(payload);
    },

    [updateAvatar.fulfilled]: (state, { payload }) => {
      state.current = payload.currentUser;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
