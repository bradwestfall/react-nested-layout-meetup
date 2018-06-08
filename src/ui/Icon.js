import { createElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import * as Icons from 'glob:../icons/*.svg'

const Icon = ({ className, icon, color, size }) => {
  className = classnames('icon', icon, { [`color-${color}`]: !!color, [`size-${size}`]: size }, className)
  const comp = Icons[_.camelCase(icon)]

  // Get the correct icon from this array of functions
  return comp ? createElement(comp, { className }) : null
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'green', 'blue', 'gray', 'white']),
  size: PropTypes.number,
}

export default Icon
