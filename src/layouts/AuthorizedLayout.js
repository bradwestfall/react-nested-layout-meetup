import React from 'react'
import classnames from 'classnames'
import { Switch, Route } from 'react-router-dom'
import PrimaryHeader from 'ui/PrimaryHeader'
import { clearNetworkError } from 'state/networkErrorState'
import { LightboxProvider } from 'utils/LightboxController'

// Sub Layouts (For Context Headers)
import AdminSubLayout from 'layouts/AdminSubLayout'
import AppSubLayout from 'layouts/AppSubLayout'
import AccountSubLayout from 'layouts/AccountSubLayout'

class AuthorizedLayout extends React.Component {

  // When there's a network error, the networkErrorState (redux) sets
  // a flag that will prevent using the app if some layouts show error
  // messages when the flag is set. So this method ensures that new
  // navigation will unset the flag
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      clearNetworkError()
    }
  }

  render() {
    return (
      <LightboxProvider render={lightboxOpen => (
        <div className={classnames('app', { 'lightbox-open': lightboxOpen })}>
          <PrimaryHeader />
          <Switch>
            <Route path="/account" component={AccountSubLayout} />
            <Route path="/admin" component={AdminSubLayout} />
            <Route path="/tests" component={AppSubLayout} />
            <Route path="/questions" component={AppSubLayout} />
          </Switch>
        </div>
      )} />
    )
  }
}

export default AuthorizedLayout
