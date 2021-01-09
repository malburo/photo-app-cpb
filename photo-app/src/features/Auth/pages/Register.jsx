import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
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
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    await dispatch(register(values));
  };
  return (
    <div className={classes.wrapper}>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
