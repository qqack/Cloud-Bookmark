import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';


function RouterConfig({ history, app, loading }) {
  const Bookmark = dynamic({
    app,
    models: () => [
      import('./models/bookmark'),
    ],
    component: () => import('./routes/bookmark'),
  });
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/bookmark/" component={Bookmark} loading={loading} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
