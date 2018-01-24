import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import IndexPage from '../components/IndexPage';
import AthletePage from '../components/AthletePage';
import NotFoundPage from '../components/NotFoundPage';

const routesWeb = (
  <div>
    <Router>
      <Route path="/" exact component={Layout}>
      <Route path="athlete/:id" component={AthletePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Router>
  </div>
);

export default routesWeb;
