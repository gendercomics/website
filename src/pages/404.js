import React from "react"
import { Link } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import PageTemplate from '@templates/pageTemplate'
import { Jumbotron, Container, Row, Col } from "react-bootstrap"
import ErrorImg from '@assets/404.png'

const ErrorPage = ({ intl }) => {
    return (
      <PageTemplate title={intl.formatMessage({ id: 'header.title' })}>
        <Jumbotron>
          <Container>
            <Row className="align-items-center">
              <Col md={6} className="order-md-2">
                <h1 className="display-1"><FormattedMessage id="error.title" /></h1>
                <p className="lead mt-4"><FormattedMessage id="error.text" /></p>
                <Link to="/"><FormattedMessage id="error.action" /></Link>
              </Col>
              <Col md={6} order="2" className="order-md-1">
                <img className="img-fluid mb-4" src={ErrorImg} alt="Error 404" />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </PageTemplate>
    )
  }
export default injectIntl(ErrorPage)
