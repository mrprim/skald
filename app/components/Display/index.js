import React from 'react'
import './index.scss'

const Display = ({ messages }) => {
  return (
    <div>
      {messages.map((message, i) => <Message key={i} message={message} />)}
    </div>
  )
}

const Message = ({ message }) => {
  if (typeof message === 'string') {
    return <div>{message}</div>
  }

  return <div><Prefix {...message} />{message.body}</div>
}

const Prefix = ({ character }) => character === 'player' ? <span>> </span> : null

export default Display
