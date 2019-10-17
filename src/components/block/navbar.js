import React from 'react'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import { Container, Navbar, Nav } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" id="site-navbar" className="navbar navbar-dark bg-black">
        <Container>
          <Navbar.Brand href="/"><FormattedMessage id="header.brand" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="top-navbar-nav" />
          <Navbar.Collapse id="top-navbar-nav">
            <Nav as="ul" className="ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/team/" className="nav-link">
                  <FormattedMessage id="navigation.team" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/collaborations/" className="nav-link">
                  <FormattedMessage id="navigation.collaborations" />
                </Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default injectIntl(CustomNavbar)
