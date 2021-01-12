import NotFound from 'components/NotFound';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile';

const UserFeature = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/profile`} component={Profile} />
      <Route exact path={`${match.url}/profile/edit`} component={EditProfile} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default UserFeature;
