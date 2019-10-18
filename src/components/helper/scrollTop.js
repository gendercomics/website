import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import { animateScroll as scroll } from 'react-scroll'

class ScrollTop extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop({
      duration: 300,
      delay: 0
    });
  }
  render() {
    const { intl } = this.props
    return (
      <a href="#" onClick={this.scrollToTop} className="nav-link p-1">
        {intl.formatMessage({ id: 'navigation.top' })}
      </a>
    )
  }
}

export default injectIntl(ScrollTop)
