import { getMe } from 'app/userSlice';
import EmptySearchResult from 'components/EmptySearchResult';
import Header from 'components/Header';
import StorageKeys from 'constants/storage-key';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PhotoDetailDialog from '../components/PhotoDetailDialog';
import PhotoList from '../components/PhotoList';
import { searchPhoto } from '../photoSlice';
import { getAllPhotos } from '../photoSlice';
const SearchPhotoPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchPhotoList = useSelector((state) => state.photos.searchPhotoList);
  const { fullname } = queryString.parse(history.location.search);
  useEffect(() => {
    const featchData = async () => {
      if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
        await dispatch(getMe());
      }
      await dispatch(getAllPhotos());
      await dispatch(searchPhoto(fullname));
    };
    featchData();
  }, [dispatch, history, fullname]);
  return (
    <div>
      <Header />
      <PhotoList photos={searchPhotoList} />
      {searchPhotoList.length === 0 && <EmptySearchResult />}
      <Switch>
        <Route path={`/search/photos/:photoId`} component={PhotoDetailDialog} />
      </Switch>
    </div>
  );
};

export default SearchPhotoPage;
