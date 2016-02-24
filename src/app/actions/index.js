import * as types from '../constants/ActionTypes'

export function addBit(content) {
  return { type: types.ADD_BIT, content }
}

export function deleteBit(id) {
  return { type: types.DELETE_BIT, id }
}

export function editBit(id, content) {
  return { type: types.EDIT_BIT, id, content }
}

export function deletePotentialBit(potentialBit) {
  return { type: types.DELETE_POTENTIAL_BIT, potentialBit }
}
