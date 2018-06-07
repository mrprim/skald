import * as types from '../constants/actionTypes'

const initialState = {
  storyName: 'demo',
  currentPage: '0',
  messages: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT: return submit(state, action)
    case types.PRINT: return print(state, action)
    default: return state
  }
}

const submit = (state, action) => ({
  messages: [
    ...state.messages,
    { body: action.command, character: 'player' }
  ]
})

const print = (state, action) => ({
  messages: [
    ...state.messages,
    action.message
  ]
})
