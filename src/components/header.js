import React from 'react'
import { Link } from 'gatsby'

import Container from './container'

import headerStyles from '../styles/header.module.scss'

class Header extends React.Component {
  componentDidMount() {
    document.documentElement.style.paddingTop = `${
      this.refs.header.clientHeight
    }px`
  }

  render() {
    return (
      <div className={headerStyles.header} ref="header">
        <Container>
          <nav className={headerStyles.nav}>
            <h1 className={headerStyles.navLogo}>
              <Link to="/">{this.props.siteTitle}</Link>
            </h1>
            <ul className={headerStyles.navLinks}>
              <li className={headerStyles.navLink}>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}

export default Header
