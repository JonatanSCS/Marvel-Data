import React from 'react'
import { Route } from 'react-router-dom'
import CharacterList from './containers/CharacterList/CharacterList'
import CharacterDetail from './containers/CharacterDetail/CharacterDetail'

const Characters = ({ match }) => (
  <div>
    <h2>Characters</h2>
    <Route exact path={`${match.url}/`} component={ CharacterList }/>
    <Route exact path={`${match.url}/:name`} component={ CharacterList }/>
    <Route path={`${match.url}/character/:id`} component={ CharacterDetail }/>
  </div>
)

export default Characters
