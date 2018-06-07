import sagaMiddleware from '../middleware'
import submit from './submit'

const sagas = [
  submit
]

export default function runSagas () {
  sagas.forEach(s => sagaMiddleware.run(s))
}
