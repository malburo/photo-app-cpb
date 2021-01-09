import { Route } from 'react-router-dom';

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}

export default PublicRoute;
