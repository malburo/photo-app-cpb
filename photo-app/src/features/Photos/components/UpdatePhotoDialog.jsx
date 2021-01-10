/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputField from 'form-controls/InputField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePhoto } from '../photoSlice';

const UpdatePhotoDialog = ({ photoId }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      photoLabel: '',
    },
  });

  const onSubmit = async (values) => {
    values.photoId = photoId;
    dispatch(updatePhoto(values));
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Photo label</DialogTitle>
        <DialogContent style={{ width: 400 }}>
          <form id="update-form" onSubmit={form.handleSubmit(onSubmit)}>
            <InputField name="photoLabel" placeholder="Enter new photo label!!" form={form} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button type="submit" form="update-form" variant="contained" color="primary" style={{ margin: 10 }}>
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
export default UpdatePhotoDialog;
