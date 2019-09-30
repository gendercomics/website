import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import { Container, Nav, Card, Jumbotron, Row, Col, Accordion } from "react-bootstrap"
import susanneImg from '@assets/team/susanne-hochreiter.png'
import marinaImg from '@assets/team/marina-rauchenbacher.png'
import katharinaImg from '@assets/team/katharina-serles.png'
import matthiasImg from '@assets/team/matthias-grieder.png'
import michaelImg from '@assets/team/michael-litschauer.png'
import ingoImg from '@assets/team/ingo-boerner.png'
import panelImg from '@assets/panel/feminism-gender-equality-comics.jpg'

const Team = ({ intl }) => {
  return (
    <PageTemplate title={intl.formatMessage({ id: 'team.title' })}>
      <Jumbotron>
        <Container>
          <Markdown>
            <h1 className="display-1">{intl.formatMessage({ id: 'team.title' })}</h1>
          </Markdown>
          <div className="lead">
            <Markdown>
              {intl.formatMessage({ id: 'team.textLead' })}
            </Markdown>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col as="aside" xs="12" lg="3" className="aside mb-4">
            <div className="sticky--aside">
              <div className="h4 mb-4">On this page</div>
              <Nav as="nav" className="flex-column">
                <Link
                  to="projectTeam"
                  href="#projectTeam"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({ id: 'team.sectionCore' })}</strong>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="Susanne"
                      href="#Susanne"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.susanne.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Marina"
                      href="#Marina"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.marina.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Katharina"
                      href="#Katharina"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.katharina.name' })}
                    </Link>
                  </li>
                </ul>
                <Link
                  to="developmentTeam"
                  href="#developmentTeam"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({ id: 'team.sectionDev' })}</strong>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="Ingo"
                      href="#Ingo"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.ingo.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Michael"
                      href="#Michael"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.michael.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Matthias"
                      href="#Matthias"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.matthias.name' })}
                    </Link>
                  </li>
                </ul>
                <Link
                  to="advisoryBoard"
                  href="#advisoryBoard"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({ id: 'team.sectionBoard' })}</strong>
                </Link>
              </Nav>
            </div>
          </Col>
          {/* Project Team */}
          <Col xs="12" lg="9" className="mx-auto">
            <section id="projectTeam">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({ id: 'team.sectionCore' })}</h2>
              </Markdown>
              <details id="Susanne" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex">
                  <img
                    className="img-fluid image__person rounded-circle mr-3"
                    src={susanneImg}
                    alt={intl.formatMessage({ id: 'team.person.susanne.name' })}
                    />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'team.person.susanne.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <div className="h5">{intl.formatMessage({ id: 'team.accordion.resume' })}</div>
                  <Markdown>{intl.formatMessage({ id: 'team.person.susanne.textAbout' })}</Markdown>
                  <h3 className="h5">{intl.formatMessage({ id: 'team.accordion.publication' })}</h3>
                  <Markdown>{intl.formatMessage({ id: 'team.person.susanne.listPublication' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">{intl.formatMessage({ id: 'team.person.susanne.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({ id: 'team.person.susanne.linkedIn' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.linkedIn' })}
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({ id: 'team.person.susanne.email' })}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-paper-plane fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.sendEmail' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              <details id="Marina" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="1">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={marinaImg}
                    alt={intl.formatMessage({ id: 'team.person.marina.name' })}
                  />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'team.person.marina.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <div className="h5">{intl.formatMessage({ id: 'team.accordion.resume' })}</div>
                  <Markdown>{intl.formatMessage({ id: 'team.person.marina.textAbout' })}</Markdown>
                  <h3 className="h5">{intl.formatMessage({ id: 'team.accordion.publication' })}</h3>
                  <Markdown>{intl.formatMessage({ id: 'team.person.marina.listPublication' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">{intl.formatMessage({ id: 'team.person.marina.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({ id: 'team.person.marina.linkedIn' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.linkedIn' })}
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({ id: 'team.person.marina.email' })}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-paper-plane fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.sendEmail' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              <details id="Katharina" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={katharinaImg}
                    alt={intl.formatMessage({ id: 'team.person.katharina.name' })}
                    />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'team.person.katharina.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <div className="h5">{intl.formatMessage({ id: 'team.accordion.resume' })}</div>
                  <Markdown>{intl.formatMessage({ id: 'team.person.katharina.textAbout' })}</Markdown>
                  <h3 className="h5">{intl.formatMessage({ id: 'team.accordion.publication' })}</h3>
                  <Markdown>{intl.formatMessage({ id: 'team.person.katharina.listPublication' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({ id: 'team.person.katharina.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({ id: 'team.person.katharina.linkedIn' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.linkedIn' })}
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({ id: 'team.person.katharina.email' })}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-paper-plane fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.sendEmail' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
            </section>
            {/* IT Team */}
            <section id="developmentTeam" className="mt-4">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({ id: 'team.sectionDev' })}</h2>
              </Markdown>
              <details id="Ingo" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="3">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={ingoImg}
                    alt={intl.formatMessage({ id: 'team.person.ingo.name' })}
                  />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'team.person.ingo.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <div className="h5">{intl.formatMessage({ id: 'team.accordion.resume' })}</div>
                  <Markdown>{intl.formatMessage({ id: 'team.person.ingo.textAbout' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({ id: 'team.person.ingo.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({ id: 'team.person.ingo.email' })}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-paper-plane fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.sendEmail' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              <details id="Michael" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="4">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={michaelImg}
                    alt={intl.formatMessage({ id: 'team.person.michael.name' })}
                  />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'team.person.michael.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <div className="h5">{intl.formatMessage({ id: 'team.accordion.resume' })}</div>
                  <Markdown>{intl.formatMessage({ id: 'team.person.michael.textAbout' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({ id: 'team.person.michael.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({ id: 'team.person.michael.linkedIn' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.linkedIn' })}
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({ id: 'team.person.michael.email' })}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-paper-plane fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.sendEmail' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              <details id="Matthias" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="5">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={matthiasImg}
                    alt={intl.formatMessage({ id: 'team.person.matthias.name' })}
                  />
                  <div className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'team.person.matthias.textLead' })}</Markdown>
                  </div>
                </summary>
                <Card.Body>
                  <div className="h5">{intl.formatMessage({ id: 'team.accordion.resume' })}</div>
                  <Markdown>{intl.formatMessage({ id: 'team.person.matthias.textAbout' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({ id: 'team.person.matthias.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({ id: 'team.person.matthias.linkedIn' })}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.linkedIn' })}
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({ id: 'team.person.matthias.email' })}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-paper-plane fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.sendEmail' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
            </section>
            {/* Advisory Board */}
            <section id="advisoryBoard" className="mt-4">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({ id: 'team.sectionBoard' })}</h2>
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

export default injectIntl(Team)
