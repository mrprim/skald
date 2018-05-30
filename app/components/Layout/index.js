import React from 'react'
import Display from '../../containers/Display'
import Control from '../../containers/Control'
import './index.scss'

const Layout = ({ type, children }) => {
  return (
    <div>
      <Display />
      <Control />
    </div>
  )
}

export default Layout
