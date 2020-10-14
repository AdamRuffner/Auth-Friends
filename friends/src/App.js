import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import IndividualFriend from './components/IndividualFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/friends">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path ='/login' component={Login} />
          <PrivateRoute path='/friends/:id' component={IndividualFriend} />
          <PrivateRoute path='/friends' component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
