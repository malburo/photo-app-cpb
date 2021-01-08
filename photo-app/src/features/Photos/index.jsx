import { Switch, useRouteMatch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Gallery from './pages/Gallery';

const PhotoFeature = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/gallery`} component={Gallery} />
    </Switch>
  );
};

export default PhotoFeature;
