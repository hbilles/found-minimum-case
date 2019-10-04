import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'found'

class Requests extends React.PureComponent {
  renderIndex = () => {
    const { isMobile } = this.props

    return (
      <div>
        <h1>This is the index view</h1>
        <p>Is Mobile: {isMobile.toString()}</p>
        <ul>
          <li>
            <Link to="/requests/payment/1">Payment Detail</Link>
          </li>
          <li>
            <Link to="/requests/request/2">Request Detail</Link>
          </li>
        </ul>
      </div>
    )
  }

  render = () => {
    const { children } = this.props

    if (children) {
      return (
        <div className="requests__detail">
          {children}
        </div>
      )
    }

    return this.renderIndex()
  }
}

Requests.propTypes = {
  isMobile: PropTypes.bool.isRequired,
}

export default Requests
