import React, { Component } from 'react'
import moment from 'moment'

export default class Time extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { time: this.formatTime() }
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: this.formatTime() }
    ), 100)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  formatTime() {
    return `${moment().format('LT')}`
  }
  render() {
    return (
      <h1 id="time">{this.state.time}</h1>
    )
  }
}
