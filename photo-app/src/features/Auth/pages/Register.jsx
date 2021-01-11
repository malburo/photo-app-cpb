import { makeStyles } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../../../app/userSlice';
import RegisterForm from '../components/RegisterForm';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      await dispatch(register(values)).then(unwrapResult);
      history.push('/');
      enqueueSnackbar('Register successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div className={classes.wrapper}>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
