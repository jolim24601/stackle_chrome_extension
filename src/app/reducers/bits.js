import { ADD_BIT, DELETE_BIT, EDIT_BIT } from '../constants/ActionTypes'

export default function bits(state = [], action) {
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
