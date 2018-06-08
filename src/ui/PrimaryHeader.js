import React from 'react'
import { Link } from 'react-router-dom'
import Panel from 'layout-helpers/Panel'
import Logo from 'ui/Logo'

const PrimaryHeader = () => (
  <Panel className="primary-header">
    <Link to="/"><Logo /></Link>
  </Panel>
)

export default PrimaryHeader
