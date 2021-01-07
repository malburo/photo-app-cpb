import { makeStyles } from '@material-ui/core/styles';
import { updateMe } from 'app/userSlice';
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
  return (
    <div className={classes.wrapper}>
      <Header />
      <VerticalTabs handleUpdateInfo={handleUpdateInfo} />
    </div>
  );
};

export default EditProfile;
