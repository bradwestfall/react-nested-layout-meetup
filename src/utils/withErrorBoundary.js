import React from 'react'

const withErrorBoundary = Component => {
  return class ErrorBoundary extends React.Component {

    constructor(props) {
      super(props)
      this.state = { error: null }
    }

    componentDidCatch(error) {
      this.setState({ error: error.message })
    }

    render() {
      if (this.state.error !== null) return <Component {...this.props} renderError={this.state.error} />
      return <Component {...this.props} />
    }

  }
}

export default withErrorBoundary
