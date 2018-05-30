import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import configureStore from './store'
import startSagas from './sagas'

export const store = configureStore()

startSagas()

ReactDOM.render(<div>
  <Provider store={store}>
    <HashRouter>
      <Layout />
    </HashRouter>
  </Provider>
</div>, document.getElementById('app'))
