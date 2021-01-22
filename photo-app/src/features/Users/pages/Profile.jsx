import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
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
  title: {
    fontSize: '36px',
    lineHeight: '50px',
    margin: '15px 0px',
  },
  subTitle: {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 300,
  },
}));
const Profile = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.user.current);
  return (
    <div className={classes.wrapper}>
      <Header />
      <Typography className={classes.title}>Personal Info</Typography>
      <Box marginBottom="30px">
        <Typography className={classes.subTitle}>Basic info, like your name and photo</Typography>
      </Box>
      <InfoBox currentUser={currentUser} />
    </div>
  );
};
export default Profile;
