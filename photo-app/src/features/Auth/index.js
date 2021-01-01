import { Switch, useRouteMatch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Register from './pages/Register';

const AuthFeature = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/register`} component={Register} />
    </Switch>
  );
};

export default AuthFeature;
