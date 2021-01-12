import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import PasswordField from 'form-controls/PasswordField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '1px solid #bdbdbd',
    borderRadius: '12px',
    padding: '32px 48px',
  },
  submit: {
    margin: theme.spacing(2, 0),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const schema = yup.object().shape({
  currentPassword: yup
    .string()
    .required('Please enter current password.')
    .min(6, 'Please enter at least 6 characters.')
    .max(30, 'Please enter at most 30 characters'),
  newPassword: yup
    .string()
    .required('Please enter new password')
    .min(6, 'Please enter at least 6 characters.')
    .max(30, 'Please enter at most 30 characters'),
  retypePassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('newPassword')], 'Password does not match'),
});

const ChangePasswordForm = ({ onUpdatePassword }) => {
  const classes = useStyles();
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <Container component="main" maxWidth="md">
      <Box maxWidth={400}>
        <form onSubmit={form.handleSubmit(onUpdatePassword)}>
          <PasswordField
            name="currentPassword"
            label="Name"
            icon={<LockIcon />}
            placeholder="Enter current password..."
            form={form}
          />
          <PasswordField
            name="newPassword"
            label="Email"
            icon={<LockIcon />}
            placeholder="Enter new password..."
            form={form}
          />
          <PasswordField
            name="retypePassword"
            label="Bio"
            icon={<LockIcon />}
            placeholder="Enter retype password..."
            form={form}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.submit}>
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePasswordForm;
