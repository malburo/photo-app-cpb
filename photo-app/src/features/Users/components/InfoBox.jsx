import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    border: '1px solid #bdbdbd',
    borderRadius: 12,
  },
  firstText: {
    width: 200,
    flex: 'none',
    margin: '16px 20px',
    fontWeight: 500,
    fontSize: 13,
    color: '#BDBDBD',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const InfoBox = ({ currentUser }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem divider>
        <ListItemText
          primary="Profile"
          secondary="Some info maybe visible to other people"
          style={{ margin: '16px 20px' }}
        />
        <Button
          variant="outline"
          color="default"
          style={{
            border: '1px solid #828282',
            borderRadius: '12px',
          }}
          onClick={() => history.push('/users/profile/edit')}
        >
          Edit
        </Button>
      </ListItem>
      <ListItem divider>
        <ListItemText primary="PHOTO" className={classes.firstText} />
        <ListItemAvatar>
          <Avatar variant="rounded" className={classes.large} src={currentUser.profilePictureUrl} />
        </ListItemAvatar>
      </ListItem>
      <ListItem divider>
        <ListItemText primary="NAME" className={classes.firstText} />
        <ListItemText primary={currentUser.fullname} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="BIO" className={classes.firstText} />
        <ListItemText primary={currentUser.bio || 'Nothing'} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="EMAIL" className={classes.firstText} />
        <ListItemText primary={currentUser.email} />
      </ListItem>
      <ListItem>
        <ListItemText primary="PASSWORD" className={classes.firstText} />
        <ListItemText primary="***********" />
      </ListItem>
    </List>
  );
};
export default InfoBox;
