import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from '../routes/Home'
import paths from '../routes/paths'

export default () => (
  <Router>
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Redirect to={paths.home} />
    </Switch>
  </Router>
)
