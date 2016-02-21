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

export function addStack({ title, privacy }) {
  return { type: types.ADD_STACK, title, privacy }
}

export function deleteStack(id) {
  return { type: types.DELETE_STACK, id }
}

export function editStack({ id, title, privacy }) {
  return { type: types.EDIT_STACK, id, title, privacy }
}
