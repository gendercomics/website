import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'
import CustomNavbar from '@components/block/navbar'
import Footer from '@components/block/footer'
import SEO from '@components/helper/seo'

import 'modern-normalize/modern-normalize.css'
import '../scss/styles.scss'
import 'font-awesome/css/font-awesome.css'

export default function PageTemplate({
  title,
  children,
  location,
}) {
  const pageTitle = title ? `${title} - GenderComics` : 'GenderComics'
  return (
    <React.Fragment>
      <Location>
        {({ navigate, location }) => (
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
