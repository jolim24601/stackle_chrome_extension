import React from 'react'
import { render } from 'react-dom'
import Root from './app/containers/Root'

chrome.storage.local.get(['bits', 'potentialBit'], (objs) => {
  const { bits, potentialBit } = objs

  let parsedBits = bits ? JSON.parse(bits) : []
  let parsedBit = potentialBit ? JSON.parse(potentialBit) : {}

  const initialState = { 
    bits: parsedBits, 
    potentialBit: parsedBit || {} 

  }

  const configureStore = require('./app/store/configureStore').default
  render(
    <Root store={configureStore(initialState)} />,
    document.querySelector('#root')
  )
})

    // Here we can initiate a Cross-Origin XMLHttpRequest like so:
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
    // xhr.open("POST", chrome.extension.getURL('some/path/inside/our/extension'), true);
    // xhr.send();
    // OR if we set permissions to an outside API:
    // const content = encodeURIComponent(this.state.content)
    // let params = `content=${content}`
    // params = params.replace(/%20/g, '+')

    // let xhr = new XMLHttpRequest()

    // xhr.open('POST', 'http://client.cors-api.appspot.com/client', true)
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    // xhr.onreadystatechange = () => { // Call a function when the state changes.
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //   }
    // }

    // xhr.send(params);