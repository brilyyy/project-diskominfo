import React from 'react'
import Dashboard from './dashboard/Dashboard'
import Login from './login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default App;
