import { makeStyles } from '@material-ui/core';
import Empty from '../images/empty.svg';
const useStyles = makeStyles(() => ({
  wrapper: {
    fontFamily: 'Noto Sans,sans-serif',
    marginTop: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 200,
  },
}));

function EmptyData() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <img src={Empty} alt="empty" className={classes.image} />
      </div>
    </>
  );
}

export default EmptyData;
