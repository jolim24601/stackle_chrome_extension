import { EDIT_BIT, REMOVE_BIT } from '../constants/ActionTypes'

export default function rootReducer(state, action) {
  // switch statements are of a single lexical scope
  let potentialBit = {
    user_id: 1,
    content: action.content || '',
    privacy: action.privacy || true,
    kind: 'text',
    stackIds: action.stackIds || []
  }

  switch (action.type) {
    case EDIT_BIT:
      return Object.assign({}, state, { potentialBit })

    case REMOVE_BIT:
      potentialBit = Object.assign({}, potentialBit, { content: '' })
      return Object.assign({}, state, { potentialBit })

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
