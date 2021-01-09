import StorageKeys from 'constants/storage-key';
import { useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Register from './pages/Register';

const AuthFeature = () => {
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem(StorageKeys.ACCESS_TOKEN)) {
      history.push('/');
    }
  }, [history]);
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={Login} />
      <Route exact path={`${match.url}/register`} component={Register} />
    </Switch>
  );
};

export default AuthFeature;
