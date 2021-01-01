import { makeStyles } from '@material-ui/core';
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
  return (
    <div className={classes.wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
