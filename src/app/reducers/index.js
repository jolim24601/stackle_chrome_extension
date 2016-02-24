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