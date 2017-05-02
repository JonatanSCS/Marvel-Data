import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Comic.css'

class Comic extends Component {

  constructor(props) {
    super(props)
    let comicDescription = ''
    if(props.comicData.description != null) {
      comicDescription = props.comicData.description
    }
    this.state = {
      title: props.comicData.title,
      description: comicDescription,
      image: {
        path: props.comicData.thumbnail.path,
        extension: props.comicData.thumbnail.extension
      }
    }
  }

  render() {
    const comic = this.state

    return(
      <div className="card comicCard">
        <img className="card-img-top" src={ comic.image.path + '/portrait_fantastic.' + comic.image.extension } alt={ comic.name + 'Image'}/>
        <div className="card-block ">
          <h4 className="card-title">{ comic.name || 'Sin Nombre'}</h4>
          <p className="card-text">{ comic.description.substring(0, 40) || 'Sin Descripción'}</p>
          <Link to={'/comics/comic/' + comic.id} className="btn btn-primary comicIdButton">Detail</Link>
        </div>
      </div>
    )
  }
}

export default Comic
