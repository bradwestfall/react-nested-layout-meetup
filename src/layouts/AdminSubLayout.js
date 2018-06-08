import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import withErrorBoundary from 'utils/withErrorBoundary'
import Panel from 'layout-helpers/Panel'
import { Columns, Column } from 'layout-helpers/Columns'
import Icon from 'ui/Icon'

// Stub
const Stub = () => <div>stub</div>

// Error Pages
import ErrorPageForbidden from 'error-pages/ErrorPageForbidden'
import ErrorPageNotFound from 'error-pages/ErrorPageNotFound'
import ErrorPageGeneric from 'error-pages/ErrorPageGeneric'

const renderErrorPage = (message, status) => {
  switch (parseInt(status)) {
    case 403: return <ErrorPageForbidden />
    case 404: return <ErrorPageNotFound />
    default: return <ErrorPageGeneric message={message}/>
  }
}

const AdminSubLayout = ({ match, networkErrorMessage, networkErrorStatus, renderError }) => (
  <div>
    <Panel className="context-header">
      <Columns split gutters>
        <Column>
          <nav className="primary-nav">
            <NavLink to="/admin/accounts" className="primary-nav-item" activeClassName="active">Accounts</NavLink>
            <NavLink to="/admin/users" className="primary-nav-item" activeClassName="active">Users</NavLink>
          </nav>
        </Column>
        <Column>
          <nav className="primary-nav">
            <span className="icon-text primary-nav-item">
              <Icon icon="back-arrow" color="blue" />
              <span><NavLink to="/tests">Back to Tests and Questions</NavLink></span>
            </span>
          </nav>
        </Column>
      </Columns>
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
          <Route path={`${match.path}/accounts`} exact component={Stub} />
          <Route path={`${match.path}/users`} exact component={Stub} />
          <Redirect to={`${match.url}/accounts`} />
        </Switch>
      )}
    </Panel>
  </div>
)

const stateToProps = ({ networkErrorState }) => ({
  networkErrorMessage: networkErrorState.errorMessage,
  networkErrorStatus: networkErrorState.errorStatus
})

export default connect(stateToProps)(withErrorBoundary(AdminSubLayout))
