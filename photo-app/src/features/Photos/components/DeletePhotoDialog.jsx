import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { deletePhoto } from '../photoSlice';

const DeletePhotoDialog = ({ photoId }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    dispatch(deletePhoto(photoId));
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete this photo</DialogTitle>
        <DialogContent style={{ width: 400 }}>
          <DialogContentText id="alert-dialog-description">Are you sure ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleOk} color="primary" style={{ margin: 10 }}>
            Yes
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus style={{ margin: 10 }}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DeletePhotoDialog;
