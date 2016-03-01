import React from 'react'
import { render } from 'react-dom'
import Root from './app/containers/Root'
import { httpGet } from './app/utils/ApiUtils'

function renderRoot(initialState) {
  const configureStore = require('./app/store/configureStore').default
  render(
    <Root store={configureStore(initialState)} />,
    document.querySelector('#root')
  )
}

chrome.storage.local.get('potentialBit', (objs) => {
  const { potentialBit } = objs

  const defaultBit = {
    user_id: 1,
    privacy: false,
    content: '',
    kind: 'text',
    stackIds: []
  }

  const username = 'jules'
  httpGet(username)
    .then(
      (stacks) => {
        const initialState = {
          potentialBit: potentialBit ? JSON.parse(potentialBit) : defaultBit,
          stacks: JSON.parse(stacks)
        }

        renderRoot(initialState)
      },
      (reason) => {
        console.error('Something went wrong', reason)
      }
    )
})
