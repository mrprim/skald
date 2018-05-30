import * as types from '../constants/actionTypes'

const initialState = {
  commands: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SUBMIT: return submitCommand(state, action)
    default: return state
  }
}

const submitCommand = (state, action) => ({
  commands: [
    ...state.commands,
    action.command
  ]
})
