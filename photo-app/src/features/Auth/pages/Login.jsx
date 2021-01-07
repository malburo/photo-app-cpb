import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { getMe, login } from '../../../app/userSlice';

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
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    await dispatch(login(values));
    await dispatch(getMe());
  };
  return (
    <div className={classes.wrapper}>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
