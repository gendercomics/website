import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'
import { injectIntl } from 'gatsby-plugin-intl'
import CustomNavbar from '@components/block/navbar'
import Footer from '@components/block/footer'
import SEO from '@components/helper/seo'

import 'modern-normalize/modern-normalize.css'
import '../scss/styles.scss'
import 'font-awesome/css/font-awesome.css'

const PageTemplate = ({ title, location, children }) => {
  const pageTitle = `${title}`
  return (
    <React.Fragment>
      <Location>
        {({ location, intl }) => (
          <SEO
            title={pageTitle}
            description={pageTitle}
            url={location.pathname}
          />
        )}
      </Location>
      <Helmet title={pageTitle} />
      <CustomNavbar />
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

PageTemplate.defaultProps = {
  useCustomStructure: false,
}

export default injectIntl(PageTemplate)
