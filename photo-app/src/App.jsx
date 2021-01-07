import { Route, Switch } from 'react-router-dom';
import AuthFeature from 'features/Auth';
import PhotoFeature from 'features/Photos';
import Main from 'features/Photos/pages/Main';
import UserFeature from 'features/Users';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from 'app/userSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={AuthFeature} />
        <Route path="/users" component={UserFeature} />
        <Route path="/photos" component={PhotoFeature} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default App;
