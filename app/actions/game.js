import * as types from '../constants/actionTypes'

export const submit = command => ({
  type: types.SUBMIT,
  command
})

export const print = message => ({
  type: types.PRINT,
  message
})
