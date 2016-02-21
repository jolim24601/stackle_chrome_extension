import React, { Component } from 'react'

export default class NewBit extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>New Bit</button>
    )
  }
}
