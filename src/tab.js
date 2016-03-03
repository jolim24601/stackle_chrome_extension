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

function findDefaultStack(stacks) {
  // look for scrapbook, just assuming it's the first one for now
  return stacks[0]
}

// this needs to be done through some kind of ext. auth.
const username = 'jules'
const user_id = 1

function formatPotentialBit(defaultStack, potentialBit) {
  const defaultBit = {
    user_id,
    privacy: defaultStack.privacy,
    content: '',
    kind: 'text',
    stackIds: [defaultStack.id]
  }

  const parsedBit = potentialBit ? JSON.parse(potentialBit) : {}
  return Object.assign({}, defaultBit, parsedBit)
}

chrome.storage.local.get('potentialBit', (objs) => {
  const { potentialBit } = objs

  httpGet(username)
    .then(
      (stacks) => {
        const defaultStack = findDefaultStack(stacks)
        const formattedBit = formatPotentialBit(defaultStack, potentialBit)

        const initialState = {
          potentialBit: formattedBit,
          stacks: JSON.parse(stacks)
        }

        renderRoot(initialState)
      },
      (reason) => {
        console.error('Something went wrong', reason)
      }
    )
})
