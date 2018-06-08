import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from 'auth/login/LoginPage'
import LogoutPage from 'auth/logout/LogoutPage'
import Logo from 'ui/Logo'

const UnauthorizedLayout = ({ match }) => {
  return (
    <div className="app unauthorized">
      <Logo theme="white" />
      <main>
        <Switch>
          <Route exact path={`${match.path}/login`} component={LoginPage} />
          <Route exact path={`${match.path}/logout`} component={LogoutPage} />
          <Redirect to={`${match.url}/login`} />
        </Switch>
      </main>
    </div>
  )
}

export default UnauthorizedLayout
