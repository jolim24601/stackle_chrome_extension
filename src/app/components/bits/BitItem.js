import React, { Component, PropTypes } from 'react'
import BitForm from './BitForm'
import './Bit.css'

export default class BitItem extends Component {
  constructor(props) {
    super(props)
    this.state = { editing: false }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id, content) {
    if (content.trim().length === 0) {
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
          {this.props.bit.content}
        </div>
      )
    }

    return (
      <li onDoubleClick={this.handleDoubleClick.bind(this)} className="bit">
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

// create_table "bits", force: :cascade do |t|
//   t.integer  "user_id",                   null: false
//   t.text     "content",                   null: false
//   t.boolean  "privacy",    default: true
//   t.datetime "created_at"
//   t.datetime "updated_at"
//   t.string   "kind",                      null: false
// end
