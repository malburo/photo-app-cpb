import AuthFeature from 'features/Auth';
import PhotoFeature from 'features/Photos';
import Main from 'features/Photos/pages/Main';
import UserFeature from 'features/Users';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/photos/:photoId" component={Main} />
        <PublicRoute path="/auth" component={AuthFeature} />
        <PrivateRoute path="/users" component={UserFeature} />
        <PrivateRoute path="/gallery" component={PhotoFeature} />
        <PublicRoute exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
