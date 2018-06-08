import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

const Stub = () => <div>stub</div>

const QuestionsSectionLayout = ({ match }) => (
  <div className="section-layout">
    <main>

      <h1>Questions</h1>

      <div className="nav-link-tabs">
        {/* use match.url for making hrefs */}
        <NavLink exact to={match.url}>Browse</NavLink>
        <NavLink exact to={`${match.url}/tags`}>Tags</NavLink>
      </div>

      <Switch>
        <Route path={match.url} exact component={Stub} />
        {/* Dont use match.url for building routes, use match.path */}
        {/* <Route path={`${match.url}/tags`} exact component={Stub} /> */}
        <Route path={`${match.path}/tags`} exact component={Stub} />

        <Redirect to={match.url} />
      </Switch>

    </main>
    <aside>
      Questions Side Bar
    </aside>
  </div>
)

export default QuestionsSectionLayout