import React from 'react'
import PropTypes from 'prop-types'

const ErrorPageContent = ({ children, title }) => (
  <div className="jumbo-notice owl">
    <h1>{title || 'Oops, we seem to be having an issue'}</h1>
    {children}
  </div>
)

ErrorPageContent.propTypes = {
  title: PropTypes.string
}

export default ErrorPageContent
