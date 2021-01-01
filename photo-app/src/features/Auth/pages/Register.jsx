import { makeStyles } from '@material-ui/core';
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
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <RegisterForm />
    </div>
  );
};

export default Register;
