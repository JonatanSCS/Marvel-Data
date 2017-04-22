import React, { Component } from 'react'
import axios from 'axios'


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
      <div>
        <img className="card-img-top" src={ character.image.path + '/portrait_fantastic.' + character.image.extension } alt={ character.name+ 'Image'}/>
        <h1>{ character.id }</h1>
        <p>{ character.name }</p>
        <p>{ character.description }</p>
      </div>
    )
  }
}

const CharacterDetail = ({ match }) => (
  <CharacterDetailClass id={ match.params.id }/>
)



export default CharacterDetail
