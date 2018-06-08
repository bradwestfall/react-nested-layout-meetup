import React from 'react'
import ErrorPageContent from 'ui/ErrorPageContent'

const ErrorPageGeneric = ({ message }) => (
  <main>
    <ErrorPageContent title="Oops, we seem to be having an issue. We will try to get this fixed as soon as possible.">
      {message && <p>{message}</p>}
    </ErrorPageContent>
  </main>
)

export default ErrorPageGeneric
