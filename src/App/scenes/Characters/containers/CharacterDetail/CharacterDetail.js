import React, { Component } from 'react'
import axios from 'axios'

import './CharacterDetail.css'


class CharacterDetailClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id : props.id,
      name : '',
      description : '',
      image : {
        path : '',
        extension : ''
      }
    }
    this.getCharacterData = this.getCharacterData.bind(this)
    this.setCharacterData = this.setCharacterData.bind(this)
  }

  componentWillMount() {
    const characterId = this.state.id
    this.getCharacterData(characterId)
  }

  getCharacterData(characterId) {
    const baseUrl = 'https://gateway.marvel.com'
    const apiKey = '68b26e9204aa8011100128eb75e5b293'

    const requestUrl = baseUrl + '/v1/public/characters/' + characterId + '?apikey=' + apiKey
    axios.get(requestUrl)
      .then((res) => {
        this.setCharacterData(res.data.data.results[0])
      })
      .catch(function (err) {
        console.log(err)
    })
  }

  setCharacterData(characterData) {
    this.setState({
      name: characterData.name,
      description: characterData.description,
      image: {
        path: characterData.thumbnail.path,
        extension: characterData.thumbnail.extension,
      }
    })
  }

  render() {
    const character = this.state
    return(
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6 character-detail-container">
            <img className="card-img-top" src={ character.image.path + '/portrait_fantastic.' + character.image.extension } alt={ character.name+ 'Image'}/>
            <p className="character-id"><small>ID: </small>{ character.id }</p>
            <h1>{ character.name }</h1>
            <p className="character-description">{ character.description }</p>
          </div>
        </div>

      </div>
    )
  }
}

const CharacterDetail = ({ match }) => (
  <CharacterDetailClass id={ match.params.id }/>
)



export default CharacterDetail
