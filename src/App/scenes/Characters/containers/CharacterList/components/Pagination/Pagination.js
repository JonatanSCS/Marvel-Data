import React, { Component } from 'react'

import { searchNewCharacters } from '../../actions/index'

class Pagination extends Component {
  constructor(props) {
    super(props)

    this.previusPage = this.previusPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }


  previusPage() {
    const actualPage = this.props.store.getState().searchNewCharacter.page
    const actualSearch = this.props.store.getState().searchNewCharacter.name

    this.setState({
      page: actualPage - 1
    })

    this.props.store.dispatch(searchNewCharacters(actualSearch, actualPage - 1))
  }

  nextPage() {
    const actualPage = this.props.store.getState().searchNewCharacter.page
    const actualSearch = this.props.store.getState().searchNewCharacter.name

    this.setState({
      page: actualPage + 1
    })

    this.props.store.dispatch(searchNewCharacters(actualSearch, actualPage + 1))
  }

  render() {
    const actualPage = this.props.store.getState().searchNewCharacter.page
    const maxCharactersCount = Math.ceil(this.props.charactersCount / 20)

    let prevStatus = ''
    let nextStatus = ''

    if(actualPage <= 1) {
      prevStatus = 'disabled'
    }

    if(actualPage >= maxCharactersCount) {
      nextStatus = 'disabled'
    }

    let previusPagePagination = <li className={ 'page-item ' +  prevStatus}><button className="page-link" onClick={this.previusPage}>Previous</button></li>
    let nextPagePagination = <li className={ 'page-item ' +  nextStatus}><button className="page-link"  onClick={this.nextPage}>Next</button></li>



    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          { previusPagePagination }
          <li className="page-item active"><button className="page-link">Pagina: { actualPage }</button></li>
          { nextPagePagination }
        </ul>
      </nav>
    )
  }
}

export default Pagination
