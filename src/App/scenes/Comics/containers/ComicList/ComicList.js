import React, { Component } from 'react'
import axios from 'axios'

import Comic from './components/Comic/Comic'

class ComicListClass extends Component {

  constructor() {
    super()

    this.state = {
      comicList: []
    }

    this.getComicsData = this.getComicsData.bind(this)
    this.listNewComics = this.listNewComics.bind(this)
  }

  componentWillMount() {
    this.getComicsData()
  }

  getComicsData() {

    const apiKey = '68b26e9204aa8011100128eb75e5b293'
    //const limitComics = 20;
    const baseUrl = 'https://gateway.marvel.com/v1/public/comics?apikey=' + apiKey + '&orderBy=title'

    let requestUrl = baseUrl

    axios.get(requestUrl)
      .then((res) => {
        this.listNewComics(res.data.data.results)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  listNewComics(comicsData) {
    let comicsList = ''

    if(comicsData.length !== 0) {
       comicsList = comicsData.map((comic) =>
        <Comic key={ comic.id } comicData={ comic }/>
      )
    } else {
      comicsList = <h1>Sin resultados</h1>
    }

    if (this.refs.comicsList) {
      this.setState({
        comicList: comicsList
      })
    }

  }

  render() {
    return(
      <div className="container">
        <div ref="comicsList" className="row d-flex flex-wrap justify-content-around">
          { this.state.comicList }
        </div>
      </div>
    )
  }
}



const ComicList = ({ match }) => (
  <ComicListClass />
)

export default ComicList
