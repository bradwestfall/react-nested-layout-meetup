import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'
import api from 'api/all'
import { throwNetworkError } from 'state/networkErrorState'

class AuthorizedRoute extends React.Component {

  componentDidMount() {
    // It's possible that the first time this component mounts, we're coming from the login
    // which already established the state for the logged user. No need to send that request again
    const getLoggedUser = this.props.logged === null ? api.auth.getLoggedUser() : Promise.resolve()
    getLoggedUser.catch(throwNetworkError)
  }

  render() {
    const { component: Component, logged, ...rest } = this.props

    return (
      <Route {...rest} render={props => {
        if (logged === null) return <div>Loading...</div>
        if (logged === false) {
          const query = queryString.stringify({ next: props.location.pathname + props.location.search })
          return <Redirect to={`/auth/login?${query}`} />
        }
        // Continue to page
        return <Component {...props} />
      }} />
    )
  }

}

const stateToProps = ({ loggedUserState }) => ({
  logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)
