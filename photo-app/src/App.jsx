import { Route, Switch } from 'react-router-dom';
import AuthFeature from 'features/Auth';
import PhotoFeature from 'features/Photos';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={AuthFeature} />
        <Route exact path="/" component={PhotoFeature} />
      </Switch>
    </div>
  );
};

export default App;
