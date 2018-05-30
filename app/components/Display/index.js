import React from 'react'
import './index.scss'

const Display = ({ commands }) => {
  return (
    <div>
      {commands.map(command => <div>{command}</div>)}
    </div>
  )
}

export default Display
