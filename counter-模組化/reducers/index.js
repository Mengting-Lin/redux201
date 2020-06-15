import { combineReducers } from 'redux'

import counter from './Counter'
import todos from './Todos'

export const rootReducer = combineReducers({
  counter,
  todos,
})
