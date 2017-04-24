import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './layers/Nav/Nav'

import Home from './scenes/Home/Home'
import Characters from './scenes/Characters/Characters'

const MarvelApp = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={ Home }/>
      <Route path="/characters" component={ Characters }/>
    </div>
  </Router>
)
export default MarvelApp
