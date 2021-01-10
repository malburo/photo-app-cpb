import { Container, makeStyles } from '@material-ui/core';
import MyPhotoCard from './MyPhotoCard';

const useStyles = makeStyles((theme) => ({
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

const Gallery = ({ photos }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        {photos.map((photo) => (
          <MyPhotoCard key={photo._id} photo={photo} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
