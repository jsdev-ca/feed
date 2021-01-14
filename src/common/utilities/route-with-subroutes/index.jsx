import React from 'react';
import { Route } from 'react-router-dom';

export default function ({ component: Component, path, routes }) {
  return (
    <Route
      path={path}
      render={props => (
        <Component {...props} routes={routes} />
      )}
    />
  );
}
