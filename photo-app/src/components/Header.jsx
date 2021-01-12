import { Box, Button, Divider, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImageIcon from '@material-ui/icons/Image';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { logout } from 'app/userSlice';
import StorageKeys from 'constants/storage-key';
import AddPhotoForm from 'features/Photos/components/AddPhotoForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../images/Logo-small.svg';
import SearchForm from './SearchForm';
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.current);
  const [anchorEl, setAnchorEl] = useState(null);
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await dispatch(logout());
    history.push('/auth/login');
  };
  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar className={classes.root}>
          <Box display="flex" alignItems="center">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Box>
          <SearchForm />
          <Box display="flex" alignItems="center">
            {history.location.pathname === '/gallery' && <AddPhotoForm />}
            {auth ? (
              <Avatar
                variant="rounded"
                src={currentUser.profilePictureUrl}
                onClick={handleClick}
                style={{ marginLeft: 20, cursor: 'pointer' }}
              />
            ) : (
              <Button variant="contained" color="primary" onClick={() => history.push('/auth/login')}>
                Login now
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
      <Menu
        disableAutoFocusItem
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem onClick={() => history.push('/users/profile')}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={() => history.push('/gallery')}>
          <ListItemIcon>
            <ImageIcon fontSize="small" />
          </ListItemIcon>
          My gallery
        </MenuItem>
        <MenuItem onClick={() => history.push('/users/profile/edit')}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Setting
        </MenuItem>
        <Divider style={{ margin: '10px 0px' }} />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" style={{ fill: '#e35555fa' }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
