import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import withErrorBoundary from 'utils/withErrorBoundary'
import Panel from 'layout-helpers/Panel'

// Error Pages
import ErrorPageForbidden from 'error-pages/ErrorPageForbidden'
import ErrorPageNotFound from 'error-pages/ErrorPageNotFound'
import ErrorPageGeneric from 'error-pages/ErrorPageGeneric'

// Section Layouts
import QuestionsSectionLayout from 'questions/QuestionsSectionLayout'

// Stub
const Stub = () => <div>stub</div>

const renderErrorPage = (message, status) => {
  switch (parseInt(status)) {
    case 403: return <ErrorPageForbidden />
    case 404: return <ErrorPageNotFound />
    default: return <ErrorPageGeneric message={message}/>
  }
}

const AppSubLayout = ({ match, networkErrorMessage, networkErrorStatus, renderError }) => (
  <Fragment>
    <Panel className="context-header">
      <nav className="primary-nav">
        <NavLink to="/tests" className="primary-nav-item" activeClassName="active">Tests</NavLink>
        <NavLink to="/questions" className="primary-nav-item" activeClassName="active">Questions</NavLink>
      </nav>
    </Panel>
    <Panel className="primary-content">
      {renderError && renderErrorPage(renderError)}
      {networkErrorStatus && renderErrorPage(networkErrorMessage, networkErrorStatus)}

      {/*
        Prevents views from being rendered if throwNetworkError was called or an error
        that triggered the errorBoundary.
      */}
      {!renderError && !networkErrorStatus && !renderError && (
        <Switch>
          <Route path="/tests" exact component={Stub} />
          <Route path="/questions" component={QuestionsSectionLayout} />
          <Redirect to={`${match.url}/tests`} />
        </Switch>
      )}
    </Panel>
  </Fragment>
)

const stateToProps = ({ networkErrorState }) => ({
  networkErrorMessage: networkErrorState.errorMessage,
  networkErrorStatus: networkErrorState.errorStatus
})

export default connect(stateToProps)(withErrorBoundary(AppSubLayout))
