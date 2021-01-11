import { Container, makeStyles } from '@material-ui/core';
import MyPhotoCard from './MyPhotoCard';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '6rem',
    columnCount: 3,
    columnGap: '2rem',
  },
  item: {
    width: '100%',
    marginBottom: '2rem',
    borderRadius: '.5rem',
  },
}));

const Gallery = ({ photos, onUploadPhoto, onDeletePhoto }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        {photos.map((photo) => (
          <MyPhotoCard key={photo._id} photo={photo} onUploadPhoto={onUploadPhoto} onDeletePhoto={onDeletePhoto} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
