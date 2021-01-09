import { getMe } from 'app/userSlice';
import Header from 'components/Header';
import StorageKeys from 'constants/storage-key';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PhotoDetailDialog from '../components/PhotoDetailDialog';
import PhotoList from '../components/PhotoList';
import { getAllPhotos } from '../photoSlice';

const Main = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photoList);

  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      dispatch(getMe());
    }
    dispatch(getAllPhotos());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <PhotoList photos={photos} />
      <Switch>
        <Route path={`/photos/:photoId`} component={PhotoDetailDialog} />
      </Switch>
    </div>
  );
};

export default Main;
