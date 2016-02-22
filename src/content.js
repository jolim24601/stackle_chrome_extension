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

  render() {
    const toolStyle = {
      position: 'absolute',
      left: `${this.state.clientX}px`,
      top: `${this.state.clientY}px`
    }

    if (this.state.visible) {
      return (
        <button
          id="stackle-tool"
          style={toolStyle}>
          Create Bit
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
