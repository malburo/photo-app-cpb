import { makeStyles } from '@material-ui/core/styles';
import uploadApi from 'api/uploadApi';
import { updateAvatar, updateMe, updatePassword } from 'app/userSlice';
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
  const handleUpdateInfo = async (values) => {
    try {
      await dispatch(updateMe(values));
      enqueueSnackbar('Account information updated successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Account information updated error !!', { variant: 'error' });
    }
  };
  const handleUpdatePassword = async (values) => {
    try {
      await dispatch(updatePassword(values));
      enqueueSnackbar('Password updated successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Password updated error !!', { variant: 'error' });
    }
  };
  const handleUpdateAvatar = async (event) => {
    try {
      let formData = new FormData();
      formData.append('image', event.target.files[0]);
      const data = await uploadApi.upload(formData);
      await dispatch(updateAvatar({ profilePictureUrl: data.path }));
    } catch (e) {
      console.log(e);
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
