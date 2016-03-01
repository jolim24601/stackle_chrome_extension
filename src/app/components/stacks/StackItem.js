import React, { Component, PropTypes } from 'react'

export default class StackItem extends Component {
  render() {
    const { stack, handleClick } = this.props

    return (
      <button value={stack.id} onClick={handleClick} className="select--stack--btn">
        <li className="stack--mini group">
          <div className="stack--list--left">
            <h3>{stack.title}</h3>

            <div className="stack--list--meta">
              <span>{stack.privacy ? 'Lock' : ''}</span>
              <span className="bit--count separator">{stack.bits.length} bits</span>
              <span className="time--ago">Edited {stack.timeAgo}</span>
            </div>
          </div>

          <div className="stack--list--right">
          </div>
        </li>
      </button>
    )
  }
}

StackItem.propTypes = {
  stack: PropTypes.stack.isRequired,
  handleClick: PropTypes.func.isRequired
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
