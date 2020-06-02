import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import React from "react";
import routerConfig from './config'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact 
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function RouteConfigExample() {
  return (
    <Router >
      <div>
        <ul>
        <li>
            <Link to="/treeTable">treeTable</Link>
          </li>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
          <li>
            <Link to="/Tab">Tables</Link>
          </li>
          
        </ul>
        <Switch>
        {routerConfig.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route render={() => <Redirect to="/404" />} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default RouteConfigExample;