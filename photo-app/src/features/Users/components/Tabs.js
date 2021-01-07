import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import React from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import EditForm from './EditForm';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 420,
    width: 800,
    border: '1px solid #bdbdbd',
    borderRadius: '12px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 220,
  },
  tabPanel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function VerticalTabs({ handleUpdateInfo, handleUpdatePassword, handleUpdateAvatar }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} className={classes.tabs}>
        <Tab label="Edit Profile" icon={<PersonIcon style={{ margin: '0 10px' }} />} {...a11yProps(0)} />
        <Tab label="Change Password" icon={<LockIcon style={{ margin: '0 10px' }} />} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <EditForm onUpdateInfo={handleUpdateInfo} onUpdateAvatar={handleUpdateAvatar} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <ChangePasswordForm onUpdatePassword={handleUpdatePassword} />
      </TabPanel>
    </div>
  );
}
