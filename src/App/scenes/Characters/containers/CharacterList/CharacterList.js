import React, { Component } from 'react'
import axios from 'axios'
import { createStore } from 'redux'

import { characterApp } from './reducers/index'

import Character from './components/Character/Character'
import InputSearch from './components/InputSearch/InputSearch'
import Pagination from './components/Pagination/Pagination'




const store = createStore(characterApp)
class CharacterListClass extends Component {

  constructor(props) {
    super(props)
    let searchName = ''
    if(props.name !== undefined) {
      searchName = props.name
    }

    this.state = {
      charactersList: [],
      inputSearch: searchName,
      page: 1,
      charactersCount: 0
    }

    this.listNewCharacters = this.listNewCharacters.bind(this)
    this.getMarvelData = this.getMarvelData.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentWillMount() {
    store.subscribe(this.handlePageChange)
    this.getMarvelData(this.state.page, this.state.inputSearch)
  }

  getMarvelData(actualPage, inputSearch) {
    const baseUrl = 'https://gateway.marvel.com'
    const apiKey = '68b26e9204aa8011100128eb75e5b293'

    const limitCharacters = 20;
    const offsetCharacters = ( limitCharacters * actualPage ) - limitCharacters

    let requestUrl = ''
    if(inputSearch !== '') {
      requestUrl = baseUrl + '/v1/public/characters?apikey=' + apiKey + '&offset=' + offsetCharacters + '&nameStartsWith=' + inputSearch
    } else {
      requestUrl = baseUrl + '/v1/public/characters?apikey=' + apiKey + '&offset=' + offsetCharacters
    }

    axios.get(requestUrl)
      .then((res) => {
        this.listNewCharacters(res.data)
      })
      .catch(function (err) {
        console.log(err)
    })
  }


  listNewCharacters(charactersData) {

    this.setState({
      charactersCount: charactersData.data.total
    })
    const characterReults = charactersData.data.results
    const charactersList = characterReults.map((character) =>
      <Character key={ character.id } characterData={ character }/>
    )
    this.setState({
      charactersList: charactersList
    })
  }

  handlePageChange() {
    const searchedName = store.getState().InputGetNewLetter
    const page = store.getState().changeCharacterPage

    this.getMarvelData(page, searchedName)
  }

  render() {
    return (
      <div className="container">
        <Pagination store={ store } charactersCount={ this.state.charactersCount }/>
        <InputSearch store={ store } />
        <div className="row d-flex flex-wrap justify-content-around">
          { this.state.charactersList }
        </div>
      </div>
    )
  }
}

const CharacterList = ({ match }) => (
  <CharacterListClass name={ match.params.name }/>
)
export default CharacterList
