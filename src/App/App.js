import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './layers/Nav/Nav'

import Home from './scenes/Home/Home'
import Characters from './scenes/Characters/Characters'
import Comics from './scenes/Comics/Comics'

const BasicExample = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={ Home }/>
      <Route path="/characters" component={ Characters }/>
      <Route path="/comics" component={ Comics }/>
    </div>
  </Router>
)
export default BasicExample
