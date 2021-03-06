import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { searchNewCharacters } from '../../actions/index'

class InputSeacrh extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchedName: props.inputSearch,
      store: props.store
    }

    this.handleNewLetter = this.handleNewLetter.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchCharacter = this.searchCharacter.bind(this)
  }

  componentDidMount() {
    const inputInitialValue = this.refs.searchCharacterInput.value

    this.state.store.dispatch(searchNewCharacters(inputInitialValue, 1))
  }

  handleNewLetter(e) {
    this.setState( {
      searchedName: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const searchButton = document.getElementById('searchCharacterButton')

    searchButton.click()
  }

  searchCharacter() {
    this.state.store.dispatch(searchNewCharacters(this.state.searchedName, 1))
  }

  render() {
    return(
      <form className="form-group row" onSubmit={ this.handleSubmit }>
        <input ref="searchCharacterInput" onChange={ this.handleNewLetter } className="form-control col-sm-5" type="text" id="character-name" value={ this.state.searchedName }/>
        <Link to={'/characters/' + this.state.searchedName } className="btn btn-primary col-sm-1" id="searchCharacterButton" onClick={ this.searchCharacter }>Buscar</Link>
      </form>
    )
  }
}

export default InputSeacrh
