import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import { Container, Card, CardDeck, Jumbotron, Row, Col } from "react-bootstrap"

const Project = ({ intl }) => {
  return (
    <PageTemplate title={intl.formatMessage({ id: 'project.title' })}>
      <Jumbotron>
        <Container>
          <Markdown>
            <h1 className="display-1">{intl.formatMessage({ id: 'project.title' })}</h1>
          </Markdown>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <Markdown>
              {intl.formatMessage({ id: 'project.text' })}
            </Markdown>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  )
}

export default injectIntl(Project)
