import React from 'react'
import ReactDOM from 'react-dom'
import Root from './app/containers/Root'

chrome.storage.local.get('state', (obj) => {
  const { state } = obj
  const initialState = JSON.parse(state || '{}')

  const configureStore = require('./app/store/configureStore').default
  ReactDOM.render(
    <Root store={configureStore(initialState)} />,
    document.querySelector('#root')
  )
})
