import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routesWeb from '../routes/web';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory} routes={routesWeb} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}
