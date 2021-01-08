import Header from 'components/Header';
import { useSelector } from 'react-redux';
import PhotoList from '../components/PhotoList';

const Main = () => {
  const photos = useSelector((state) => state.photos.photoList);
  return (
    <div>
      <Header />
      <PhotoList photos={photos}/>
    </div>
  );
};

export default Main;
