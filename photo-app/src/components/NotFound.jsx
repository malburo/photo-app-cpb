import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';
import Image from '../images/404.png';

const useStyles = makeStyles(() => ({
  wrapper: {
    fontFamily: 'Noto Sans,sans-serif',
    marginTop: 160,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <img src={Image} alt="404" className={classes.image} />
        <p>
          Sorry, this page isn't available. Go back to{' '}
          <Link to="/">
            <span>Photo app</span>
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
