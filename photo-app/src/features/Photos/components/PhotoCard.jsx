import { Avatar, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    '&:hover ': {
      '& $footer': {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        bottom: 60,
        left: 15,
        '& span': {
          marginLeft: 10,
          color: '#f4f1f1',
          fontSize: 20,
          fontWeight: 'bold',
          textShadow: '0 1px 8px rgba(0,0,0,.1)',
          fontFamily: 'Noto Sans,sans-serif',
        },
      },
      '& $image': {
        opacity: 1,
      },
    },
  },
  image: {
    width: '100%',
    marginBottom: '2rem',
    borderRadius: '.5rem',
    opacity: 0.8,
    transition: 'all 0.5s ease-out',
    cursor: 'pointer',
  },
  footer: {
    display: 'none',
  },
  avatar: {
    borderRadius: '50%',
  },
}));

const PhotoCard = ({ photo }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClickPhoto = () => {
    if (history.location.pathname.split('/')[1] === 'search') {
      history.push(`/search/photos/${photo._id}`);
    } else {
      history.push(`/photos/${photo._id}`);
    }
  };
  return (
    <div className={classes.root}>
      <img alt={photo.photoLabel} src={photo.photoUrl} className={classes.image} onClick={handleClickPhoto} />
      <div className={classes.footer}>
        <Avatar variant="rounded" src={photo.userId.profilePictureUrl} className={classes.avatar} />
        <span>{photo.userId.fullname}</span>
      </div>
    </div>
  );
};

export default PhotoCard;
