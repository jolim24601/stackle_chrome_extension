import React, { Component, PropTypes } from 'react'
import BitForm from './BitForm'

export default class BitItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { editing: false }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, content) {
    if (content.length === 0) {
      this.props.deleteBit(id)
    } else {
      this.props.editBit(id, content)
    }
    this.setState({ editing: false })
  }

  render() {
    const { bit, addBit, deleteBit } = this.props
    let element
    if (this.state.editing) {
      element = (
        <BitForm
          content={bit.content}
          editing={this.state.editing}
          onSave={(content) => this.handleSave(bit.id, content)}
          />
      )
    } else {
      element = (
        <div>
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {this.props.bit.content}
          </label>
        </div>
      )
    }

    return (
      <li>
        {element}
      </li>
    )
  }
}

BitItem.propTypes = {
  bit: PropTypes.object.isRequired,
  addBit: PropTypes.func.isRequired,
  editBit: PropTypes.func.isRequired,
  deleteBit: PropTypes.func.isRequired
}
