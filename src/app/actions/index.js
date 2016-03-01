import * as types from '../constants/ActionTypes'

export function editBit({ content, privacy, stackIds }) {
  return { type: types.EDIT_BIT, content, privacy, stackIds }
}

export function removeBit() {
  return { type: types.REMOVE_BIT }
}
