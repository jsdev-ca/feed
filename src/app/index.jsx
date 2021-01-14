import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import RouteWithSubroutes from '../common/utilities/route-with-subroutes';
import Header from './header';
import routes from './routes-config';

export default function () {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container-fluid">
          <Switch>
            {routes.map(({ name, ...rest }) => (
              <RouteWithSubroutes key={name} {...rest} />
            ))}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}
