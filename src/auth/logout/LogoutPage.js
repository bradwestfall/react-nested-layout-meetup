import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import api from 'api/all'
import LoadingResults from 'ui/LoadingResults'
import Icon from 'ui/Icon'

class LogoutPage extends React.Component {

  componentDidMount() {
    api.auth.logout()
  }

  render() {
    const { logged } = this.props
    return (
      <div className="primary-content-unauthorized">
        <h2>{logged ? 'Logging Out' : 'Logged Out'}</h2>
        {logged ? (
          <LoadingResults />
        ) : (
          <div className="owl">
            <div className="icon-text"><Icon icon="check" color="green"/><span>You are successfully logged out.</span></div>
            <div><Link className="button" to="/auth/login">Login Page</Link></div>
          </div>
        )}
      </div>
    )
  }

}

const stateToProps = ({ loggedUserState }) => ({ logged: loggedUserState.logged })

export default connect(stateToProps)(LogoutPage)
