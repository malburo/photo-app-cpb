import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { getMe, register } from '../../../app/userSlice';

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
    await dispatch(getMe());
  };
  return (
    <div className={classes.wrapper}>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
