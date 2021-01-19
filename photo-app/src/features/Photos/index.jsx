import NotFound from 'components/NotFound';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import GalleryPage from './pages/GalleryPage';
const PhotoFeature = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/:userId`} component={GalleryPage} />
      <Route exact path={`${match.url}/photos/:photoId`} component={GalleryPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default PhotoFeature;
