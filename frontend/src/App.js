import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./notfound/NotFound";
import { useBeforeunload } from "react-beforeunload";

const App = () => {
  useBeforeunload((e) => {
    localStorage.clear();
    e.preventDefault();
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
