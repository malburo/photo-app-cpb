import { Avatar, makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import photoApi from 'api/photoApi';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
  content: {
    minWidth: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 500,
  },
  photoLabel: {
    textAlign: 'center',
    margin: '5px 0px 20px 0px',
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: 'flex',
  },
  avatar: {
    borderRadius: '50%',
    margin: '0px 20px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, avatar, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Avatar variant="rounded" src={avatar} className={classes.avatar} />
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const PhotoDetailDialog = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [photo, setPhoto] = useState({});
  const history = useHistory();
  const { photoId } = useParams();

  const handleClose = () => {
    setOpen(false);
    if (history.location.pathname.split('/')[1] === 'gallery') {
      history.push('/gallery');
    } else {
      history.push('/');
    }
  };
  useEffect(() => {
    const featchPhoto = async () => {
      const data = await photoApi.getById(photoId);
      setPhoto(data.photo);
    };
    featchPhoto();
  }, [history, photoId]);
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} avatar={photo.userId?.profilePictureUrl}>
          {photo.userId?.fullname}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <img src={photo.photoUrl} alt={photo.photoLabel} className={classes.image} />
        </DialogContent>
        <Typography variant="h6" color="initial" className={classes.photoLabel}>
          {photo.photoLabel}
        </Typography>
      </Dialog>
    </div>
  );
};

export default PhotoDetailDialog;
