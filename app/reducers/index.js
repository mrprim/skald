import { combineReducers } from 'redux'
import form from './formReducers'
import game from './game'

const rootReducer = combineReducers({
  form,
  game
})

export default rootReducer
