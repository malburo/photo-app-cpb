import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(2, 0),
  },
}));

const RegisterForm = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Box border="1px solid #bdbdbd" borderRadius="24px" padding="32px 48px">
        <Typography variant="subtitle1">Photo app</Typography>
        <Typography variant="subtitle2">Join thousands of learners from around the world</Typography>
        <Typography variant="subtitle1">
          Master web development by making real-life projects. There are multiple paths for you to choose
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullnane"
            name="fullnane"
            placeholder="Your Fullname*"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            placeholder="Your Email*"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            placeholder="Your Password*"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            error
            helperText="Incorrect entry."
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="retypePassword"
            type="password"
            id="retypePassword"
            placeholder="Retype Password*"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Login now
          </Button>
          <Typography variant="subtitle1" align="center">
            Already registered?
            <Link to="/auth/login">Login</Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterForm;
