import React, { Component, PropTypes } from 'react'

export default class AddButton extends Component {
  static propTypes = {
    showForm: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context)
  }

  showForm() {
    this.props.showForm()
  }

  render() {
    return (
      <button onClick={this.showForm}>Add a bit</button>
    )
  }
}
