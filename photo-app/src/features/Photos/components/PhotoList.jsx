import { Container, makeStyles } from '@material-ui/core';

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

const PhotoList = ({ photos }) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        {photos.map((photo) => (
          <div key={photo._id}>
            <img key={photo._id} alt={photo.photoLabel} className={classes.item} src={photo.photoUrl} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PhotoList;
