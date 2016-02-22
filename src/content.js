import React, { Component } from 'react'
import { render }from 'react-dom'

class StackleTooltip extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { visible: false }
  }

  componentDidMount() {
    document.onmouseup = this.showTooltip.bind(this)
  }

  showTooltip() {
    const selection = window.getSelection()
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    const selectedText = selection.toString()
    console.log(selectedText)
    if (selectedText) {
      this.setState({
        visible: true,
        clientX: rect.left,
        clientY: rect.top
      })
    } else {
      this.setState({ visible: false })
    }
  }

  stackIt() {
    // Here we can initiate a Cross-Origin XMLHttpRequest like so:
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
    // xhr.open("POST", chrome.extension.getURL('some/path/inside/our/extension'), true);
    // xhr.send();

    // OR if we set permissions to an outside API:
    // const data = ....create a URI encoded string here
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "http://api.example.com/data.json", true);
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.setRequestHeader("Content-length", data.length);
    //
    // xhr.onreadystatechange = () => {//Call a function when the state changes.
    //    if (xhr.readyState == 4 && xhr.status == 200) {
    //       console.log('STACKED')
    //    }
    // }
    // xhr.send(data);
    console.log('STACKED')
  }

  render() {
    const toolStyle = {
      position: 'absolute',
      left: `${this.state.clientX}px`,
      top: `${this.state.clientY}px`
    }

    if (this.state.visible) {
      return (
        <button
          onClick={this.stackIt.bind(this)}
          id="stackle-tool"
          style={toolStyle}>
          Stack It
        </button>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div')
  injectDOM.className = 'stackle-tooltip'
  document.body.appendChild(injectDOM)
  render(<StackleTooltip />, injectDOM)
})
