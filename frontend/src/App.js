import React from 'react'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import N404 from './404/N404'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <ProtectedRoute exact path='/' component={Dashboard}/>
          <Route exact path='*' component={N404} />
        </Switch>
    </Router>
  )
}

export default App;
