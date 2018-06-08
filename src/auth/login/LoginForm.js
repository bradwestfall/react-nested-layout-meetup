import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import api from 'api/all'
import Button from 'ui/Button'

class LoginForm extends React.Component {
  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    const { history } = this.props
    api.auth.login().then(() => {
      history.push('/')
    })
  }

  render() {
    return (
      <Fragment>
        <Button className="button" onClick={this.onSubmit}>Login</Button>
      </Fragment>
    )
  }

}

export default withRouter(LoginForm)
