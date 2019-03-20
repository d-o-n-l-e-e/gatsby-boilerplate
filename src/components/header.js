import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Container from './container'

const Header = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const NavLogo = styled.h1`
  margin: 0;
  font-size: 1.8em;
  line-height: 1em;

  a {
    color: #2b2b2b;

    &:hover {
      text-decoration: none;
    }
  }
`

const NavLinks = styled.ul`
  justify-content: flex-end;
  flex-grow: 1;
  display: flex;
  align-items: center;
  margin: 0;
  list-style: none;
`

const NavLink = styled.li`
  display: inline-block;
  margin: 0;
`

export default class extends React.Component {
  componentDidMount() {
    document.documentElement.style.paddingTop = `${
      this.refs.header.clientHeight
      }px`
  }

  render() {
    return (
      <Header ref="header">
        <Container>
          <Nav>
            <NavLogo>
              <Link to="/">{this.props.siteTitle}</Link>
            </NavLogo>
            <NavLinks>
              <NavLink>
                <Link to="/posts">Posts</Link>
              </NavLink>

            </NavLinks>
          </Nav>
        </Container>
      </Header>
    )
  }
}
