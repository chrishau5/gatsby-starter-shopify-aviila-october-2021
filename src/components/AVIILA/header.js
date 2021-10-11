/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import Aviila from '../images/AVIILA-white-logo-only.svg'
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/">
            <img width="47.32" style={{ margin: '3px 0 0' }} src={Aviila} />
          </Link>
          <div className="ProductMenuGroup">
            <Link to="/shorts">Shorts</Link>
            <Link to="/shirts">Shirts</Link>
            <Link to="/joggers">Joggers</Link>
            <Link to="/pullovers">Pullovers</Link>
          </div>
          <Link to="/buy">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
