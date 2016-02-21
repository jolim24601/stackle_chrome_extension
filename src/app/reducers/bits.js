import { ADD_BIT, DELETE_BIT, EDIT_BIT } from '../constants/ActionTypes'

const initialState = [
  {
    content: '',
    id: 0
  }
]

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

export default function bits(state = initialState, action) {
  switch (action.type) {
    case ADD_BIT:
      return [
        {
          id: state.reduce((maxId, bit) => Math.max(bit.id, maxId), -1) + 1,
          content: action.content
        },
        ...state
      ]

    case DELETE_BIT:
      return state.filter((bit) =>
        bit.id !== action.id
      )

    case EDIT_BIT:
      return state.map((bit) =>
        bit.id === action.id ?
          Object.assign({}, bit, { content: action.content }) :
          bit
      )

    default:
      return state
  }
}
