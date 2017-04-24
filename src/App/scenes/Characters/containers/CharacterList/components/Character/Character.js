import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

import './Character.css'

class Character extends Component {

  constructor(props) {
    super(props)

    let character = {
      id : '',
      name : '',
      description : '',
      thumbnail: {
        path: '',
        extension: ''
      }
    }
    if(props.characterData !== undefined) {
        character = props.characterData
    }

    this.state = {
      id : character.id,
      name : character.name,
      description : character.description,
      image: {
        path: character.thumbnail.path,
        extension: character.thumbnail.extension
      }
    }
  }

  render() {
    const character = this.state

    return(
      <div className="card characterCard">
        <img className="card-img-top" src={ character.image.path + '/portrait_fantastic.' + character.image.extension } alt={ character.name + 'Image'}/>
        <div className="card-block ">
          <h4 className="card-title">{ character.name }</h4>
          <p className="card-text">{ character.description.substring(0, 40) }</p>
          <a href={'/characters/character/' + character.id} className="btn btn-primary characterIdButton">Detail</a>
        </div>
      </div>
    )
  }
}

export default Character
