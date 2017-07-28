/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';
import CorePage from './containers/CorePage';
import DragDemo from './containers/DragDemo';

export default () => (
  <App>
    <Switch>

      <Route path="/dragdemo" component={DragDemo} />
      <Route path="/core" component={CorePage} />
      <Route path="/" component={HomePage} />
      
    </Switch>
  </App>
);
