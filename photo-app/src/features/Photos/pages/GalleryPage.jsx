import { unwrapResult } from '@reduxjs/toolkit';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import EmptyData from '../../../components/EmptyData';
import GalleryPhotoList from '../components/GalleryPhotoList';
import PhotoDetailDialog from '../components/PhotoDetailDialog';
import { deletePhoto, getOwnerGallery, getPhotosOfUser, updatePhoto } from '../photoSlice';

const GalleryPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.photos.gallery);
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      dispatch(getOwnerGallery({ userId }));
      dispatch(getPhotosOfUser({ userId }));
    }
  }, [dispatch, userId]);

  const handleUpdatePhoto = async (values) => {
    try {
      await dispatch(updatePhoto(values)).then(unwrapResult);
      enqueueSnackbar('Update Photo successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  const handleDeletePhoto = async (values) => {
    try {
      await dispatch(deletePhoto(values)).then(unwrapResult);
      enqueueSnackbar('Delete Photo successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <Header />
      <GalleryPhotoList photos={gallery} onUploadPhoto={handleUpdatePhoto} onDeletePhoto={handleDeletePhoto} />
      {gallery.length === 0 && <EmptyData />}
      <Switch>
        <Route path={`/gallery/photos/:photoId`} component={PhotoDetailDialog} />
      </Switch>
    </div>
  );
};

export default GalleryPage;
