import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Dashboard} />
        <Redirect from='*' to='/todos' />
    </Router>
)