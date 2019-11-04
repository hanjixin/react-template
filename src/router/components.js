
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import myTables from '../views/myTables'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />  
  );
}
function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}


function Bus() {
  return <h3>Bus</h3>;
}
function NotFound() {
  return <h3>NotFound</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}
function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

const components  = {
  Tacos,
  Bus,
  NotFound,
  Cart,
  Sandwiches,
  myTables
}

export default components