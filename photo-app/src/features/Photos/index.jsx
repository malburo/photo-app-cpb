import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import GalleryPage from './pages/GalleryPage';
const PhotoFeature = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={GalleryPage} />
      <Route exact path={`${match.url}/photos/:photoId`} component={GalleryPage} />
    </Switch>
  );
};

export default PhotoFeature;
