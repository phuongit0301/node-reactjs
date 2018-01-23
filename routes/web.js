import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import IndexPage from '../components/IndexPage';
import AthletePage from '../components/AthletePage';
import NotFoundPage from '../components/NotFoundPage';

const routesWeb = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routesWeb;
