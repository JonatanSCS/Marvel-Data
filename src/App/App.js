import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './layers/Nav/Nav'

import Home from './scenes/Home/Home'
import Characters from './scenes/Characters/Characters'
import Comics from './scenes/Comics/Comics'

const NoMatch = ({ location }) => (
  <div>
    <h3>Esta página no existe: <code>{ location.pathname }</code></h3>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/characters" component={ Characters }/>
        <Route path="/comics" component={ Comics }/>
        <Route component={ NoMatch }/>
      </Switch>
    </div>
  </Router>
)
export default BasicExample
