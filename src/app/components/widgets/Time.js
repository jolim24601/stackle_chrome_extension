import React, { Component } from 'react'
import moment from 'moment'

export default class Time extends Component {
  constructor(props) {
    super(props)
    
    this.state = { format: 'h:mm' }
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: this.formatTime() }
    ), 6000)
  }

  toggleFormat() {
    if (this.state.format === 'HH:mm') {
      this.setState({ format: 'h:mm' })
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
