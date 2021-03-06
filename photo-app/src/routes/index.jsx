import AuthFeature from 'features/Auth';
import PhotoFeature from 'features/Photos';
import Main from 'features/Photos/pages/Main';
import UserFeature from 'features/Users';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SearhcPhotoPage from '../features/Photos/pages/SearchPhoto';
import NotFound from 'components/NotFound';
function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/search/photos" component={SearhcPhotoPage} />
        <PublicRoute path="/photos/:photoId" component={Main} />
        <PublicRoute path="/auth" component={AuthFeature} />
        <PublicRoute path="/gallery" component={PhotoFeature} />
        <PrivateRoute path="/users" component={UserFeature} />
        <PublicRoute exact path="/" component={Main} />
        <Route exact path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
