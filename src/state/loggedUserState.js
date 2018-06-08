/* eslint no-multi-spaces: 'off', indent: 'off' */

import { createReducer, createAction } from 'redux-act'
import store from 'store'

const loggedUserActions = {
  pending: createAction(),
  authorized: createAction(),
  unauthorized: createAction()
}

const initialState = {
  logged: null,            // Whether the user is logged in or not:
                           // `null` signifies an unknown state.
                           // A boolean value represents a known state
  userId: null,
  firstName: null,
  lastName: null,
  fullName: null
}

export default createReducer({
  [loggedUserActions.authorized]: (state, authDetails) => {
    return Object.assign({}, state, {
      logged: true,
      userId: authDetails.userId,
      firstName: authDetails.firstName,
      lastName: authDetails.lastName,
      fullName: authDetails.firstName + ' ' + authDetails.lastName,
    })
  },

  [loggedUserActions.unauthorized]: () => {
    return Object.assign({}, initialState, {
      logged: false
    })
  },

  [loggedUserActions.pending]: () => {
    // Sets logged back to null
    return Object.assign({}, initialState)
  }

}, initialState)


/**
 * Setters
 */

export const setAuthorized = authDetails => {
  store.dispatch(loggedUserActions.authorized(authDetails))
}

export const setUnauthorized = () => {
  store.dispatch(loggedUserActions.unauthorized())
}

export const setPending = () => {
  store.dispatch(loggedUserActions.pending())
}
