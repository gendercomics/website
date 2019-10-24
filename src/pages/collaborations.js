import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import { Container, Nav, Card, Jumbotron, Row, Col, Accordion } from "react-bootstrap"
import fliedlImg from '@assets/board/konstanze-fliedl.png'
import feuchtenbergerImg from '@assets/board/anke-feuchtenberger.png'
import frahmImg from '@assets/comic-book.png'
import nijdamImg from '@assets/board/elizabeth-nijdam.png'
import akaImg from '@assets/institution/aka.png'
import genderagencyImg from '@assets/comic-book.png'
import nextcomicImg from '@assets/institution/nextcomic.png'
import gsaImg from '@assets/comic-book.png'
import feministcomicImg from '@assets/comic-book.png'
import avantImg from '@assets/publisher/avant_logo.png'
import carlsemImg from '@assets/publisher/Carlsen_Logo.jpg'
import editionmoderneImg from '@assets/publisher/edition-moderne-logo.png'
import luftschachtImg from '@assets/publisher/luftschacht-logo.png'
import reproduktImg from '@assets/publisher/reprodukt_logo.jpg'

const Team = ({ intl }) => {
  return (
    <PageTemplate title={intl.formatMessage({ id: 'collaborations.title' })}>
      <Jumbotron>
        <Container>
          <Markdown>
            <h1 className="display-1">{intl.formatMessage({ id: 'collaborations.title' })}</h1>
          </Markdown>
          <div className="lead">
            <Markdown>
              {intl.formatMessage({ id: 'collaborations.textLead' })}
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
                  to="advisoryBoard"
                  href="#advisoryBoard"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({ id: 'collaborations.sectionBoard' })}</strong>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="fliedl"
                      href="#fliedl"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.person.fliedl.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="feuchtenberger"
                      href="#feuchtenberger"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.person.feuchtenberger.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="frahm"
                      href="#frahm"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.person.frahm.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="nijdam"
                      href="#nijdam"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.person.nijdam.name' })}
                    </Link>
                  </li>
                </ul>
                <Link
                  to="institutions"
                  href="#institutions"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({ id: 'collaborations.sectionInstitutions' })}</strong>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="aka"
                      href="#aka"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.institution.aka.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="genderagency"
                      href="#genderagency"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.institution.genderagency.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="nextcomic"
                      href="#nextcomic"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.institution.nextcomic.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="gsa"
                      href="#gsa"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.institution.gsa.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="feministcomic"
                      href="#feministcomic"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.institution.feministcomic.name' })}
                    </Link>
                  </li>
                </ul>
                <Link
                  to="publishers"
                  href="#publishers"
                  className="nav-link"
                  smooth={true}
                  offset={-80}
                  duration={300}
                  spy={true}
                  hashSpy={true}
                >
                  <strong>{intl.formatMessage({ id: 'collaborations.sectionPublishers' })}</strong>
                </Link>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="avant"
                      href="#avant"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.publisher.avant.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="carlsen"
                      href="#carlsen"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.publisher.carlsen.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="editionmoderne"
                      href="#editionmoderne"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.publisher.editionmoderne.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="luftschacht"
                      href="#luftschacht"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.publisher.luftschacht.name' })}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="reprodukt"
                      href="#reprodukt"
                      className="nav-link"
                      smooth={true}
                      offset={-80}
                      duration={300}
                      spy={true}
                      hashSpy={true}
                    >
                      {intl.formatMessage({ id: 'collaborations.publisher.reprodukt.name' })}
                    </Link>
                  </li>
                </ul>
              </Nav>
            </div>
          </Col>
          {/* Advisory Board */}
          <Col xs="12" lg="9" className="mx-auto">
            <section id="advisoryBoard">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({ id: 'collaborations.sectionBoard' })}</h2>
              </Markdown>
              {/* Konstanze Fliedl */}
              <details id="fliedl" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex">
                  <img
                    className="img-fluid image__person rounded-circle mr-3"
                    src={fliedlImg}
                    alt={intl.formatMessage({ id: 'collaborations.person.fliedl.name' })}
                    />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'collaborations.person.fliedl.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({ id: 'collaborations.person.fliedl.textAbout' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.person.fliedl.name' })}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={intl.formatMessage({id: 'collaborations.person.fliedl.uni-www'})}
                         target="_blank"
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
              {/* Anke Feuchtenberger */}
              <details id="feuchtenberger" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="1">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={feuchtenbergerImg}
                    alt={intl.formatMessage({ id: 'collaborations.person.feuchtenberger.name' })}
                  />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'collaborations.person.feuchtenberger.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({ id: 'collaborations.person.feuchtenberger.textAbout' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.person.feuchtenberger.name' })}</span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a href={intl.formatMessage({id: 'collaborations.person.feuchtenberger.uni-www'})}
                         target="_blank"
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
              {/* Ole Frahm */}
              <details id="frahm" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={frahmImg}
                    alt={intl.formatMessage({ id: 'collaborations.person.frahm.name' })}
                    />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'collaborations.person.frahm.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({ id: 'collaborations.person.frahm.textAbout' })}</Markdown>
                </Card.Body>
              </details>
              {/* Elizabeth “Biz” Nijdam */}
              <details id="nijdam" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={nijdamImg}
                    alt={intl.formatMessage({ id: 'collaborations.person.nijdam.name' })}
                  />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'collaborations.person.nijdam.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Body>
                  <Markdown>{intl.formatMessage({ id: 'collaborations.person.nijdam.textAbout' })}</Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.person.nijdam.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a href={intl.formatMessage({ id: 'collaborations.person.nijdam.academia' })}
                         target="_blank"
                         rel="noopener noreferrer">
                        <i className="fa fa-graduation-cap fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.academia' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
            </section>
            {/* ------------------------- */}
            {/* Institutions and Projects */}
            {/* ------------------------- */}
            <section id="developmentTeam" className="mt-4">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({ id: 'collaborations.sectionInstitutions' })}</h2>
              </Markdown>
              {/* aka */}
              <details id="aka" className="list-group list-group-flush">
                <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                  <img
                    className="img-fluid image__person rounded-circle mr-3 float-left"
                    src={akaImg}
                    alt={intl.formatMessage({ id: 'collaborations.institution.aka.name' })}
                  />
                  <p className="lead my-auto">
                    <Markdown>{intl.formatMessage({ id: 'collaborations.institution.aka.textLead' })}</Markdown>
                  </p>
                </summary>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.institution.aka.name' })}</span>
                  <ul class="list-inline mb-0 ml-auto">
                    <li class="list-inline-item">
                      <a
                        href={intl.formatMessage({ id: 'collaborations.institution.aka.www' })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: 'action.www' })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
            </section>
            {/* Research Network Gender and Agency */}
            <details id="genderagency" className="list-group list-group-flush">
              <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                <img
                  className="img-fluid image__person rounded-circle mr-3 float-left"
                  src={genderagencyImg}
                  alt={intl.formatMessage({ id: 'collaborations.institution.genderagency.name' })}
                />
                <p className="lead my-auto">
                  <Markdown>{intl.formatMessage({ id: 'collaborations.institution.genderagency.textLead' })}</Markdown>
                </p>
              </summary>
              <Card.Footer className="d-flex">
                <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.institution.genderagency.name' })}</span>
                <ul class="list-inline mb-0 ml-auto">
                  <li class="list-inline-item">
                    <a
                      href={intl.formatMessage({ id: 'collaborations.institution.genderagency.www' })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                      <span className="sr-only">
                          {intl.formatMessage({ id: 'action.www' })}
                        </span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </details>
            {/* Nextcomic-Festival */}
            <details id="nextcomic" className="list-group list-group-flush">
              <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                <img
                  className="img-fluid image__person rounded-circle mr-3 float-left"
                  src={nextcomicImg}
                  alt={intl.formatMessage({ id: 'collaborations.institution.nextcomic.name' })}
                />
                <p className="lead my-auto">
                  <Markdown>{intl.formatMessage({ id: 'collaborations.institution.nextcomic.textLead' })}</Markdown>
                </p>
              </summary>
              <Card.Footer className="d-flex">
                <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.institution.nextcomic.name' })}</span>
                <ul class="list-inline mb-0 ml-auto">
                  <li class="list-inline-item">
                    <a
                      href={intl.formatMessage({ id: 'collaborations.institution.nextcomic.www' })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                      <span className="sr-only">
                          {intl.formatMessage({ id: 'action.www' })}
                        </span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </details>
            {/* GSA */}
            <details id="gsa" className="list-group list-group-flush">
              <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                <img
                  className="img-fluid image__person rounded-circle mr-3 float-left"
                  src={gsaImg}
                  alt={intl.formatMessage({ id: 'collaborations.institution.gsa.name' })}
                />
                <p className="lead my-auto">
                  <Markdown>{intl.formatMessage({ id: 'collaborations.institution.gsa.textLead' })}</Markdown>
                </p>
              </summary>
              <Card.Footer className="d-flex">
                <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.institution.gsa.name' })}</span>
                <ul class="list-inline mb-0 ml-auto">
                  <li class="list-inline-item">
                    <a
                      href={intl.formatMessage({ id: 'collaborations.institution.gsa.www' })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                      <span className="sr-only">
                          {intl.formatMessage({ id: 'action.www' })}
                        </span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </details>
            {/* Research project A Multidisciplinary Study of Feminist Comic Art */}
            <details id="feministcomic" className="list-group list-group-flush">
              <summary className="list-group-item list-group-item-action d-flex" eventKey="2">
                <img
                  className="img-fluid image__person rounded-circle mr-3 float-left"
                  src={feministcomicImg}
                  alt={intl.formatMessage({ id: 'collaborations.institution.feministcomic.name' })}
                />
                <p className="lead my-auto">
                  <Markdown>{intl.formatMessage({ id: 'collaborations.institution.feministcomic.textLead' })}</Markdown>
                </p>
              </summary>
              <Card.Footer className="d-flex">
                <span className="text-muted small">{intl.formatMessage({ id: 'collaborations.institution.feministcomic.name' })}</span>
                <ul class="list-inline mb-0 ml-auto">
                  <li class="list-inline-item">
                    <a
                      href={intl.formatMessage({ id: 'collaborations.institution.feministcomic.www' })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link-square fa-lg fa-fw"></i>
                      <span className="sr-only">
                          {intl.formatMessage({ id: 'action.www' })}
                        </span>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </details>
            {/* ------------------------------ */}
            {/* Collaborations with Publishers */}
            {/* ------------------------------ */}
            <section id="advisoryBoard" className="mt-4">
              <Markdown>
                <h2 className="mb-3">{intl.formatMessage({ id: 'collaborations.sectionPublishers' })}</h2>
              </Markdown>
              {/* avant-verlag */}
              <div id="avant" className="list-group list-group-flush">
                <div className="list-group-item d-flex">
                  <a
                    href={intl.formatMessage({id: 'collaborations.publisher.avant.www'})}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="float-left"
                      src={avantImg}
                      alt={intl.formatMessage({ id: 'collaborations.publisher.avant.name' })}
                      height="50"
                    />
                  </a>
                </div>
              </div>
              {/* Carlsen */}
              <div id="carlsen" className="list-group list-group-flush">
                <div className="list-group-item d-flex">
                  <a
                    href={intl.formatMessage({id: 'collaborations.publisher.carlsen.www'})}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="float-left"
                      src={carlsemImg}
                      alt={intl.formatMessage({ id: 'collaborations.publisher.carlsen.name' })}
                      height="50"
                    />
                  </a>
                </div>
              </div>
              {/* Edition Moderne */}
              <div id="editionmoderne" className="list-group list-group-flush">
                <div className="list-group-item d-flex">
                  <a
                    href={intl.formatMessage({id: 'collaborations.publisher.editionmoderne.www'})}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="float-left"
                      src={editionmoderneImg}
                      alt={intl.formatMessage({ id: 'collaborations.publisher.editionmoderne.name' })}
                      height="50"
                    />
                  </a>
                </div>
              </div>
              {/* Luftschacht */}
              <div id="luftschacht" className="list-group list-group-flush">
                <div className="list-group-item d-flex">
                  <a
                    href={intl.formatMessage({id: 'collaborations.publisher.luftschacht.www'})}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="float-left"
                      src={luftschachtImg}
                      alt={intl.formatMessage({ id: 'collaborations.publisher.luftschacht.name' })}
                      height="50"
                    />
                  </a>
                </div>
              </div>
              {/* Reprodukt */}
              <div id="reprodukt" className="list-group list-group-flush">
                <div className="list-group-item d-flex">
                  <a
                    href={intl.formatMessage({id: 'collaborations.publisher.reprodukt.www'})}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="float-left"
                      src={reproduktImg}
                      alt={intl.formatMessage({ id: 'collaborations.publisher.reprodukt.name' })}
                      height="50"
                    />
                  </a>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  )
}

export default injectIntl(Team)