import React from 'react'
import {Link} from 'react-scroll'
import {FormattedMessage, useIntl} from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import {Card, Col, Container, Jumbotron, Nav, Row} from 'react-bootstrap'
import SEO from '@components/helper/seo'

import uniImg from '@assets/institution/UniWien-logo.svg'
import fwfImg from '@assets/institution/FWF-logo.svg'

const IndexPage = () => {
  const intl = useIntl()
  return (
    <PageTemplate>
      <SEO
        lang={intl.locale}
        title={`${intl.formatMessage({id: 'index.title'})}`}
      />
      <Jumbotron>
        <Container>
          <h1 className="display-1">{intl.formatMessage({id: 'index.title'})}</h1>
          <div className="lead">
            <Markdown>
              {intl.formatMessage({id: 'index.textLead'})}
            </Markdown>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col as="aside" xs="12" lg="3" className="aside mb-4">
            <div className="sticky--aside">
              <h4 className="h4 mb-4">
                <FormattedMessage id="navigation.toc"/>
              </h4>
              <Nav as="nav" className="flex-column">
                <Link
                  to="abstract"
                  href="#abstract"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  hashSpy={true}
                >
                  {intl.formatMessage({id: 'index.sectionAbstract'})}
                </Link>
              </Nav>
              <Nav as="nav" className="flex-column">
                <Link
                  to="funding"
                  href="#funding"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  hashSpy={true}
                >
                  {intl.formatMessage({id: 'index.sectionFundingOrg'})}
                </Link>
              </Nav>
              <Nav as="nav" className="flex-column">
                <Link
                  to="institution"
                  href="#institution"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  hashSpy={true}
                >
                  {intl.formatMessage({id: 'index.sectionInstitution'})}
                </Link>
              </Nav>
              <Nav as="nav" className="flex-column">
                <Link
                  to="contact"
                  href="#contact"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  hashSpy={true}
                >
                  {intl.formatMessage({id: 'index.sectionContact'})}
                </Link>
              </Nav>
            </div>
          </Col>
          <Col xs="12" lg="9" className="mx-auto">
            <section id="abstract">
              <Markdown>
                <h2>{intl.formatMessage({id: 'index.sectionAbstract'})}</h2>
              </Markdown>
              <Markdown>
                {intl.formatMessage({id: 'index.textAbstract'})}
              </Markdown>
            </section>
            <hr/>
            <section id="funding">
              <Markdown>
                <h2>{intl.formatMessage({id: 'index.sectionFundingOrg'})}</h2>
              </Markdown>
              <Row>
                <Col xs="12" sm="6">
                  <Card>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        className="w-75"
                        src={fwfImg}
                        alt={intl.formatMessage({id: 'index.fundingFWF.name'})}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Markdown>{intl.formatMessage({id: 'index.fundingFWF.name'})}</Markdown>
                      <a
                        href={intl.formatMessage({id: 'index.fundingFWF.www'})}
                        title={intl.formatMessage({id: 'index.fundingFWF.www'})}
                        target="_blank"
                        className="float-right"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                      </a>
                      <small><Markdown>{intl.formatMessage({id: 'index.fundingFWF.detail'})}</Markdown></small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </section>
            <hr/>
            <section id="institution">
              <Markdown>
                <h2>{intl.formatMessage({id: 'index.sectionInstitution'})}</h2>
              </Markdown>
              <Row>
                <Col xs="12" sm="6">
                  <Card>
                    <Card.Body>
                      <Card.Img
                        variant="top"
                        className="w-75"
                        src={uniImg}
                        alt={intl.formatMessage({id: 'index.instituteUNI.name'})}
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Markdown>{intl.formatMessage({id: 'index.instituteUNI.name'})}</Markdown>
                      <a href={intl.formatMessage({id: 'index.instituteUNI.www'})}
                         target="_blank"
                         title={intl.formatMessage({id: 'index.instituteUNI.www'})}
                         className="float-right"
                         rel="noopener noreferrer">
                        <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                        <span className="sr-only">
                           {intl.formatMessage({id: 'action.www'})}
                         </span>
                      </a>
                      <small><Markdown>{intl.formatMessage({id: 'index.instituteUNI.detail'})}</Markdown></small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </section>
            <hr/>
            <section id="contact">
              <Markdown>
                <h2>{intl.formatMessage({id: 'index.sectionContact'})}</h2>
              </Markdown>
              <Markdown>
                {intl.formatMessage({id: 'index.textContact'})}
              </Markdown>
            </section>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  )
}

export default IndexPage
