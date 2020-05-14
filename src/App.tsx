import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { HashRouter } from 'react-router-dom'
import HomeControl from './components/HomeControl'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HomeControl />
      </HashRouter>
    </Provider>
  )
}

export default App
