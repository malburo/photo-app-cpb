import { getMe } from 'app/userSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function PrivateRoute({ component: Component, ...rest }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
