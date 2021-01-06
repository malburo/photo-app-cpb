import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    border: '1px solid #bdbdbd',
    borderRadius: 24,
  },
  firstText: {
    width: 200,
    flex: 'none',
    margin: '16px 20px',
    fontWeight: 500,
    fontSize: 13,
    color: '#BDBDBD',
  },
}));

const InfoBox = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem divider>
        <ListItemText
          primary="Profile"
          secondary="Some info maybe visible to other people"
          style={{ margin: '16px 20px' }}
        />
        <Button color="secondary">Edit</Button>
      </ListItem>
      <ListItem divider>
        <ListItemText primary="PHOTO" className={classes.firstText} />
        <ListItemAvatar>
          <Avatar variant="rounded">
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem divider>
        <ListItemText primary="NAME" className={classes.firstText} />
        <ListItemText primary="Tong Quoc Bao" />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="BIO" className={classes.firstText} />
        <ListItemText primary="I am a software developer and a big fan of devchallenges..." />
      </ListItem>
      <ListItem divider>
        <ListItemText primary="EMAIL" className={classes.firstText} />
        <ListItemText primary="tonqquocbao@gmail.com" />
      </ListItem>
      <ListItem>
        <ListItemText primary="PASSWORD" className={classes.firstText} />
        <ListItemText primary="***********" />
      </ListItem>
    </List>
  );
};
export default InfoBox;
