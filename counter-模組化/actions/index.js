import { ADD_VALUE, SUB_VALUE } from './actionTypes'

// action creator動作建立器

export const addValue = (payload) => {
  return { type: ADD_VALUE, payload }
}

export const subValue = (payload) => {
  return { type: SUB_VALUE, payload }
}
