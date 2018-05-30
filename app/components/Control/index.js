import React from 'react'
import { Field } from 'redux-form'
import { Form } from 'reactstrap'
import './index.scss'

const Control = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      Control
      <Field name='control' component='input' type='text' />
    </Form>
  )
}

export default Control
