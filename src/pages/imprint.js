import React from 'react'
import {useIntl} from 'gatsby-plugin-intl'
import Markdown from 'react-remarkable'
import PageTemplate from '@templates/pageTemplate'
import {Col, Container, Jumbotron, Row} from 'react-bootstrap'
import SEO from '@components/helper/seo'

const Imprint = () => {
  const intl = useIntl()
  return (
    <PageTemplate>
      <SEO
        lang={intl.locale}
        title={`${intl.formatMessage({id: 'imprint.title'})}`}
      />
      <Jumbotron>
        <Container>
          <h1 className="display-1">{intl.formatMessage({id: 'imprint.title'})}</h1>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col className="mx-auto">
            <section id="owner">
              <Markdown>
                {intl.formatMessage({id: 'imprint.textOwner'})}
              </Markdown>
            </section>
            <section id="links">
              <Markdown>
                {intl.formatMessage({id: 'imprint.textLinks'})}
              </Markdown>
            </section>
            <section id="editorial">
              <Markdown>
                {intl.formatMessage({id: 'imprint.textEditorial'})}
              </Markdown>
            </section>
            <section id="liability">
              <Markdown>
                {intl.formatMessage({id: 'imprint.textLiability'})}
              </Markdown>
            </section>
            <section id="dataprotection">
              <Markdown>
                {intl.formatMessage({id: 'imprint.textDataprotection'})}
              </Markdown>
            </section>
            <section id="copyright">
              <Markdown>
                {intl.formatMessage({id: 'imprint.textCopyright'})}
              </Markdown>
            </section>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  )
}

export default Imprint
