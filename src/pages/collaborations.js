import React from "react";
import { Link } from "react-scroll";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";
import Markdown from "react-remarkable";
import PageTemplate from "@templates/pageTemplate";
import {
  Card,
  CardDeck,
  Col,
  Container,
  Jumbotron,
  Nav,
  Row
} from "react-bootstrap";
import SEO from "@components/helper/seo";

import fliedlImg from "@assets/board/konstanze-fliedl.png";
import feuchtenbergerImg from "@assets/board/anke-feuchtenberger.png";
import frahmImg from "@assets/board/ole-frahm.jpg";
import nijdamImg from "@assets/board/elizabeth-nijdam.png";
import avantImg from "@assets/publisher/avant-logo.jpg";
import carlsenImg from "@assets/publisher/carlsen-logo.jpg";
import editionmoderneImg from "@assets/publisher/edition-moderne-logo.jpg";
import luftschachtImg from "@assets/publisher/luftschacht-logo.jpg";
import reproduktImg from "@assets/publisher/reprodukt-logo.jpg";
import nextcomicImg from "@assets/institution/nextcomic-logo.png";
import genderagencyImg from "@assets/institution/GandA-logo.jpg";
import akaImg from "@assets/institution/aka.png";
import feministcomicImg from "@assets/comic-book.png";
import gsaImg from "@assets/comic-book.png";
import meduniViennaImg from "@assets/comic-book.png";

const Collaborations = () => {
  const intl = useIntl();
  return (
    <PageTemplate>
      <SEO
        lang={intl.locale}
        title={`${intl.formatMessage({ id: "collaborations.title" })}`}
      />
      <Jumbotron>
        <Container>
          <Markdown>
            <h1 className="display-1">
              {intl.formatMessage({ id: "collaborations.title" })}
            </h1>
          </Markdown>
          <div className="lead">
            <Markdown>
              {intl.formatMessage({ id: "collaborations.textLead" })}
            </Markdown>
          </div>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col as="aside" xs="12" lg="3" className="aside mb-4">
            <div className="sticky--aside">
              <h4 className="h4 mb-4">
                <FormattedMessage id="navigation.toc" />
              </h4>
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
                  <strong>
                    {intl.formatMessage({ id: "collaborations.sectionBoard" })}
                  </strong>
                </Link>
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
                  <strong>
                    {intl.formatMessage({
                      id: "collaborations.sectionInstitutions"
                    })}
                  </strong>
                </Link>

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
                  <strong>
                    {intl.formatMessage({
                      id: "collaborations.sectionPublishers"
                    })}
                  </strong>
                </Link>
              </Nav>
            </div>
          </Col>
          <Col xs="12" lg="9" className="mx-auto">
            {/* Advisory Board */}
            <section id="advisoryBoard">
              <Markdown>
                <h2 className="mb-3">
                  {intl.formatMessage({ id: "collaborations.sectionBoard" })}
                </h2>
              </Markdown>
              {/* Anke Feuchtenberger */}
              <details
                id="feuchtenberger"
                className="list-group list-group-flush"
              >
                <summary eventkey="2">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={feuchtenbergerImg}
                      alt={intl.formatMessage({
                        id: "collaborations.person.feuchtenberger.name"
                      })}
                    />
                    <div className="lead my-auto">
                      <Markdown>
                        {intl.formatMessage({
                          id: "collaborations.person.feuchtenberger.textLead"
                        })}
                      </Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>
                    {intl.formatMessage({
                      id: "collaborations.person.feuchtenberger.textAbout"
                    })}
                  </Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">
                    {intl.formatMessage({
                      id: "collaborations.person.feuchtenberger.name"
                    })}
                  </span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({
                          id: "collaborations.person.feuchtenberger.uni-www"
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-university fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: "action.www" })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              {/* Konstanze Fliedl */}
              <details id="fliedl" className="list-group list-group-flush">
                <summary eventkey="1">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3"
                      src={fliedlImg}
                      alt={intl.formatMessage({
                        id: "collaborations.person.fliedl.name"
                      })}
                    />
                    <div className="lead my-auto">
                      <Markdown>
                        {intl.formatMessage({
                          id: "collaborations.person.fliedl.textLead"
                        })}
                      </Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>
                    {intl.formatMessage({
                      id: "collaborations.person.fliedl.textAbout"
                    })}
                  </Markdown>
                </Card.Body>
                <Card.Footer className="d-flex align-items-center">
                  <span className="text-muted small">
                    {intl.formatMessage({
                      id: "collaborations.person.fliedl.name"
                    })}
                  </span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({
                          id: "collaborations.person.fliedl.uni-www"
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-university fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: "action.www" })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              {/* Ole Frahm */}
              <details id="frahm" className="list-group list-group-flush">
                <summary eventkey="3">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={frahmImg}
                      alt={intl.formatMessage({
                        id: "collaborations.person.frahm.name"
                      })}
                    />
                    <div className="lead my-auto">
                      <Markdown>
                        {intl.formatMessage({
                          id: "collaborations.person.frahm.textLead"
                        })}
                      </Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>
                    {intl.formatMessage({
                      id: "collaborations.person.frahm.textAbout"
                    })}
                  </Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">
                    {intl.formatMessage({
                      id: "collaborations.person.frahm.name"
                    })}
                  </span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({
                          id: "collaborations.person.frahm.www.1"
                        })}
                        title={intl.formatMessage({
                          id: "collaborations.person.frahm.www.1"
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-globe fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: "action.www" })}
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({
                          id: "collaborations.person.frahm.www.2"
                        })}
                        title={intl.formatMessage({
                          id: "collaborations.person.frahm.www.2"
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-globe fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: "action.www" })}
                        </span>
                      </a>
                    </li>
                  </ul>
                </Card.Footer>
              </details>
              {/* Elizabeth “Biz” Nijdam */}
              <details id="nijdam" className="list-group list-group-flush">
                <summary eventkey="4">
                  <div className="list-group-item list-group-item-action d-flex">
                    <img
                      className="img-fluid image__person rounded-circle mr-3 float-left"
                      src={nijdamImg}
                      alt={intl.formatMessage({
                        id: "collaborations.person.nijdam.name"
                      })}
                    />
                    <div className="lead my-auto">
                      <Markdown>
                        {intl.formatMessage({
                          id: "collaborations.person.nijdam.textLead"
                        })}
                      </Markdown>
                    </div>
                  </div>
                </summary>
                <Card.Body>
                  <Markdown>
                    {intl.formatMessage({
                      id: "collaborations.person.nijdam.textAbout"
                    })}
                  </Markdown>
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span className="text-muted small">
                    {intl.formatMessage({
                      id: "collaborations.person.nijdam.name"
                    })}
                  </span>
                  <ul className="list-inline mb-0 ml-auto">
                    <li className="list-inline-item">
                      <a
                        href={intl.formatMessage({
                          id: "collaborations.person.nijdam.academia"
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-graduation-cap fa-lg fa-fw"></i>
                        <span className="sr-only">
                          {intl.formatMessage({ id: "action.academia" })}
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
            <section id="institutions">
              <Markdown>
                <h2 className="mb-3">
                  {intl.formatMessage({
                    id: "collaborations.sectionInstitutions"
                  })}
                </h2>
              </Markdown>
              <CardDeck>
                {/* feminist comic */}
                <a
                  id="feministcomic"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.institution.feministcomic.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={feministcomicImg}
                      alt={intl.formatMessage({
                        id: "collaborations.institution.feministcomic.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.institution.feministcomic.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                {/* aka */}
                <a
                  id="aka"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.institution.aka.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={akaImg}
                      alt={intl.formatMessage({
                        id: "collaborations.institution.aka.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.institution.aka.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                {/* contemporary-swedish-feminist-comics */}
                <a
                  id="contemporary-swedish-feminist-comics"
                  className="card"
                  href={intl.formatMessage({
                    id:
                      "collaborations.institution.contemporary-swedish-feminist-comics.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={akaImg}
                      alt={intl.formatMessage({
                        id:
                          "collaborations.institution.contemporary-swedish-feminist-comics.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id:
                          "collaborations.institution.contemporary-swedish-feminist-comics.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                {/* gender and agency */}
                <a
                  id="genderagency"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.institution.genderagency.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={genderagencyImg}
                      alt={intl.formatMessage({
                        id: "collaborations.institution.genderagency.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.institution.genderagency.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                {/* gsa */}
                <a
                  id="gsa"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.institution.gsa.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={gsaImg}
                      alt={intl.formatMessage({
                        id: "collaborations.institution.gsa.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.institution.gsa.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                {/* meduni wien -  */}
                <a
                  id="meduni-wien"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.institution.meduni-vienna.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={meduniViennaImg}
                      alt={intl.formatMessage({
                        id: "collaborations.institution.meduni-vienna.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.institution.meduni-vienna.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                {/* nextcomic festival */}
                <a
                  id="nextcomic"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.institution.nextcomic.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={nextcomicImg}
                      alt={intl.formatMessage({
                        id: "collaborations.institution.nextcomic.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.institution.nextcomic.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
              </CardDeck>
            </section>
            {/* ------------------------------ */}
            {/* Collaborations with Publishers */}
            {/* ------------------------------ */}
            <section id="publishers">
              <Markdown>
                <h2 className="mb-3">
                  {intl.formatMessage({
                    id: "collaborations.sectionPublishers"
                  })}
                </h2>
              </Markdown>
              <CardDeck>
                <a
                  id="avant"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.publisher.avant.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={avantImg}
                      alt={intl.formatMessage({
                        id: "collaborations.publisher.avant.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.publisher.avant.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                <a
                  id="carlsen"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.publisher.carlsen.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={carlsenImg}
                      alt={intl.formatMessage({
                        id: "collaborations.publisher.carlsen.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.publisher.carlsen.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                <a
                  id="editionmoderne"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.publisher.editionmoderne.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={editionmoderneImg}
                      alt={intl.formatMessage({
                        id: "collaborations.publisher.editionmoderne.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.publisher.editionmoderne.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                <a
                  id="luftschacht"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.publisher.luftschacht.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={luftschachtImg}
                      alt={intl.formatMessage({
                        id: "collaborations.publisher.luftschacht.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.publisher.luftschacht.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
                <a
                  id="reprodukt"
                  className="card"
                  href={intl.formatMessage({
                    id: "collaborations.publisher.reprodukt.www"
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={reproduktImg}
                      alt={intl.formatMessage({
                        id: "collaborations.publisher.reprodukt.name"
                      })}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted small">
                      {intl.formatMessage({
                        id: "collaborations.publisher.reprodukt.name"
                      })}
                    </span>
                  </Card.Footer>
                </a>
              </CardDeck>
            </section>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};

export default Collaborations;
