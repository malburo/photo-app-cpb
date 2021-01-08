import { InputAdornment } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DraftsIcon from '@material-ui/icons/Drafts';
import SearchIcon from '@material-ui/icons/Search';
import AddPhotoForm from 'features/Photos/components/AddPhotoForm';
import { useState } from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Photo App
          </Typography>
          <TextField
            variant="outlined"
            required
            name="search"
            id="search"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <AddPhotoForm />
          <Avatar variant="rounded" onClick={handleClick}>
            <AssignmentIcon />
          </Avatar>
        </Toolbar>
      </Container>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          My gallery
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
