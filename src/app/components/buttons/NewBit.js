import React, { Component } from 'react'
import './Button.css'

export default class NewBit extends Component {
  render() {
    return (
      <button className="bitBtn" onClick={this.props.onClick}>
        <span className="plusSign">+</span>
      </button>
    )
  }
}
