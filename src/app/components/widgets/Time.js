import React, { Component } from 'react'
import moment from 'moment'

export default class Time extends Component {
  render() {
    let time = `${moment().format('LT')}`
    return (
      <h1 className="time-widget">{time}</h1>
    )
  }
}
