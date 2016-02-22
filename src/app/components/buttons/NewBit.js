import React, { Component } from 'react'
import './NewBit.css'

export default class NewBit extends Component {
  render() {
    return (
      <button className="newBit" onClick={this.props.onClick}>+</button>
    )
  }
}
