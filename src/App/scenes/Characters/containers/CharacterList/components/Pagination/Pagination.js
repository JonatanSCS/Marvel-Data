import React, { Component } from 'react'

import { nextCharacterPage, previusCharacterPage } from '../../actions/index'

class Pagination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
    }

    this.previusPage = this.previusPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }
  previusPage() {
    this.props.store.dispatch(previusCharacterPage(this.state.page))
    const previusPage = this.props.store.getState().changeCharacterPage

    this.setState( {
      page: previusPage
    })
  }

  nextPage() {
    this.props.store.dispatch(nextCharacterPage(this.state.page))
    const nextPage = this.props.store.getState().changeCharacterPage

    this.setState( {
      page: nextPage
    })
  }

  render() {

    let previusPagePagination = <li className="page-item"><button className="page-link" onClick={this.previusPage}>Previous</button></li>
    let nextPagePagination = <li className="page-item"><button className="page-link"  onClick={this.nextPage}>Next</button></li>
    if(this.state.page <= 1) {
      previusPagePagination = <li className="page-item disabled"><button className="page-link" onClick={this.previusPage}>Previous</button></li>
    }

    const maxCharactersCount = Math.ceil(this.props.charactersCount / 20)

    if(this.state.page >= maxCharactersCount) {
      nextPagePagination = <li className="page-item disabled"><button className="page-link"  onClick={this.nextPage}>Next</button></li>
    }

    return(
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          { previusPagePagination }
          <li className="page-item active"><button className="page-link">Pagina: { this.state.page }</button></li>
          { nextPagePagination }
        </ul>
      </nav>
    )
  }
}

export default Pagination
