import React, { Component } from 'react'

import { searchCharacterByLetter, resetCharacterPagination } from '../../actions/index'

class InputSeacrh extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchingName: '',
      store: props.store
    }

    this.handleNewLetter = this.handleNewLetter.bind(this)
  }

  handleNewLetter(e) {

    this.state.store.dispatch(resetCharacterPagination(1))
    this.state.store.dispatch(searchCharacterByLetter(e.target.value))
    const searchingName = this.state.store.getState().InputGetNewLetter

    this.setState( {
      searchingName: searchingName
    })
  }

  render() {
    return(
      <div className="form-group row">
        <label htmlFor="character-name" className="col-2 col-form-label">Busar: </label>
        <div className="col-10">
          <input onChange={ this.handleNewLetter } className="form-control" type="text" id="character-name" value={ this.state.searchingName || '' }/>
        </div>
      </div>
    )
  }
}

export default InputSeacrh
