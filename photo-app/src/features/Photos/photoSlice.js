import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import photoApi from 'api/photoApi';

export const getAllPhotos = createAsyncThunk('photos/getAll', async () => {
  const data = await photoApi.getAll();
  console.log(data);
  return data;
});

export const createPhoto = createAsyncThunk('photos/create', async (payload) => {
  const data = await photoApi.create(payload);
  return data;
});

const userSlice = createSlice({
  name: 'photos',
  initialState: {
    photoList: [],
  },
  reducers: {},
  extraReducers: {
    [getAllPhotos.fulfilled]: (state, { payload }) => {
      state.photoList = payload.photos;
    },
    [createPhoto.fulfilled]: (state, { payload }) => {
      state.photoList.unshift(payload.newPhoto);
    },
  },
});

const { reducer } = userSlice;
export default reducer;
