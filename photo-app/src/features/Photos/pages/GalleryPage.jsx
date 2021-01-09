import Header from 'components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PhotoDetailDialog from '../components/PhotoDetailDialog';
import Gallery from '../components/Gallery';
import { getAllPhotosOfMe } from '../photoSlice';

const GalleryPage = () => {
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.photos.gallery);

  useEffect(() => {
    dispatch(getAllPhotosOfMe());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Gallery photos={gallery} />
      <Switch>
        <Route path={`/gallery/photos/:photoId`} component={PhotoDetailDialog} />
      </Switch>
    </div>
  );
};

export default GalleryPage;
