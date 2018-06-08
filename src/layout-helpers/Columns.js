import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const Columns = ({ children, className, center, gutterSize, gutters, split, stack }) => {
  // Add stack prop to children Column's
  children = React.Children.map(children, child => {
    // https://github.com/gatsbyjs/gatsby/issues/3486#issuecomment-364163889
    if (child.type !== Column && child.type !== <Column />.type) throw new Error('<Columns> can only have <Column> as a direct child')
    return React.cloneElement(child, { ...child.props, stack })
  })

  // When stack is enabled, we don't return traces of the columns div tags
  if (stack) return <Fragment>{children}</Fragment>

  return (
    <div className={classnames('columns', className, {
      'align-center': !!center,
      ['gutter-size-' + gutterSize]: gutterSize,
      'gutter-size-1': gutters,
      'split': !!split
    })}>
      {children}
    </div>
  )
}

Columns.defaultProps = {
  stack: false
}

Columns.propTypes = {
  center: PropTypes.bool,
  gutters: PropTypes.bool,
  split: PropTypes.bool
}

export const Column = ({ children, className, size, span, align, flex, display, stack }) => {
  if (!display) return null
  // When stack is enabled, we don't return traces of the columns div tags
  if (stack) return <Fragment>{children}</Fragment>

  return (
    <div className={classnames(className, {
      ['size-' + size]: size,
      ['span-' + span]: span,
      ['align-' + align]: align,
      flex: flex
    })}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  stack: false,
  display: true
}

Column.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  span: PropTypes.number,
  flex: PropTypes.bool,
  display: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'right', 'center'])
}
