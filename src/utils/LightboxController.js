import React from 'react'

const LightboxContext = React.createContext()

export class LightboxProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      LightboxComponent: null
    }
    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
  }

  openLightbox(LightboxComponent) {
    this.setState({ LightboxComponent })
  }

  closeLightbox() {
    this.setState({ LightboxComponent: null })
  }

  render() {
    const contextValue = {
      openLightbox: this.openLightbox,
      closeLightbox: this.closeLightbox
    }

    const Lightbox = this.state.LightboxComponent
      // Pass `onClose` if one wasn't provided
      ? React.cloneElement(this.state.LightboxComponent, Object.assign({ onClose: this.closeLightbox }, this.state.LightboxComponent.props))
      : null

    return (
      <LightboxContext.Provider value={contextValue}>
        {Lightbox}
        {this.props.render(Lightbox !== null)}
      </LightboxContext.Provider>
    )
  }
}

export const withLightboxes = Component => {
  return class WithLightboxsHoc extends React.Component {
    render() {
      return (
        <LightboxContext.Consumer>
          {({ openLightbox, closeLightbox }) => (
            <Component {...this.props} openLightbox={openLightbox} closeLightbox={closeLightbox} />
          )}
        </LightboxContext.Consumer>
      )
    }
  }
}
