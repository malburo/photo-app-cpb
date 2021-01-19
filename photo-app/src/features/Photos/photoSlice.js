import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import photoApi from 'api/photoApi';
import userApi from 'api/userApi';

export const getAllPhotos = createAsyncThunk('photos/getAll', async () => {
  const data = await photoApi.getAll();
  return data;
});
export const getPhotosOfUser = createAsyncThunk('photos/getPhotosOfUser', async (payload) => {
  const data = await userApi.getPhotosOfUser(payload);
  return data;
});
export const getOwnerGallery = createAsyncThunk('photos/getOwnerGallery', async (payload) => {
  const data = await userApi.getUser(payload);
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
    searchPhotoList: [],
    gallery: [],
    ownerGallery: {},
  },
  reducers: {
    searchPhoto(state, action) {
      state.searchPhotoList = state.photoList.filter((photo) => photo.userId.fullname.indexOf(action.payload) > -1);
    },
  },
  extraReducers: {
    [getAllPhotos.fulfilled]: (state, { payload }) => {
      state.photoList = payload.photos;
    },
    [getPhotosOfUser.fulfilled]: (state, { payload }) => {
      state.gallery = payload.photos;
    },
    [getOwnerGallery.fulfilled]: (state, { payload }) => {
      state.ownerGallery = payload.user;
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
