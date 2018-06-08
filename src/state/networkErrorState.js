import { createReducer, createAction } from 'redux-act'
import store from 'store'

const networkErrorActions = {
  throw: createAction(),
  clear: createAction()
}

const initialState = {
  errorMessage: null,
  errorStatus: null
}

export default createReducer({
  [networkErrorActions.throw]: (state, { message, status }) => {
    return Object.assign({}, state, {
      errorMessage: message,
      errorStatus: status
    })
  },
  [networkErrorActions.clear]: () => {
    return initialState
  }
}, initialState)


/**
 * Setters
 */

export const throwNetworkError = error => {
  store.dispatch(networkErrorActions.throw(error))
}

export const clearNetworkError = () => {
  store.dispatch(networkErrorActions.clear())
}
