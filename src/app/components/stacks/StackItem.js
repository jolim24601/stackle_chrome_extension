import React, { Component, PropTypes } from 'react'
import './StackItem.css'

export default class StackItem extends Component {
  handleClick() {
    this.props.editSelectedStack(this.props.stack)
  }

  render() {
    const { stack, handleClick } = this.props

    return (
      <button
        value={stack.id}
        onClick={this.handleClick.bind(this)}
        className="selectStackBtn"
        >

        <li className="stackMini group">
          <div className="stackListLeft">
            <h3>{stack.title}</h3>

            <div className="stackListMeta">
              <span>{stack.privacy ? '🔒': ' '}</span>
              <span className="bitCount separator">{stack.bits.length} bits</span>
              <span className="timeAgo">Edited {stack.timeAgo}</span>
            </div>
          </div>
        </li>
      </button>
    )
  }
}

StackItem.propTypes = {
  stack: PropTypes.object.isRequired,
  editSelectedStack: PropTypes.func.isRequired
}

// Stack
// create_table "stackings", force: :cascade do |t|
//   t.integer  "stackable_id"
//   t.integer  "stack_id"
//   t.datetime "created_at"
//   t.datetime "updated_at"
//   t.integer  "rank"
//   t.string   "stackable_type"
// end
//
// create_table "stacks", force: :cascade do |t|
//   t.string   "title",                      null: false
//   t.string   "cover_image"
//   t.boolean  "privacy",     default: true
//   t.datetime "created_at"
//   t.datetime "updated_at"
//   t.integer  "user_id",                    null: false
// end
//
