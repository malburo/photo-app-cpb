import { makeStyles } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../app/userSlice';
import LoginForm from '../components/LoginForm';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      await dispatch(login(values)).then(unwrapResult);
      history.push('/');
      enqueueSnackbar('Login successfully !!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div className={classes.wrapper}>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
