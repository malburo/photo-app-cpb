/* eslint-disable no-useless-escape */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import InputField from 'form-controls/InputField';
import PasswordField from 'form-controls/PasswordField';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email')
    .min(6, 'Email must be a string between 6-35 characters')
    .max(35, 'Email must be a string between 6-35 characters')
    .matches(/(\W|^)[\w.+\-]*@gmail\.com(\W|$)/, 'Please enter a valid email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Password must be a string between 6-35 characters')
    .max(35, 'Password must be a string between 6-35 characters'),
});

const LoginForm = ({ onSubmit }) => {
  const classes = useStyles();
  const history = useHistory();
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box border="1px solid #bdbdbd" borderRadius="24px" padding="32px 48px">
        <Typography variant="subtitle1" onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
          Photo app
        </Typography>
        <Typography variant="subtitle2">Join to discover thousands of photos from around the world</Typography>
        <Typography variant="subtitle1">
          Beautiful, free images and photos that you can download and use for any project.
        </Typography>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputField name="email" placeholder="Your Email*" icon={<MailIcon />} form={form} />
          <PasswordField name="password" placeholder="Your password*" icon={<LockIcon />} form={form} />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Login now
          </Button>
          <Typography variant="subtitle1" align="center">
            Not registered yet?
            <Link to="/auth/register">Register</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
