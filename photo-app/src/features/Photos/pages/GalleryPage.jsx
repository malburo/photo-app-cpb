import Header from 'components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PhotoDetailDialog from '../components/PhotoDetailDialog';
import Gallery from '../components/Gallery';
import { deletePhoto, getAllPhotosOfMe, updatePhoto } from '../photoSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import EmptyData from '../../../components/EmptyData';
const GalleryPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.photos.gallery);

  useEffect(() => {
    dispatch(getAllPhotosOfMe());
  }, [dispatch]);

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
      {gallery.length === 0 && <EmptyData />}
      <Gallery photos={gallery} onUploadPhoto={handleUpdatePhoto} onDeletePhoto={handleDeletePhoto} />
      <Switch>
        <Route path={`/gallery/photos/:photoId`} component={PhotoDetailDialog} />
      </Switch>
    </div>
  );
};

export default GalleryPage;
