import { setAuthorized, setUnauthorized, setPending } from 'state/loggedUserState'

export const login = () => {
  setPending()
  // return axios.post('/api/auth/login', values)
  return Promise.resolve({ userId: 1, firstName: 'Brad', lastName: 'Westfall' })
    .then(setAuthorized)
    .catch(err => {
      setUnauthorized()
      return Promise.reject(err)
    })
}

export const logout = () => {
  // return axios.post('/api/auth/logout').then(setUnauthorized)
  return Promise.resolve().then(setUnauthorized)
}

export const getLoggedUser = () => {
  // return axios.get('/api/auth/logged-user')
  // return Promise.resolve({ userId: 1, firstName: 'Brad', lastName: 'Westfall' })
  return Promise.reject({ message: 'Unauthorized', type: 403 })
    .then(setAuthorized)
    .catch(err => {
      setUnauthorized()
      return Promise.reject(err)
    })
}
