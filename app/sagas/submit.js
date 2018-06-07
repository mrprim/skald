import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as actions from '../actions/game'
import handleSubmit from '../utils/handleSubmit'

const saga = function * () {
  yield takeEvery(types.SUBMIT, loader)
}

const loader = function * (action) {
  const result = handleSubmit('demo', '0', action.command)
  console.log(result)
  for (let i = 0; i < result.messages.length; i++) {
    yield delay(500)
    yield put(actions.print(result.messages[i]))
  }
}

export default saga
