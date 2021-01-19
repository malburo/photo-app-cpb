/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputField from 'form-controls/InputField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  photoLabel: yup
    .string()
    .required('Please enter photo label.')
    .min(2, 'Please enter at least 2 characters.')
    .max(30, 'Please enter at most 30 characters'),
});

const UpdatePhotoDialog = ({ photoId, onUploadPhoto }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      photoLabel: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    values.photoId = photoId;
    onUploadPhoto(values);
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginRight: 10 }}>
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
