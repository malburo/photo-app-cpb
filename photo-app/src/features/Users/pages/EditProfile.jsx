import { makeStyles } from '@material-ui/core/styles';
import { unwrapResult } from '@reduxjs/toolkit';
import uploadApi from 'api/uploadApi';
import { updateAvatar, updatePassword, updateUserInfo } from 'app/userSlice';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import VerticalTabs from '../components/Tabs';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const EditProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateInfo = async (payload) => {
    try {
      await dispatch(updateUserInfo(payload)).then(unwrapResult);
      enqueueSnackbar('Account information updated successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  const handleUpdatePassword = async (payload) => {
    try {
      await dispatch(updatePassword(payload)).then(unwrapResult);
      enqueueSnackbar('Password updated successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  const handleUpdateAvatar = async (event) => {
    try {
      let formData = new FormData();
      formData.append('image', event.target.files[0]);
      const data = await uploadApi.upload(formData);
      await dispatch(updateAvatar({ profilePictureUrl: data.uploader.url, userId: event.userId })).then(unwrapResult);
      enqueueSnackbar('Avatar updated successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div className={classes.wrapper}>
      <Header />
      <VerticalTabs
        handleUpdateInfo={handleUpdateInfo}
        handleUpdatePassword={handleUpdatePassword}
        handleUpdateAvatar={handleUpdateAvatar}
      />
    </div>
  );
};

export default EditProfile;
