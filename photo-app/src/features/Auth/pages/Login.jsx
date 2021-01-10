import { makeStyles } from '@material-ui/core';
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values) => {
    await dispatch(login(values));
    history.push('/');
  };
  return (
    <div className={classes.wrapper}>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
