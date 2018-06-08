import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import Panel from 'layout-helpers/Panel'
import { Columns, Column } from 'layout-helpers/Columns'
import Icon from 'ui/Icon'

// Stub
const Stub = () => <div>stub</div>

const AccountSubLayout = ({ match }) => (
  <div>
    <Panel className="context-header">
      <Columns split gutters>
        <Column>
          <nav className="primary-nav">
            <NavLink to="/account" exact className="primary-nav-item" activeClassName="active">Account</NavLink>
            <NavLink to="/account/credentials" className="primary-nav-item" activeClassName="active">Login Info</NavLink>
            <NavLink to="/account/credits" className="primary-nav-item" activeClassName="active">Credits</NavLink>
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
      <Switch>
        <Route exact path={match.path} component={Stub} />
        <Route exact path={`${match.path}/credentials`} component={Stub} />
        <Route exact path={`${match.path}/credits`} component={Stub} />
        <Redirect to={match.url} />
      </Switch>
    </Panel>
  </div>
)

export default AccountSubLayout
