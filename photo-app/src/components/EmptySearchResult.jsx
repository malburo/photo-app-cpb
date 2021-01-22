import { makeStyles } from '@material-ui/core';
import Empty from '../images/no-search-result.png';
const useStyles = makeStyles(() => ({
  wrapper: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 400,
  },
}));

function EmptySearchResult() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <img src={Empty} alt="empty" className={classes.image} />
    </div>
  );
}

export default EmptySearchResult;
