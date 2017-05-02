import React from 'react'
import { Route } from 'react-router-dom'

import ComicList from './containers/ComicList/ComicList'




const Comics = ({ match }) => (
  <div>
    <h2>Comics</h2>
    <Route exact path={`${match.url}/`} component={ ComicList }/>
  </div>
)

export default Comics
