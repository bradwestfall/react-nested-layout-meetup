import { combineReducers } from 'redux'

// Custom Reducers
import loggedUserState from './loggedUserState'
import networkErrorState from './networkErrorState'

// Combine Reducers
const reducers = combineReducers({
  loggedUserState,
  networkErrorState
})

export default reducers
