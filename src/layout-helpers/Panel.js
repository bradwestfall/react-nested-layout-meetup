import React from 'react'
import classnames from 'classnames'

const Panel = ({ className, children }) => (
  <div className={classnames('panel', className)}>
    <div>
      {children}
    </div>
  </div>
)

export default Panel
