import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  render() {
    return(
      <header>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded bg-inverse">
          <div className="container">
            <Link to="/" className="navbar-brand text-white"><img src={ process.env.PUBLIC_URL + '/img/logos/marvel.png' } alt="Marvel Logo"/></Link>
            <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav right">
                <li className="nav-item"><Link className="nav-link text-white" to="/characters">Characters</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/comics">Comics</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/creators">Creators</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/events">Events</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/series">Series</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/stories">Stories</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
