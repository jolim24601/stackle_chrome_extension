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
