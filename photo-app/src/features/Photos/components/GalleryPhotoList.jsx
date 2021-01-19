import { Avatar, Box, Container, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MyPhotoCard from './MyPhotoCard';
import PhotoCard from './PhotoCard';

const useStyles = makeStyles(() => ({
  photoList: {
    columnCount: 3,
    columnGap: '2rem',
  },
  owner: {
    width: 150,
    height: 150,
    margin: '0 auto',
    marginBottom: 16,
  },
  fullname: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '30px',
  },
  infomation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0px 60px 0px',
  },
  wrapper: {
    width: 100,
    margin: '0px 12px',
    padding: '10px 5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
  },
  head: {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '22px',
    color: '#4E5150',
  },
  foot: {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '17px',
    color: '#BDBDBD',
  },
}));

const GalleryPhotoList = ({ photos, onUploadPhoto, onDeletePhoto }) => {
  const { userId } = useParams();
  const currentUser = useSelector((state) => state.user.current);
  const ownerGallery = useSelector((state) => state.photos.ownerGallery);
  const classes = useStyles();
  return (
    <Container>
      <Box marginTop="120px">
        <Avatar variant="rounded" src={ownerGallery.profilePictureUrl} className={classes.owner} />
        <Typography variant="h4" color="initial" className={classes.fullname}>
          {ownerGallery.fullname}
        </Typography>
        <div className={classes.infomation}>
          <div className={classes.wrapper}>
            <Typography className={classes.head}>{photos.length || 0}</Typography>
            <Typography className={classes.foot}>Photos</Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography className={classes.head}>0</Typography>
            <Typography className={classes.foot}>Follower</Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography className={classes.head}>0</Typography>
            <Typography className={classes.foot}>Following</Typography>
          </div>
        </div>
        <div className={classes.photoList}>
          {userId === currentUser._id &&
            photos.map((photo) => (
              <MyPhotoCard key={photo._id} photo={photo} onUploadPhoto={onUploadPhoto} onDeletePhoto={onDeletePhoto} />
            ))}
          {userId === currentUser._id || photos.map((photo) => <PhotoCard key={photo._id} photo={photo} />)}
        </div>
      </Box>
    </Container>
  );
};

export default GalleryPhotoList;
