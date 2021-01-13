import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';

const useStyles = makeStyles(() => ({
  wrapper: {
    fontFamily: 'Noto Sans,sans-serif',
    marginTop: 140,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <p>Sorry, this page isn't available.</p>
        <p className={classes.title}>
          The link you followed may be broken, or the page may have been removed. Go back to{' '}
          <Link to="/">
            <span>Photo app</span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
