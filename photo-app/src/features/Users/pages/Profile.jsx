import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
