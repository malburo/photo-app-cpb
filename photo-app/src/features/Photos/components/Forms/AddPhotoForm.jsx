import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { unwrapResult } from '@reduxjs/toolkit';
import uploadApi from 'api/uploadApi';
import InputField from 'form-controls/InputField';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createPhoto } from '../../photoSlice';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  dialog: {
    width: 400,
  },
  image: {
    width: 200,
  },
  upload: {
    '& label': {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      border: '4px dashed #4894f9c4',
      cursor: 'pointer',
      fontSize: 20,
      padding: '20px 0px',
      color: '#b0b0b0',
      textAlign: 'center',
      borderRadius: 12,
    },
  },
}));

const schema = yup.object().shape({
  photoLabel: yup
    .string()
    .required('Please enter photo label.')
    .min(2, 'Please enter at least 2 characters.')
    .max(30, 'Please enter at most 30 characters'),
});
const AddPhotoForm = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUrl('');
  };

  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      photoLabel: '',
      image: null,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('image', values.image[0]);
      const photoUrl = await uploadApi.upload(formData);
      delete values.image;
      values.photoUrl = photoUrl.uploader.url;
      await dispatch(createPhoto(values)).then(unwrapResult);
      setOpen(false);
      enqueueSnackbar('Create photo successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setIsLoading(false);
  };
  const handleChangeImage = () => {
    const reader = new FileReader();
    const file = form.getValues('image')[0];
    reader.onloadend = () => {
      setUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Upload photo
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new photo</DialogTitle>

        <DialogContent className={classes.dialog}>
          <div className={classes.upload}>
            <label htmlFor="photoUpload">
              {url.length > 0 && <img src={url} alt="preview" className={classes.image} />}
              <p>Upload file here !!</p>
            </label>
          </div>
          <form id="hook-form" onSubmit={form.handleSubmit(onSubmit)}>
            <InputField name="photoLabel" label="Photo label" placeholder="A Sunny Day!!" form={form} />
            <input
              ref={form.register}
              name="image"
              id="photoUpload"
              type="file"
              onChange={handleChangeImage}
              style={{ display: 'none' }}
              accept="image/x-png,image/jpeg"
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button type="submit" form="hook-form" variant="contained" color="primary" disabled={isLoading}>
            {isLoading ? <CircularProgress size={20} /> : 'Upload'}
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPhotoForm;
