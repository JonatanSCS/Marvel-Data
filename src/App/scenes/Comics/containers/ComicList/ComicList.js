import React, { Component } from 'react'
import axios from 'axios'

class ComicListClass extends Component {

  constructor() {
    super()

    this.getComicsData = this.getComicsData.bind(this)
  }

  componentWillMount() {
    this.getComicsData()
  }

  getComicsData() {

    const apiKey = '68b26e9204aa8011100128eb75e5b293'
    //const limitComics = 20;
    const baseUrl = 'https://gateway.marvel.com/v1/public/comics?apikey=' + apiKey

    let requestUrl = baseUrl

    axios.get(requestUrl)
      .then((res) => {
        console.log(res.data.data.results)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  render() {
    return(
      <h1>Comic List Class</h1>
    )
  }
}



const ComicList = ({ match }) => (
  <ComicListClass />
)

export default ComicList
