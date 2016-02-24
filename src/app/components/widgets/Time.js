import React, { Component } from 'react'
import moment from 'moment'

export default class Time extends Component {
  constructor(props, context) {
    super(props, context)
    // eventually pass the format in as prop
    this.state = { format: 'LT' }
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: this.formatTime() }
    ), 6000)
  }

  toggleFormat() {
    if (this.state.format === 'HH:mm') {
      this.setState({ format: 'LT' })
    } else {  
      this.setState({ format: 'HH:mm' })
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  formatTime() {
    return moment().format(this.state.format)
  }

  render() {
    return (
      <h1 
        onDoubleClick={this.toggleFormat.bind(this)} 
        id="time">
        {this.formatTime()}
      </h1>
    )
  }
}
