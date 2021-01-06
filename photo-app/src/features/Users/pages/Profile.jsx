import { Box, Button, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import Header from 'components/Header';
import React from 'react';
import InfoBox from '../components/InfoBox';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Header />
      <Typography variant="h4" color="initial">
        Personal Info
      </Typography>
      <Box marginBottom="30px">
        <Typography variant="h6" color="initial">
          Basic info, like your name and photo
        </Typography>
      </Box>
      <InfoBox />
    </div>
  );
}
