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
    this.getCharactersData = this.getCharactersData.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentDidMount() {
    store.subscribe(this.handlePageChange)
    this.getCharactersData(this.state.page, this.state.inputSearch)
  }

  getCharactersData(actualPage, inputSearch) {
    const apiKey = '68b26e9204aa8011100128eb75e5b293'
    const limitCharacters = 20;
    const offsetCharacters = ( limitCharacters * actualPage ) - limitCharacters
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters?apikey=' + apiKey + '&offset=' + offsetCharacters

    let requestUrl = ''

    if(inputSearch !== '') {
      requestUrl = baseUrl + '&nameStartsWith=' + inputSearch
    } else {
      requestUrl = baseUrl
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
    const searchedName = store.getState().searchNewCharacter.name
    const characterReults = charactersData.data.results
    let charactersList = ''


    if(characterReults.length !== 0) {
       charactersList = characterReults.map((character) =>
        <Character key={ character.id } characterData={ character }/>
      )
    } else {
      charactersList = <h1>{ searchedName }: Sin resultados</h1>
    }

    if (this.refs.characterList) {
      this.setState({
        charactersList: charactersList,
        charactersCount: charactersData.data.total
      })
    }
  }

  handlePageChange() {
    const searchedName = store.getState().searchNewCharacter.name
    const page = store.getState().searchNewCharacter.page

    this.getCharactersData(page, searchedName)
  }

  render() {
    return (
      <div className="container">
        <Pagination store={ store } charactersCount={ this.state.charactersCount } />
        <InputSearch store={ store } inputSearch={ this.state.inputSearch }/>
        <div ref="characterList" className="row d-flex flex-wrap justify-content-around">
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
