import sagaMiddleware from '../middleware'

const sagas = []

export default function runSagas () {
  sagas.forEach(s => sagaMiddleware.run(s))
}
