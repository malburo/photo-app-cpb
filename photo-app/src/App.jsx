import { Route, Switch } from 'react-router-dom';
import AuthFeature from 'features/Auth';
import PhotoFeature from 'features/Photos';
import Main from 'features/Photos/pages/Main';
import UserFeature from 'features/Users';

const App = () => {
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
