import { ADD_BIT, DELETE_BIT, EDIT_BIT, DELETE_POTENTIAL_BIT } from '../constants/ActionTypes'

let initialState = {
  bits: [],
  potentialBit: {}
}

export default function rootReducer(state = initialState, action) {
  // bits declared here due to switch statements being of a single lexical scope
  let bits

  switch (action.type) {
    case ADD_BIT:

      let bit = {

        id: state.bits.reduce((maxId, bit) => Math.max(bit.id, maxId), -1) + 1,
        content: action.content

      }

      bits = { bits: [bit, ...state.bits] }

      return Object.assign({}, state, bits)

    case DELETE_BIT:

      let bits = {

        bits: state.bits.filter((bit) => bit.id !== action.id)

      }

      return Object.assign({}, state, bits)

    case EDIT_BIT:

      bits = {

        bits: state.bits.map((bit) =>
          bit.id === action.id ? 
            Object.assign({}, bit, { content: action.content }) : bit
        )

      }

      return Object.assign({}, state, bits)

    case DELETE_POTENTIAL_BIT:
      return Object.assign({}, state, { potentialBit: { content: '' } })

    default:
      return state
  }
}

// schema
// create_table "bits", force: :cascade do |t|
//   t.integer  "user_id",                   null: false
//   t.text     "content",                   null: false
//   t.boolean  "privacy",    default: true
//   t.datetime "created_at"
//   t.datetime "updated_at"
//   t.string   "kind",                      null: false
// end
// create_table "stackings", force: :cascade do |t|
//   t.integer  "stackable_id"
//   t.integer  "stack_id"
//   t.datetime "created_at"
//   t.datetime "updated_at"
//   t.integer  "rank"
//   t.string   "stackable_type"
// end
//
// add_index "stackings", ["stack_id"], name: "index_stackings_on_stack_id", using: :btree
// add_index "stackings", ["stackable_id"], name: "index_stackings_on_stackable_id", using: :btree
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
// add_index "stacks", ["title"], name: "index_stacks_on_title", using: :btree