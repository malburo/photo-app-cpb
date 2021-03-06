import { makeStyles } from '@material-ui/core';
import Empty from '../images/no-files.png';
const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 300,
  },
}));

function EmptyData() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={Empty} alt="empty" className={classes.image} />
    </div>
  );
}

export default EmptyData;
