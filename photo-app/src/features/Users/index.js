import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from './pages/Profile';

const UserFeature = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/profile`} component={Profile} />
    </Switch>
  );
};

export default UserFeature;
