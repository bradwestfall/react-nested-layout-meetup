import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import store from './store'
import Router from 'utils/Router'
import ScrollToTop from 'utils/ScrollToTop'
import AuthorizedRoute from 'utils/AuthorizedRoute'
import UnauthorizedLayout from 'layouts/UnauthorizedLayout'
import AuthorizedLayout from 'layouts/AuthorizedLayout'

// // Site Down
// import MessagePage from 'shared/ui/MessagePage'
// const SiteDownMessage = () => <MessagePage message="Our site is currently unavailable. We sincerely appologize. Please check back again soon." />

const App = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Switch>
          {/* process.env.REACT_APP_SITE_DOWN === 'true' && <Route path="/" component={SiteDownMessage} /> */}
          <Route path="/auth" component={UnauthorizedLayout} />
          <AuthorizedRoute path="/account" component={AuthorizedLayout} />
          <AuthorizedRoute path="/admin" component={AuthorizedLayout} />
          <AuthorizedRoute path="/tests" component={AuthorizedLayout} />
          <AuthorizedRoute path="/questions" component={AuthorizedLayout} />
          <Redirect from="/" to="tests" />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
)

// Render React to DOM
ReactDOM.render(<App />, document.getElementById('root'))
