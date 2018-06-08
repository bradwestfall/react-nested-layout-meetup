import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Icon from './Icon'

const Button = props => {
  const { type, icon, iconColor, onClick, className, ...rest } = props
  const children = props.children
    ? (icon ? <span>{props.children}</span> : props.children)
    : null

  return (
    <button
      {...rest}
      onClick={onClick}
      type={type || 'button'}
      className={classnames(className, { 'icon-text': icon })}>
      {icon && <Icon icon={icon} color={iconColor} />}
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
}

export default Button
