import React from 'react'
import {Link} from 'react-scroll'
import {FormattedMessage, useIntl} from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import {Card, Col, Container, Jumbotron, Nav, Row} from 'react-bootstrap'
import SEO from '@components/helper/seo'


import ingoImg from '@assets/team/ingo-boerner.png'
import katharinaImg from '@assets/team/katharina-serles.png'
import marinaImg from '@assets/team/marina-rauchenbacher.png'
import michaelImg from '@assets/team/michael-litschauer.png'
import naomiImg from '@assets/team/naomi-lobnig.png'
import susanneImg from '@assets/team/susanne-hochreiter.png'

const Team = () => {
  const intl = useIntl()
  return (
    <PageTemplate>
      <SEO
        lang={intl.locale}
        title={`${intl.formatMessage({id: 'team.title'})}`}
      />
      <Jumbotron>
        <Container>
          <Markdown>
            <h1 className="display no-wrap">{intl.formatMessage({id: 'team.title'})}</h1>
          </Markdown>
          <div className="lead">
            <Markdown>
              {intl.formatMessage({id: 'team.textLead'})}
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
                  to="projectTeam"
                  href="#projectTeam"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({id: 'team.sectionCore'})}</strong>
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
                      {intl.formatMessage({id: 'team.person.susanne.name'})}
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
                      {intl.formatMessage({id: 'team.person.marina.name'})}
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
                      {intl.formatMessage({id: 'team.person.katharina.name'})}
                    </Link>
                  </li>
                </ul>

                {/* Assistenz */}
                <Link
                  to="uniAssistance"
                  href="#uniAssistance"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({id: 'team.sectionAssistance'})}</strong>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="Naomi"
                      href="#Naomi"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'team.person.naomi.name' })}
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
                  <strong>{intl.formatMessage({id: 'team.sectionDev'})}</strong>
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
                </ul>
              </Nav>
            </div>
          </Col>
          {/* Project Team */}
          <Col xs="12" lg="9" className="mx-auto">
            <section id="projectTeam">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({id: 'team.sectionCore'})}</h2>
              </Markdown>
              {/* Susanne Hochreiter */}
              <details id="Susanne" className="list-group list-group-flush">
                <summary eventkey="1">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3"
                      src={susanneImg}
                      alt={intl.formatMessage({id: 'team.person.susanne.name'})}
                    />
                    <div className="lead my-auto">
                      <Markdown>{intl.formatMessage({id: 'team.person.susanne.textLead'})}</Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({id: 'team.person.susanne.textAbout'})}</Markdown>
                  <h3 className="h5">{intl.formatMessage({id: 'team.accordion.publication'})}</h3>
                  <Markdown>{intl.formatMessage({id: 'team.person.susanne.listPublication'})}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">{intl.formatMessage({id: 'team.person.susanne.name'})}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({id: 'team.person.susanne.email'})}
                         target="_blank"
                         rel="noopener noreferrer">
                        <i className="fa fa-envelope fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.sendEmail'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.susanne.uni-www'})}
                        title={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.susanne.uni-www'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-university fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({id: 'team.person.susanne.academia'})}
                        title={intl.formatMessage({id: 'team.person.susanne.academia'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-graduation-cap fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.academia'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.susanne.linkedIn'})}
                        title={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.susanne.linkedIn'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.linkedIn'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://twitter.com/' + intl.formatMessage({id: 'team.person.susanne.twitter'})}
                        title={'https://www.twitter.com/' + intl.formatMessage({id: 'team.person.susanne.twitter'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.twitter'})}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              {/* Marina Rauchenbacher */}
              <details id="Marina" className="list-group list-group-flush">
                <summary eventkey="2">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={marinaImg}
                      alt={intl.formatMessage({id: 'team.person.marina.name'})}
                    />
                    <div className="lead my-auto">
                      <Markdown>{intl.formatMessage({id: 'team.person.marina.textLead'})}</Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({id: 'team.person.marina.textAbout'})}</Markdown>
                  <h3 className="h5">{intl.formatMessage({id: 'team.accordion.publication'})}</h3>
                  <Markdown>{intl.formatMessage({id: 'team.person.marina.listPublication'})}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">{intl.formatMessage({id: 'team.person.marina.name'})}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({id: 'team.person.marina.email'})}
                         target="_blank"
                         rel="noopener noreferrer">
                        <i className="fa fa-envelope fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.sendEmail'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.marina.uni-www'})}
                        title={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.marina.uni-www'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-university fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({id: 'team.person.marina.academia'})}
                        title={intl.formatMessage({id: 'team.person.marina.academia'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-graduation-cap fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.academia'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.marina.linkedIn'})}
                        title={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.marina.linkedIn'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.linkedIn'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://twitter.com/' + intl.formatMessage({id: 'team.person.marina.twitter'})}
                        title={'https://www.twitter.com/' + intl.formatMessage({id: 'team.person.marina.twitter'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.twitter'})}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              {/* Katharina Serles */}
              <details id="Katharina" className="list-group list-group-flush">
                <summary eventkey="3">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={katharinaImg}
                      alt={intl.formatMessage({id: 'team.person.katharina.name'})}
                    />
                    <div className="lead my-auto">
                      <Markdown>{intl.formatMessage({id: 'team.person.katharina.textLead'})}</Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({id: 'team.person.katharina.textAbout'})}</Markdown>
                  <h3 className="h5">{intl.formatMessage({id: 'team.accordion.publication'})}</h3>
                  <Markdown>{intl.formatMessage({id: 'team.person.katharina.listPublication'})}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({id: 'team.person.katharina.name'})}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({id: 'team.person.katharina.email'})}
                         target="_blank"
                         rel="noopener noreferrer">
                        <i className="fa fa-envelope fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.sendEmail'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.katharina.uni-www'})}
                        title={intl.formatMessage({id: 'team.person.katharina.uni-www'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-university fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({id: 'team.person.katharina.academia'})}
                        title={intl.formatMessage({id: 'team.person.katharina.academia'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-graduation-cap fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.academia'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({id: 'team.person.katharina.www'})}
                        title={intl.formatMessage({id: 'team.person.katharina.www'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-globe fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.katharina.linkedIn'})}
                        title={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.katharina.linkedIn'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.linkedIn'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://twitter.com/' + intl.formatMessage({id: 'team.person.katharina.twitter'})}
                        title={'https://www.twitter.com/' + intl.formatMessage({id: 'team.person.katharina.twitter'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-twitter fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.twitter'})}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
            </section>
            <section id="uniAssistance">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({id: 'team.sectionAssistance'})}</h2>
                {/* Naomi Lobnig */}
                <details id="Naomi" className="list-group list-group-flush">
                  <summary eventkey="1">
                    <div className="list-group-item list-group-item-action d-flex">
                      <img
                        className="img-fluid image__person rounded-circle mr-3"
                        src={naomiImg}
                        alt={intl.formatMessage({id: 'team.person.naomi.name'})}
                      />
                      <div className="lead my-auto">
                        <Markdown>{intl.formatMessage({id: 'team.person.naomi.textLead'})}</Markdown>
                      </div>
                    </div>
                  </summary>
                  {
                  <Card.Body>
                    <Markdown>{intl.formatMessage({id: 'team.person.naomi.textAbout'})}</Markdown>
                    <h3 className="h5">{intl.formatMessage({id: 'team.accordion.publication'})}</h3>
                    <Markdown>{intl.formatMessage({id: 'team.person.naomi.listPublication'})}</Markdown>
                  </Card.Body>
                  }
                  <Card.Footer className="d-flex align-items-center">
                    <span className="text-muted small">{intl.formatMessage({id: 'team.person.naomi.name'})}</span>
                    <ul className="list-inline mb-0 ml-auto">
                      <li className="list-inline-item">
                        <a href={'mailto:' + intl.formatMessage({id: 'team.person.naomi.email'})}
                           target="_blank"
                           rel="noopener noreferrer">
                          <i className="fa fa-envelope fa-lg fa-fw"></i>
                          <span className="sr-only">
                          {intl.formatMessage({id: 'action.sendEmail'})}
                        </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.naomi.uni-www'})}
                          title={'https://univie.ac.at/' + intl.formatMessage({id: 'team.person.naomi.uni-www'})}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-university fa-lg fa-fw"></i>
                          <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                        </a>
                      </li>
                    </ul>
                  </Card.Footer>
                </details>
              </Markdown>
            </section>
            {/* IT Team */}
            <section id="developmentTeam">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({id: 'team.sectionDev'})}</h2>
              </Markdown>
              {/* Ingo Börner */}
              <details id="Ingo" className="list-group list-group-flush">
                <summary eventkey="4">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={ingoImg}
                      alt={intl.formatMessage({id: 'team.person.ingo.name'})}
                    />
                    <div className="lead my-auto">
                      <Markdown>{intl.formatMessage({id: 'team.person.ingo.textLead'})}</Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({id: 'team.person.ingo.textAbout'})}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({id: 'team.person.ingo.name'})}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({id: 'team.person.ingo.email'})}
                         target="_blank"
                         rel="noopener noreferrer">
                        <i className="fa fa-envelope fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.sendEmail'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href={intl.formatMessage({id: 'team.person.ingo.uni-www'})}
                         target="_blank"
                         title={intl.formatMessage({id: 'team.person.ingo.uni-www'})}
                         rel="noopener noreferrer">
                        <i className="fa fa-university fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.www'})}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              {/* Michael Litschauer */}
              <details id="Michael" className="list-group list-group-flush">
                <summary eventkey="5">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={michaelImg}
                      alt={intl.formatMessage({id: 'team.person.michael.name'})}
                    />
                    <div className="lead my-auto">
                      <Markdown>{intl.formatMessage({id: 'team.person.michael.textLead'})}</Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({id: 'team.person.michael.textAbout'})}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({id: 'team.person.michael.name'})}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={'mailto:' + intl.formatMessage({id: 'team.person.michael.email'})}
                         target="_blank"
                         rel="noopener noreferrer">
                        <i className="fa fa-envelope fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.sendEmail'})}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.michael.linkedIn'})}
                        title={'https://www.linkedin.com/in/' + intl.formatMessage({id: 'team.person.michael.linkedIn'})}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({id: 'action.linkedIn'})}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
            </section>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  )
}

export default Team
