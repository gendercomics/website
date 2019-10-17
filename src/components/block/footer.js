import React from 'react'
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { Link, FormattedMessage, injectIntl } from 'gatsby-plugin-intl'
import LanguageSelector from '@components/element/LanguageSelector'
import ScrollTop from '@components/helper/scrollTop'

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <Container as="section">
        <Row>
          <Col xs="12" lg="6" className="text-center text-lg-left my-auto">
            <Nav as="ul" className="list-inline justify-content-center justify-content-lg-start">
              <li>
                <Link to="/" className="nav-link p-1">Home</Link>
              </li>
              <li>
                <Link to="/team/" className="nav-link p-1">
                  <FormattedMessage id="navigation.team" />
                </Link>
              </li>
              <li>
                <Link to="/project/" className="nav-link p-1">
                  <FormattedMessage id="navigation.collaborations" />
                </Link>
              </li>
              <li className="ml-3">
                <ScrollTop />
              </li>
            </Nav>
            <LanguageSelector />
            <p className="d-inline-flex text-muted small ml-2 mb-4 mb-lg-0">
              <span className="mr-1">&copy;</span>
              <span className="mr-1">{new Date().getFullYear()}</span>
              <span className="mr-1"><FormattedMessage id="header.brand" /></span>
              <FormattedMessage id="footer.copyright" />
            </p>
          </Col>
          <Col xs="12" lg="6" className="text-center text-lg-right my-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-0">
                <a href="https://github.com/gendercomics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link">
                  <i className="fa fa-github fa-2x fa-fw"></i>
                  <span className="sr-only">Follow us on GitHub</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/gendercomics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link">
                  <i className="fa fa-twitter fa-2x fa-fw"></i>
                  <span className="sr-only">Follow us on Twitter</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default injectIntl(Footer)
