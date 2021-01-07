import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import InputField from 'form-controls/InputField';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
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
    marginRight: 20,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avatarBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
}));

const schema = yup.object().shape({
  fullname: yup.string().required('Please enter your email.').min(6, 'Please enter a valid email address.'),
  email: yup.string().required('Please enter your password').email('Please enter at least 6 characters.'),
  bio: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters.'),
});

const EditForm = ({ onUpdateInfo, onUpdateAvatar }) => {
  const currentUser = useSelector((state) => state.user.current);
  const classes = useStyles();
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      fullname: '',
      email: '',
      bio: '',
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (currentUser) {
      form.setValue('fullname', currentUser.fullname || '');
      form.setValue('email', currentUser.email || '');
      form.setValue('bio', currentUser.bio || '');
    }
  }, [currentUser]);

  const handleUpdateAvatar = () => {};
  return (
    <Container component="main" maxWidth="md">
      <input type="file" name="file" onChange={onUpdateAvatar} />
      <Box maxWidth={400}>
        <div className={classes.avatarBox}>
          <Avatar variant="rounded" className={classes.large} src={currentUser.profilePictureUrl} />
          <Typography>Change Avatar</Typography>
        </div>

        <form onSubmit={form.handleSubmit(onUpdateInfo)}>
          <InputField name="fullname" icon={<PersonIcon />} placeholder="Enter your fullname..." form={form} />
          <InputField name="email" icon={<MailIcon />} placeholder="Enter your email..." form={form} />
          <InputField name="bio" icon={<SubtitlesIcon />} placeholder="Enter your bio..." form={form} />
          <Button type="submit" variant="contained" color="primary" className={classes.submit}>
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditForm;
