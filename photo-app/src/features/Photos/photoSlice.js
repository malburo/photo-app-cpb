import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import photoApi from 'api/photoApi';

export const getAllPhotos = createAsyncThunk('photos/getAll', async () => {
  const data = await photoApi.getAll();
  return data;
});
export const getAllPhotosOfMe = createAsyncThunk('photos/getAllOfMe', async () => {
  const data = await photoApi.getAllOfMe();
  return data;
});
export const createPhoto = createAsyncThunk('photos/create', async (payload) => {
  const data = await photoApi.create(payload);
  return data;
});
export const updatePhoto = createAsyncThunk('photos/update', async (payload) => {
  const data = await photoApi.update(payload);
  return data;
});
export const deletePhoto = createAsyncThunk('photos/delete', async (photoId) => {
  await photoApi.delete(photoId);
  return photoId;
});
const userSlice = createSlice({
  name: 'photos',
  initialState: {
    photoList: [],
    gallery: [],
    searchPhotoList: [],
  },
  reducers: {
    searchPhoto(state, action) {
      state.searchPhotoList = state.photoList.filter(
        (photo) => photo.userId.fullname.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
      );
    },
  },
  extraReducers: {
    [getAllPhotos.fulfilled]: (state, { payload }) => {
      state.photoList = payload.photos;
    },
    [getAllPhotosOfMe.fulfilled]: (state, { payload }) => {
      state.gallery = payload.photos;
    },
    [createPhoto.fulfilled]: (state, { payload }) => {
      state.photoList.unshift(payload.newPhoto);
      state.gallery.unshift(payload.newPhoto);
    },
    [updatePhoto.fulfilled]: (state, { payload }) => {
      const indexInPhotoList = state.photoList.findIndex((photo) => photo._id === payload.photoUpdated._id);
      const indexInGallery = state.gallery.findIndex((photo) => photo._id === payload.photoUpdated._id);
      state.photoList[indexInPhotoList] = payload.photoUpdated;
      state.gallery[indexInGallery] = payload.photoUpdated;
    },
    [deletePhoto.fulfilled]: (state, { payload }) => {
      state.photoList = state.photoList.filter((photo) => photo._id !== payload);
      state.gallery = state.gallery.filter((photo) => photo._id !== payload);
    },
  },
});

const { actions, reducer } = userSlice;
export const { searchPhoto } = actions;
export default reducer;
