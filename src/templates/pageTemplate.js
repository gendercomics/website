import React from 'react'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'
import CustomNavbar from '@components/block/navbar'
import Footer from '@components/block/footer'
import SEO from '@components/helper/seo'
import { useSpring, animated } from 'react-spring'

import 'modern-normalize/modern-normalize.css'
import '../scss/styles.scss'
import 'font-awesome/css/font-awesome.css'

const calc = (x, y) => [x - window.innerWidth / 10, y - window.innerHeight / 8]
const trans = (x, y) => `translate3d(${x / 80}px,${y / 100}px,0)`

export default function PageTemplate({
  title,
  children,
  location,
}) {
  const pageTitle = title ? `${title} - gendercomics` : 'gendercomics'
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 2, tension: 190, friction: 32 } }))
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
      <div className="brand">
        <animated.div className="pupil" style={{ transform: props.xy.interpolate(trans) }} />
        <animated.div className="eye" />
      </div>
      <main onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

PageTemplate.defaultProps = {
  useCustomStructure: false,
}
