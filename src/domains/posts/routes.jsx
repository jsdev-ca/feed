import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithSubroutes from '../../common/utilities/route-with-subroutes';
import routes from './routes-config';

export default function () {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubroutes key={i} {...route} />
      ))}
    </Switch>
  );
}
