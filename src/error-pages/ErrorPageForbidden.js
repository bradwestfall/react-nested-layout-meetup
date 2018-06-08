import React from 'react'
import ErrorPageContent from 'ui/ErrorPageContent'

const ErrorPageForbidden = () => (
  <main>
    <ErrorPageContent title="Not Allowed">
      <p>Sorry, you don't have access to this content</p>
    </ErrorPageContent>
  </main>
)

export default ErrorPageForbidden
