import { Link } from 'react-router-dom/cjs/react-router-dom.min';
NotFound.propTypes = {};

function NotFound() {
  return (
    <div>
      <p>Sorry, this page isn't available.</p>
      <p>
        The link you followed may be broken, or the page may have been removed. Go back to{' '}
        <Link to="/">
          <span>Photo app</span>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
