import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
