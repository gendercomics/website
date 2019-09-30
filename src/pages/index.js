import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import { Container, Nav, Jumbotron, Row, Col } from "react-bootstrap"
import panelImg from '@assets/panel/gender_queer_a_memoir.jpg'

const IndexPage = ({ intl }) => {
  return (
    <PageTemplate title={intl.formatMessage({ id: 'index.title' })}>
      <Jumbotron>
        <Container>
          <h1 className="display-1">{intl.formatMessage({ id: 'index.title' })}</h1>
          <p className="lead">
            <Markdown>
              {intl.formatMessage({ id: 'index.textLead' })}
            </Markdown>
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col as="aside" xs="12" lg="3" className="aside mb-4">
            <div className="sticky--aside">
              <div className="h4 mb-4">On this page</div>
              <Nav as="nav" className="flex-column">
                <Link
                  to="abstract"
                  href="#abstract"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  {intl.formatMessage({ id: 'index.sectionAbstract' })}
                </Link>
                <Link
                  to="vision"
                  href="#vision"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  {intl.formatMessage({ id: 'index.sectionVision' })}
                </Link>
              </Nav>
            </div>
          </Col>
          <Col xs="12" lg="9" className="mx-auto">
            <section id="abstract">
              <Markdown>
                <h2>{intl.formatMessage({ id: 'index.sectionAbstract' })}</h2>
              </Markdown>
              <Markdown>
                {intl.formatMessage({ id: 'index.textAbstract' })}
              </Markdown>
            </section>
            <section id="vision" className="mt-4">
              <Markdown>
                <h2>{intl.formatMessage({ id: 'index.sectionVision' })}</h2>
              </Markdown>
              <Markdown>
                {intl.formatMessage({ id: 'index.textVision' })}
              </Markdown>
            </section>
          </Col>
        </Row>
        <Jumbotron as="figure" className="mt-4 text-center">
          <img src={panelImg} className="img-fluid" alt="" />
          <figcaption>From our database</figcaption>
        </Jumbotron>
      </Container>
    </PageTemplate>
  )
}

export default injectIntl(IndexPage)
